import CallToAction from "../components/call-to-action";
import FeaturedProducts from "../components/featured-products";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        <FeaturedProducts />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
