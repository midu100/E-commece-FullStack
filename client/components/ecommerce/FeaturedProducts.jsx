import Image from "next/image";
import React from "react";
import SingleFeature from "@/components/shared/SingleFeature";

const FeaturedProducts = () => {
  return (
    <section className="m-16">
      <div className="container">

        {/* Title */}
        <div className="text-center mb-10">
          <h2 data-aos="fade-up" data-aos-duration="1500" className="text-3xl font-semibold tracking-wide">
            Featured Products
          </h2>
        </div>

        {/* Row */}
        <div className="row flex flex-wrap justify-between gap-y-10">
          <SingleFeature name={"MEN'S HALF SLEEVE CASUAL SHIRT"} price={'1699.00'} src={'/p1.jpg'}/>
          <SingleFeature name={"MEN'S FULL SLEEVE CASUAL SHIRT"} price={'1699.00'} src={'/p2.jpg'}/>
          <SingleFeature name={"MEN'S POLO"} price={'1299.00'} src={'/p3.jpg'}/>
          <SingleFeature name={"DROP SHOULDER"} price={'1499.00'} src={'/p4.jpg'}/>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
