import AdBanner from "@/components/ad-banner";
import CategorySelector from "@/components/category-selector";
import Pagination from "@/components/pagination";
import ProductGrid from "@/components/product-grid";
import ProductSearch from "@/components/product-search";
import ProductSort from "@/components/product-sort";
import { useState } from "react";


export const metadata = {
  title: "Eco-Friendly Products | EcoShop",
  description: "Browse our selection of sustainable and eco-friendly products",
};

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <CategorySelector />
        </div>
        <div className="lg:col-span-3">
          <div className="mb-2 w-full">
            <ProductSearch />
          </div>
          <AdBanner />
          <div className="mb-4 flex justify-end">
            <ProductSort />
          </div>
          <ProductGrid />
        </div>
      </div>
    </div>
  );
}