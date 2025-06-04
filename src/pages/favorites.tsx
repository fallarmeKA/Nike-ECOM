import { useFavorites } from "@/context/FavoritesContext";
import ProductGrid from "@/components/products/ProductGrid";
import Navbar from "@/components/layout/Navbar";

const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <div>
      <Navbar />
      <div className="pt-20 container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Your Favorites</h1>

        {favorites.length > 0 ? (
          <ProductGrid
            products={favorites}
            title="Favorites"
            showFilters={false}
          />
        ) : (
          <p className="text-gray-500 mt-6">You haven’t added any favorites yet.</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
