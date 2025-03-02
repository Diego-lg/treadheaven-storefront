import getBillboards from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import getBillboard from "@/actions/get-billboard"; // Added missing import
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import Hero from "@/components/hero-section";
import CategorySection from "@/components/category-section";
import Features from "@/components/features";
import InstagramFeed from "@/components/instagram-feed";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboards = await getBillboards(); // Fetch all billboards
  const billboardData = await getBillboard(
    "bba58e30-d31a-404b-898c-c92154a8f133"
  ); // Keep fetching single billboard for hero section

  return (
    <>
      <Container fullWidth>
        <Hero />
        <CategorySection billboards={billboards} />{" "}
        {/* Pass billboards to CategorySection */}
      </Container>
      <Container>
        <div className="space-y-10 pb-10">
          {/*   <Billboard data={billboardData} />{" "}*/}
          {/* Use billboardData for hero billboard */}
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Featured Products" items={products} />
          </div>
        </div>
      </Container>
      <Container fullWidth>
        {" "}
        <Features /> <InstagramFeed />
      </Container>
    </>
  );
};

export default HomePage;
