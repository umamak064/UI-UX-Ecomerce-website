import {
  
    relatedProductData,
    
  } from "@/app/page";
  import ProductListSec from "@/components/common/ProductListSec";
  import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct";
  import Header from "@/components/product-page/Header/AddToCardSection";
  import Tabs from "@/components/product-page/Tabs/ProductDetails";
  import { Product } from "@/types/product.types";
  import { notFound } from "next/navigation";
  
  // Example async function to fetch data
  async function fetchData() {
    // Replace with your data fetching logic
    const response = await fetch("/path/to/data");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  }
  
  export default async function ProductPage({
    params,
  }: {
    params: { slug?: string[] };
  }) {
    console.log("Params received during prerendering:", params);
  
    if (!params?.slug || params.slug.length === 0) {
      console.error("Invalid or missing slug:", params);
      notFound();
    }
  
    const productId = Number(params.slug[0]);
    if (isNaN(productId)) {
      console.error("Invalid product ID:", params.slug[0]);
      notFound();
    }
  
    // Fetch data
    const data = await fetchData();
  
    const productData = data.find((product: Product) => product.id === productId);
    if (!productData) {
      console.error("Product not found with ID:", productId);
      notFound();
    }
  
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
  