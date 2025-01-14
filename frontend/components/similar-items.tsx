import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface RelatedProducts {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface SimilarItemsProps {
  similarProducts: RelatedProducts[];
}

export default function SimilarItems({ similarProducts }: SimilarItemsProps) {
  return (
    <div className="mt-12">
      <h2 className="mb-4 text-2xl font-bold">Similar Items</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {similarProducts.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <Card className="transition-shadow hover:shadow-lg">
              <CardContent className="p-4">
                <div className="relative mb-2 aspect-square">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="rounded-md object-cover"
                    unoptimized
                  />
                </div>
                <h3 className="truncate font-semibold">{product.name}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <Badge variant="secondary">{product.category}</Badge>
                  <span className="font-bold text-green-600">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
