import React from "react";
import { useFavorites } from "../components/context/FavoritesContext";
import ProductCard from "../components/products/ProductCard";

const FavoritesPage: React.FC = () => {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Favorites</h1>
      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favorites.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isFavorite={isFavorite(product.id)}
              onToggleFavorite={() => toggleFavorite(product)}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">You haven't favorited any products yet.</p>
      )}
    </div>
  );
};

export default FavoritesPage;
