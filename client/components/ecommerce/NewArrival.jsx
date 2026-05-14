import React from "react";
import SingleProduct from "@/components/shared/SingleProduct";

const NewArrival = () => {
  return (
    <section className="mt-20 mb-10 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">

        {/* Title */}
        <div className="text-center mb-12">
          <h2
            data-aos="fade-up"
            data-aos-duration="1500"
            className="text-3xl font-semibold tracking-wide"
          >
            New Arrival
          </h2>
        </div>

        {/* Row */}
        <div className="flex flex-wrap justify-between gap-y-10">

          <SingleProduct
          className="w-full sm:w-[48%] lg:w-[23.5%]"
            name={"MEN'S HALF SLEEVE CASUAL SHIRT"}
            price={"1599.00"}
            src={"/p1.jpg"}
            cngPic={"/cat1.jpg"}
          />

          <SingleProduct
            className="w-full sm:w-[48%] lg:w-[23.5%]"
            name={"MEN'S HALF SLEEVE CASUAL SHIRT"}
            price={"1599.00"}
            src={"/p2.jpg"}
            cngPic={"/cat1.jpg"}
          />

          <SingleProduct
            className="w-full sm:w-[48%] lg:w-[23.5%]"
            name={"MEN'S HALF SLEEVE CASUAL SHIRT"}
            price={"1599.00"}
            src={"/p3.jpg"}
            cngPic={"/cat1.jpg"}
          />

          <SingleProduct
            className="w-full sm:w-[48%] lg:w-[23.5%]"
            name={"MEN'S HALF SLEEVE CASUAL SHIRT"}
            price={"1599.00"}
            src={"/p4.jpg"}
            cngPic={"/cat1.jpg"}
          />

        </div>
      </div>
    </section>
  );
};

export default NewArrival;