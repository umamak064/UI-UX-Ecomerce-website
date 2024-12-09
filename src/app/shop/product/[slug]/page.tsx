import { GetServerSideProps } from 'next';
import { relatedProductData } from '@/app/page';
import { Product } from "@/types/product.types";
import ProductListSec from "@/components/common/ProductListSec";
import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct";
import Header from "@/components/product-page/Header/AddToCardSection";
import Tabs from "@/components/product-page/Tabs/ProductDetails";

// Replace this with your actual data fetching logic
async function fetchData() {
  const response = await fetch('https://example.com/api/products'); // Replace with your API or database query
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.params;
  console.log("Params received during server-side rendering:", params);

  // Check if slug is valid
  if (!params?.slug || params.slug.length === 0) {
    console.error("Invalid or missing slug:", params);
    return { notFound: true };
  }

  const productId = Number(params.slug[0]);
  if (isNaN(productId)) {
    console.error("Invalid product ID:", params.slug[0]);
    return { notFound: true };
  }

  let data: Product[];
  try {
    data = await fetchData();
  } catch (error) {
    console.error("Error fetching data:", error);
    return { notFound: true };
  }

  if (!data || !Array.isArray(data)) {
    console.error("Fetched data is not valid:", data);
    return { notFound: true };
  }

  const productData = data.find((product) => product.id === productId);
  if (!productData) {
    console.error("Product not found with ID:", productId);
    return { notFound: true };
  }

  return {
    props: {
      productData,
    },
  };
};

export default function ProductPage({ productData }: { productData: Product }) {
  return (
    <main>
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
        <BreadcrumbProduct title={productData.title ?? "product"} />
        <section className="mb-11">
          <Header data={productData} />
        </section>
        <Tabs />
      </div>
      <div className="mb-[50px] sm:mb-20">
        <ProductListSec title="You might also like" data={relatedProductData} />
      </div>
    </main>
  );
}
