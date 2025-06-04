import { useFavorites } from "@/context/FavoritesContext";
import { Heart, Heart } from "lucide-react"; // Use whichever icon system you have

const ProductCard = ({ ...props }) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorited = isFavorite(props.id);

  return (
    <div className="relative bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden">
      {/* Image, Details, etc */}
      <button
        className="absolute top-2 right-2"
        onClick={() => toggleFavorite(props)}
      >
        {favorited ? (
          <Heart className="text-red-500 fill-red-500" />
        ) : (
          <Heart className="text-gray-400" />
        )}
      </button>
    </div>
  );
};
