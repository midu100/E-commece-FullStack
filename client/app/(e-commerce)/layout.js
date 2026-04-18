import Header from "@/components/ecommerce/Header";
import Navbar from "@/components/ecommerce/Navbar";
import Footer from "@/components/ecommerce/Footer";

export default function EcommerceLayout({ children }) {
  
  return (
    <>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
