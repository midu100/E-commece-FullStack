const cartSchema = require("../models/cartSchema");
const orderSchema = require("../models/orderSchema");
const productSchema = require("../models/productSchema");
const responseHandler = require("../utils/responseHandler");
const stripe = require("stripe")(`${process.env.STRIPE_SEC_KEY}`);
const endpointSecret = process.env.STRIPE_SIGNIN_SEC;

const checkOut = async (req, res) => {
  // cartId = 69aaaa14ababfd6de7c353de
  const { paymentType, cartId, shippingAddress, insideDhaka } = req.body;
  const orderNumber = `KAZI-${Date.now()}`;
  if (!paymentType)
    return responseHandler.error(res, "Payment type is required.");
  if (!shippingAddress)
    return responseHandler.error(res, "Shipping Address is required.");
  if (!typeof insideDhaka === "undefined")
    return responseHandler.error(res, "Please select your area");

  try {
    if (!cartId) return responseHandler.error(res, "Invalid Request", 400);

    const cartData = await cartSchema.findOne({ _id: cartId });
    if (!cartData) return responseHandler.error(res, "Invalid request");
    // console.log(cartData);

    const charge = insideDhaka === "true" ? 80 : 120;
    const totalPrice = cartData.items.reduce((initial, current) => {
      return (initial += current.subTotal);
    }, charge);

    const orderData = new orderSchema({
      user: req.user._id,
      items: cartData.items,
      shippingAddress,
      insideDhaka,
      deliveryCharge: charge,
      totalPrice,
      payment: {
        method: paymentType,
      },
      orderNumber,
    });
    orderData.save();

    if (paymentType === "cash") {
      return responseHandler.success(res, "Order placed successfully.");
    }

    // For online payment
    if (paymentType === "Stripe") {
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        line_items: [
          {
            price_data: {
              currency: "BDT",
              product_data: {
                name: "T-Shirt",
                description: "Blue T-Shirt with chest print",
              },
              unit_amount: 500 * 100,
            },
            quantity: 1,
          },
        ],
        customer_email: req.user.email,
        success_url: `https://example.com/success`,
        cancel_url: `https://example.com/error`,
      });

      return responseHandler.success( res, "Please complete checkout", session.url,);
    }

    // res.redirect(303, session.url);
  } catch (error) {
    console.log(error);
  }
};

const webhook = async (req, res) => {
  const sig = req.headers["stripe-signature"];

  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  console.log(event.type);

  if (event.type === "checkout.session.completed") {
    const session = event.data.object
    
    // Saving the payment details in the database
    // const payment = await Payment.create({
    //     customer_email: event.data.object.customer_email,
    //     amount: event.data.object.amount_total / 100,
    //     paymentId: event.data.object.id,
    //     paymentStatus: event.data.object.payment_status,
    //     createdAt: event.data.object.created,
    // })
  }

  // Return a 200 response to acknowledge receipt of the event
  res.send();
};

const getAllOrders = async (req, res) => {
  try {
    const { status } = req.query;
    const filter = {};
    if (status && status !== "All") {
      filter.status = status;
    }
    const orders = await orderSchema
      .find(filter)
      .populate("user", "fullName email phone")
      .sort({ createdAt: -1 });

    return responseHandler.success(res, "Orders fetched successfully", orders);
  } catch (error) {
    console.log(error);
    return responseHandler.error(res, error.message);
  }
};

const getOrderDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await orderSchema
      .findById(id)
      .populate("user", "fullName email phone address")
      .populate("items.product", "title price thumbnail");

    if (!order) {
      return responseHandler.error(res, "Order not found", 404);
    }

    return responseHandler.success(res, "Order details fetched successfully", order);
  } catch (error) {
    console.log(error);
    return responseHandler.error(res, error.message);
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, paymentStatus } = req.body;

    const order = await orderSchema.findById(id);
    if (!order) {
      return responseHandler.error(res, "Order not found", 404);
    }

    // 1. When order is Delivered — deduct stock from product variants
    if (status === "Delivered" && order.status !== "Delivered") {
      for (const item of order.items) {
        const product = await productSchema.findById(item.product);
        if (product) {
          const variant = product.variants.find(v => v.sku === item.sku);
          if (variant) {
            if (variant.stock < item.quantity) {
              return responseHandler.error(res, `Insufficient stock for SKU: ${item.sku}. Available: ${variant.stock}, Ordered: ${item.quantity}`, 400);
            }
            variant.stock -= item.quantity;
            await product.save();
          }
        }
      }
      order.deliveredAt = Date.now();
      order.payment.status = "Paid";
    }

    // 2. When order is Cancelled — no stock to restore since we only deduct at Delivered
    // (If it was already Delivered and somehow cancelled, restore stock)
    if (status === "Cancelled" && order.status === "Delivered") {
      for (const item of order.items) {
        const product = await productSchema.findById(item.product);
        if (product) {
          const variant = product.variants.find(v => v.sku === item.sku);
          if (variant) {
            variant.stock += item.quantity;
            await product.save();
          }
        }
      }
    }

    if (status) order.status = status;
    if (paymentStatus) order.payment.status = paymentStatus;

    await order.save();

    return responseHandler.success(res, "Order status updated successfully", order);
  } catch (error) {
    console.log(error);
    return responseHandler.error(res, error.message);
  }
};

module.exports = { checkOut, webhook, getAllOrders, getOrderDetails, updateOrderStatus };

