import Hero from "@/components/ecommerce/Hero";
import Category from "@/components/ecommerce/Category";
import FeaturedProducts from "@/components/ecommerce/FeaturedProducts";
import NewArrival from "@/components/ecommerce/NewArrival";
import TopSelling from "@/components/ecommerce/TopSelling";
import ServiceHighlights from "@/components/ecommerce/ServiceHighlights";

export default function Home() {
  return (
    <>
      <Hero />
      <Category />
      <FeaturedProducts />
      <NewArrival />
      <TopSelling />
      <ServiceHighlights />
    </>
  );
}
