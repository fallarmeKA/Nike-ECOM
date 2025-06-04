import React from "react";
import { Heart } from "lucide-react";
import { useFavorites } from "@/context/FavoritesContext";

interface FavoriteButtonProps {
  productId: string;
  productData: {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
  };
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ productId, productData }) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorited = isFavorite(productId);

  return (
    <button
      aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
      onClick={() => toggleFavorite(productData)}
      className="p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-black"
      type="button"
    >
      <Heart
        className={`w-6 h-6 transition-colors ${
          favorited ? "text-red-600 fill-red-600" : "text-gray-400"
        }`}
      />
    </button>
  );
};

export default FavoriteButton;
