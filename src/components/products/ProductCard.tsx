import React from "react";
import FavoriteButton from "./FavoriteButton";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  colorways: string[]; // simplified version
}

interface ProductCardProps {
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isFavorite, onToggleFavorite }) => {
  return (
    <div className="relative border p-4 rounded-md">
      <img src={product.image} alt={product.name} className="w-full h-auto" />
      <h2 className="mt-2 text-lg font-semibold">{product.name}</h2>
      <p className="text-sm text-gray-600">{product.category}</p>
      <p className="text-md font-bold">${product.price.toFixed(2)}</p>

      <div className="absolute top-2 right-2">
        <FavoriteButton isFavorite={isFavorite} onClick={onToggleFavorite} />
      </div>
    </div>
  );
};

export default ProductCard;
