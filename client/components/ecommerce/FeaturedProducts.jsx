import Image from "next/image";
import React from "react";
import SingleFeature from "@/components/shared/SingleFeature";
import { apiClient } from "@/lib/apiClient";

const FeaturedProducts = async() => {
  const res = await apiClient.get(`/product/allproducts`,{
    next :{
      revalidate : 60 * 5
    }
  })
  // const data = await res.json()

  console.log(res)


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
          {
            res?.productList?.map((item,i)=>(
              <SingleFeature key={i} name={item.title} price={item.price} src={item.thumbnail}/>

            ))
          }
          {/* <SingleFeature name={"MEN'S FULL SLEEVE CASUAL SHIRT"} price={'1699.00'} src={'/p2.jpg'}/>
          <SingleFeature name={"MEN'S POLO"} price={'1299.00'} src={'/p3.jpg'}/>
          <SingleFeature name={"DROP SHOULDER"} price={'1499.00'} src={'/p4.jpg'}/> */}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
