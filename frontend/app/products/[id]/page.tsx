"use client";

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import ProductDetails from "@/components/product-details";
import ReviewSection from "@/components/review-section";
import SimilarItems from "@/components/similar-items";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  category: string;
  reviews: Reviews[];
  relatedProducts: RelatedProducts[];
}

interface Reviews {
  id: number;
  author: string;
  comment: string;
  rating: number;
}

interface RelatedProducts {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${id}`);
        if (!response.ok) {
          throw new Error("Product not found");
        }
        const data = await response.json();
        console.log("Fetched product:", data);
        setProduct(data);
      } catch (error) {
        notFound();
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ProductDetails product={product} />
        </div>
        <div className="lg:col-span-1">
          <ReviewSection reviews={product.reviews} />
        </div>
      </div>
      <SimilarItems similarProducts={product.relatedProducts} />
    </div>
  );
}
