import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import { toFullName } from "@/lib/helper";

interface Reviews {
  id: number;
  author: string;
  comment: string;
  rating: number;
  avatarUrl?: string;
  firstName?: string;
  lastName?: string;
}

interface ReviewsProps {
  reviews: Reviews[];
}

export default function ReviewSection({ reviews }: ReviewsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Customer Reviews</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="flex items-start space-x-4">
              <Avatar>
                {review.avatarUrl && (
                  <AvatarImage src={review.avatarUrl} alt={review.author} />
                )}
                <AvatarFallback>
                  {review.author ? review.author[0] : "?"}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-2">
                <div className="flex items-center">
                  <span className="mr-2 font-semibold">
                    {toFullName(review.firstName ?? "", review.lastName ?? "")}
                  </span>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className={`h-4 w-4 ${
                          index < review.rating
                            ? "fill-current text-yellow-400"
                            : "text-gray-300"
                        }`}
                        aria-hidden="true"
                      />
                    ))}
                    <span className="sr-only">
                      {review.rating} out of 5 stars
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
