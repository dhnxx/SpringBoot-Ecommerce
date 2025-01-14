"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { toTitleCase } from "@/lib/helper";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  category: string;

}

export default function ProductDetails({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);

  const incrementQuantity = () => setQuantity((q) => q + 1);
  const decrementQuantity = () => setQuantity((q) => Math.max(1, q - 1));

  const handleAddToCart = () => {
    console.log(`Added ${quantity} ${product.name}(s) to cart`);
  };

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="relative w-full h-80 overflow-hidden rounded-lg">
              <Image
                src={product.images[currentImage]}
                alt={product.name}
                layout="responsive"
                width={640}
                height={640}
                className="object-cover"
                unoptimized={true}
              />
            </div>
            <div className="flex space-x-2 overflow-x-auto">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  className={`relative h-20 w-20 overflow-hidden rounded-md ${
                    index === currentImage ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setCurrentImage(index)}
                >
                  <Image
                    src={img}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    layout="fill"
                    className="object-cover"
                    unoptimized={true}
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <Badge variant="secondary">{toTitleCase(product.category)}</Badge>
            <p className="text-xl font-semibold text-green-600">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-gray-600">{product.description}</p>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="icon" onClick={decrementQuantity}>
                <Minus className="h-4 w-4" />
              </Button>
              <span className="text-xl font-semibold">{quantity}</span>
              <Button variant="outline" size="icon" onClick={incrementQuantity}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <Button className="w-full" onClick={handleAddToCart}>
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
