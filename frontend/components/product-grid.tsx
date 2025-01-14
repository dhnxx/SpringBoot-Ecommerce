"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { toTitleCase } from "@/lib/helper";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Pagination from "./pagination";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ITEMS_PER_PAGE = 6;

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const query = searchParams.get("q")?.toLowerCase();
  const category = searchParams.get("category");
  const sort = searchParams.get("sort") || "name_asc";
  const page = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
      setIsLoading(false);
    };
    fetchProducts();
  }, []);

  // Handle undefined or empty products
  if (!products || products.length === 0) {
    return (
      <p className="col-span-full mt-8 text-center text-gray-500">
        No products available.
      </p>
    );
  }

  const filteredProducts = products.filter((product: Product) => {
    const matchesQuery = query
      ? product.name.toLowerCase().includes(query)
      : true;
    const matchesCategory =
      category && category !== "All Products"
        ? product.category === category
        : true;
    return matchesQuery && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sort) {
      case "name_asc":
        return a.name.localeCompare(b.name);
      case "name_desc":
        return b.name.localeCompare(a.name);
      case "price_asc":
        return a.price - b.price;
      case "price_desc":
        return b.price - a.price;
      default:
        return 0;
    }
  });

  // Calculate total pages
  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage.toString());
    router.push(`?${params.toString()}`);
  };

  const paginatedProducts = sortedProducts.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {paginatedProducts.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`} passHref>
            <Card className="flex flex-col cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
               {/* //! TODO: Replace onError Image */}
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="mb-4 h-48 w-full rounded-md object-cover"
                  unoptimized={true}
                  onError={(e) => {
                    e.currentTarget.src = "https://placecats.com/300/200";
                    e.currentTarget.onerror = null;
                  }}
                />
                <h2 className="mb-2 text-lg font-semibold">{product.name}</h2>
                <Badge variant="secondary" className="mb-2">
                  {toTitleCase(product.category)}
                </Badge>
                <p className="font-bold text-green-600">
                  ${product.price.toFixed(2)}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
        {paginatedProducts.length === 0 && (
          <p className="col-span-full mt-8 text-center text-gray-500">
            No products found. Try a different search term or category.
          </p>
        )}
      </div>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}
