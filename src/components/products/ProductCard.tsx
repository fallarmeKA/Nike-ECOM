import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
  discount?: number;
  onQuickView?: (id: string) => void;
  onAddToFavorites?: (id: string) => void;
}

const ProductCard = ({
  id = "1",
  name = "Nike Air Max 270",
  price = 150,
  image = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
  category = "Men's Shoes",
  isNew = false,
  isSale = false,
  discount = 0,
  onQuickView = () => {},
  onAddToFavorites = () => {},
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onQuickView(id);
  };

  const handleAddToFavorites = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToFavorites(id);
  };

  return (
    <Card
      className="w-full h-full overflow-hidden rounded-md border-0 shadow-sm transition-all duration-300 bg-white hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {isNew && (
              <Badge variant="default" className="bg-black text-white">
                New
              </Badge>
            )}
            {isSale && (
              <Badge variant="destructive">
                {discount ? `${discount}% Off` : "Sale"}
              </Badge>
            )}
          </div>

          {/* Quick actions overlay */}
          <div
            className={`absolute inset-0 bg-black/5 flex flex-col items-center justify-center gap-2 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
          >
            <Button
              variant="secondary"
              className="bg-white hover:bg-gray-100 text-black w-3/4"
              onClick={handleQuickView}
            >
              Quick View
            </Button>
          </div>

          {/* Favorite button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full h-8 w-8"
            onClick={handleAddToFavorites}
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="flex flex-col gap-1">
          <h3 className="font-medium text-base">{name}</h3>
          <p className="text-sm text-gray-500">{category}</p>
          <div className="flex items-center justify-between mt-1">
            <p className="font-medium">
              {isSale && discount ? (
                <>
                  <span className="text-red-600">
                    ${(price * (1 - discount / 100)).toFixed(2)}
                  </span>
                  <span className="text-gray-400 line-through ml-2">
                    ${price.toFixed(2)}
                  </span>
                </>
              ) : (
                <span>${price.toFixed(2)}</span>
              )}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
