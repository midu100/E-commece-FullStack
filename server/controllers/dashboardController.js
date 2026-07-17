const orderSchema = require("../models/orderSchema")
const userSchema = require("../models/userSchema")
const productSchema = require("../models/productSchema")
const categorySchema = require("../models/categorySchema")
const responseHandler = require("../utils/responseHandler")

const getDashboardStats = async(req,res)=>{
    try {
        // Total Revenue (only Delivered orders count as profit)
        const revenueResult = await orderSchema.aggregate([
            {$match : {status : "Delivered"}},
            {$group : {_id : null, totalRevenue : {$sum : "$totalPrice"}}}
        ])
        const totalRevenue = revenueResult[0]?.totalRevenue || 0

        // Total Orders
        const totalOrders = await orderSchema.countDocuments()

        // Orders by status
        const pendingOrders = await orderSchema.countDocuments({status : "Pending"})
        const processingOrders = await orderSchema.countDocuments({status : "Processing"})
        const shippedOrders = await orderSchema.countDocuments({status : "Shipped"})
        const deliveredOrders = await orderSchema.countDocuments({status : "Delivered"})
        const cancelledOrders = await orderSchema.countDocuments({status : "Cancelled"})

        // Total Users
        const totalUsers = await userSchema.countDocuments()
        const activeUsers = await userSchema.countDocuments({isVerified : true})
        const newUsers = await userSchema.countDocuments({
            createdAt : {$gte : new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)}
        })

        // Total Products & Categories
        const totalProducts = await productSchema.countDocuments()
        const totalCategories = await categorySchema.countDocuments()

        // Recent Orders (latest 5)
        const recentOrders = await orderSchema.find()
            .populate('user','fullName email')
            .sort({createdAt : -1})
            .limit(5)

        // Top Products (by total sold quantity from Delivered orders only)
        const topProducts = await orderSchema.aggregate([
            {$match : {status : "Delivered"}},
            {$unwind : "$items"},
            {$group : {
                _id : "$items.product",
                totalSold : {$sum : "$items.quantity"},
                totalRevenue : {$sum : "$items.subTotal"}
            }},
            {$sort : {totalSold : -1}},
            {$limit : 5},
            {$lookup : {
                from : "products",
                localField : "_id",
                foreignField : "_id",
                as : "product"
            }},
            {$unwind : "$product"}
        ])

        // Monthly Revenue (last 7 days — only Delivered orders)
        const last7DaysRevenue = await orderSchema.aggregate([
            {$match : {
                createdAt : {$gte : new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)},
                status : "Delivered"
            }},
            {$group : {
                _id : {$dateToString : {format : "%Y-%m-%d", date : "$createdAt"}},
                dailyRevenue : {$sum : "$totalPrice"},
                dailyOrders : {$sum : 1}
            }},
            {$sort : {_id : 1}}
        ])

        responseHandler.success(res,'Dashboard stats fetched',{
            totalRevenue,
            totalOrders,
            ordersByStatus : {
                pending : pendingOrders,
                processing : processingOrders,
                shipped : shippedOrders,
                delivered : deliveredOrders,
                cancelled : cancelledOrders
            },
            totalUsers,
            activeUsers,
            newUsers,
            totalProducts,
            totalCategories,
            recentOrders,
            topProducts,
            last7DaysRevenue
        })

    } 
    catch (error) {
       console.log(error)    
    }
}

module.exports = {getDashboardStats}
