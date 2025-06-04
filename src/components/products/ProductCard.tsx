import React from "react";
import { useFavorites } from "../../context/FavoritesContext";
import { Heart } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  colorways?: number;  // optional for flexibility
  isNew?: boolean;
  isSale?: boolean;
  discount?: number;
}

interface ProductCardProps extends Product {
  onQuickView?: () => void;
  onAddToFavorites?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  category,
  isNew,
  isSale,
  discount,
  onQuickView,
  onAddToFavorites,
}) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorited = isFavorite(id);

  // Build full product object to pass to toggleFavorite
  const productData: Product = { id, name, price, image, category, isNew, isSale, discount };

  return (
    <div className="relative bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-gray-700">${price.toFixed(2)}</p>
      </div>

      <button
        className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-black"
        onClick={() => toggleFavorite(productData)}
        aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
        type="button"
      >
        <Heart
          size={24}
          className={favorited ? "text-red-600" : "text-gray-400"}
          fill={favorited ? "currentColor" : "none"}
          strokeWidth={2}
        />
      </button>
    </div>
  );
};

export default ProductCard;
