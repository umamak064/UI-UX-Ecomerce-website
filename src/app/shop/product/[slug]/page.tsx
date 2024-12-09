import {
    newArrivalsData,
    relatedProductData,
    topSellingData,
  } from "@/app/page";
  import ProductListSec from "@/components/common/ProductListSec";
  import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct";
  import Header from "@/components/product-page/Header/AddToCardSection";
  import Tabs from "@/components/product-page/Tabs/ProductDetails";
  import { Product } from "@/types/product.types";
  import { notFound } from "next/navigation";
  
  const data: Product[] = [
    ...newArrivalsData,
    ...topSellingData,
    ...relatedProductData,
  ];
  
  export default function ProductPage({
    params,
  }: {
    params: { slug: string[] }; // Ensure `slug` is defined as a string array
  }) {
    // Check if `params` and `params.slug` are defined and have elements
    if (!params?.slug || params.slug.length === 0) {
      notFound(); // Return a 404 if `params.slug` is undefined or empty
    }
  
    const productId = Number(params.slug[0]);
    if (isNaN(productId)) {
      notFound(); // Return a 404 if the ID is not a valid number
    }
  
    const productData = data.find(
      (product) => product.id === productId
    );
  
    if (!productData) {
      notFound(); // Return a 404 if the product data is not found
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
  