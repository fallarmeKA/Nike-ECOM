import React from "react";
import ProductCard from "./ProductCard";
import { useFavorites } from "../context/FavoritesContext";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  colorways: string[];
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isFavorite={isFavorite(product.id)} // ✅ updated to use context helper
          onToggleFavorite={() => toggleFavorite(product)} // ✅ pass full product
        />
      ))}
    </div>
  );
};

export default ProductGrid;
