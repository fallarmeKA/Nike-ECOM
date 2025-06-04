import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { subcategory } = useParams<{ subcategory: string }>();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Category: {subcategory?.replace(/-/g, " ")}</h1>
      {/* Render filtered products or a message */}
    </div>
  );
};

export default CategoryPage;
