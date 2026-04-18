import React from "react";
import Image from "next/image";
import Link from "next/link";
import SingleCategory from "@/components/shared/SingleCategory";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Category = () => {
  
  return (
    <>
      <section className="my-8 md:my-12 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto">
          
          <div className="flex flex-wrap md:flex-nowrap gap-[20px] justify-center md:justify-between">

            <SingleCategory src={'/cat1.jpg'} name={'Mens'} href={'/'}/>
            <SingleCategory src={'/hero8.jpg'} name={'Womens'} href={'/'}/>
            <SingleCategory src={'/cat3.jpg'} name={'Kids'} href={'/'}/>
            <SingleCategory src={'/cat4.jpg'} name={'Beuty'} href={'/'}/>

          </div>

        </div>
      </section>
    </>
  );
};

export default Category;
