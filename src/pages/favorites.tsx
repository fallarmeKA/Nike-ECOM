import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar";

interface FavoriteItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  colorways: number;
}

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([
    {
      id: "1",
      name: "Nike Air Max 270",
      price: 150,
      category: "Men's Shoes",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
      colorways: 5,
    },
    {
      id: "2",
      name: "Nike React Infinity Run",
      price: 160,
      category: "Women's Shoes",
      image:
        "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&q=80",
      colorways: 3,
    },
    {
      id: "3",
      name: "Nike Air Force 1",
      price: 110,
      category: "Lifestyle Shoes",
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80",
      colorways: 4,
    },
  ]);

  const removeFromFavorites = (id: string) => {
    setFavorites(favorites.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar favoriteItemCount={favorites.length} />

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <h1 className="text-3xl font-bold mb-8">Favorites</h1>

        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favorites.map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden group border-none shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFromFavorites(item.id)}
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full"
                  >
                    <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                  </Button>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-base mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500 mb-1">
                        {item.category}
                      </p>
                      <p className="text-sm text-gray-500">
                        {item.colorways} Colors
                      </p>
                    </div>
                    <p className="font-medium">${item.price}</p>
                  </div>
                  <div className="mt-4">
                    <Link to={`/product/${item.id}`}>
                      <Button
                        variant="outline"
                        className="w-full border-gray-300 hover:bg-gray-100 mb-2"
                      >
                        View Details
                      </Button>
                    </Link>
                    <Button className="w-full bg-black hover:bg-gray-800 text-white">
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      Add to Bag
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-medium mb-4">
              Your favorites list is empty
            </h2>
            <p className="text-gray-500 mb-8">
              Save items you love to your favorites list.
            </p>
            <Link to="/">
              <Button className="bg-black hover:bg-gray-800 text-white">
                Continue Shopping
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
