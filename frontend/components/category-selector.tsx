"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toTitleCase } from "@/lib/helper";

interface Category {
  id: number;
  name: string;
}

export default function CategorySelector() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("/api/categories");
      const data = await response.json();
      setCategories([{ id: 0, name: "All Products" }, ...data]);
    };
    fetchCategories();
  }, []);

  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || "All Products"
  );

  useEffect(() => {
    setSelectedCategory(searchParams.get("category") || "All Products");
  }, [searchParams]);

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams);
    if (category === "All Products") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    params.set("page", "1");
    router.push(`/products?${params.toString()}`);
  };

  return (
    <ScrollArea className="static h-[calc(100vh-200px)] pr-4">
      <div className="space-y-2">
        <h2 className="mb-4 text-xl font-semibold">Categories</h2>
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.name ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => handleCategoryChange(category.name)}
          >
            {toTitleCase(category.name)}
          </Button>
        ))}
      </div>
    </ScrollArea>
  );
}
