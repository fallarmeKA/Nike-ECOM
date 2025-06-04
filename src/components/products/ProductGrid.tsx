import React, { useState } from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  category: string;
  image: string;
  colorways: number;
  isNew?: boolean;
  isSale?: boolean;
}

interface ProductGridProps {
  products?: Product[];
  title?: string;
  showFilters?: boolean;
}

const defaultProducts: Product[] = [
  {
    id: "1",
    name: "Nike Air Max 270",
    price: 150,
    category: "men",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
    colorways: 4,
    isNew: true,
  },
  {
    id: "2",
    name: "Nike React Infinity Run",
    price: 160,
    category: "women",
    image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&q=80",
    colorways: 3,
  },
  {
    id: "3",
    name: "Nike Air Force 1",
    price: 100,
    category: "kids",
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500&q=80",
    colorways: 5,
  },
  {
    id: "4",
    name: "Nike ZoomX Vaporfly",
    price: 250,
    category: "men",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80",
    colorways: 2,
    isNew: true,
  },
  {
    id: "5",
    name: "Nike Blazer Mid",
    price: 100,
    category: "women",
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500&q=80",
    colorways: 6,
  },
  {
    id: "6",
    name: "Nike Air Zoom Pegasus",
    price: 120,
    category: "men",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80",
    colorways: 3,
    isSale: true,
    discount: 15,
    originalPrice: 140,
  },
  {
    id: "7",
    name: "Nike Joyride Run",
    price: 180,
    category: "women",
    image: "https://images.unsplash.com/photo-1576672843344-f01907a9d40c?w=500&q=80",
    colorways: 2,
    isSale: true,
    discount: 10,
    originalPrice: 200,
  },
  {
    id: "8",
    name: "Nike SB Dunk Low",
    price: 110,
    category: "kids",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80",
    colorways: 4,
  },
];

const ProductGrid: React.FC<ProductGridProps> = ({
  products = defaultProducts,
  title = "Featured Products",
  showFilters = true,
}) => {
  const [sortBy, setSortBy] = useState("featured");
  const [filterCategory, setFilterCategory] = useState("all");

  const filteredProducts = products.filter((product) => {
    if (filterCategory === "all") return true;
    if (filterCategory === "new") return product.isNew === true;
    if (filterCategory === "sale") return product.isSale === true;
    return product.category === filterCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    return 0;
  });

  const handleQuickView = (productId: string) => {
    console.log(`Quick view product ${productId}`);
  };

  const handleAddToFavorites = (productId: string) => {
    console.log(`Toggle favorite for product ${productId}`);
  };

  return (
    <div className="w-full bg-white py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">{title}</h2>

          {showFilters && (
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
              <div className="flex items-center">
                <label htmlFor="filter" className="mr-2 text-sm font-medium text-gray-700">
                  Filter:
                </label>
                <select
                  id="filter"
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black text-sm"
                >
                  <option value="all">All Products</option>
                  <option value="new">New Arrivals</option>
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                  <option value="kids">Kids</option>
                  <option value="sale">Sale</option>
                </select>
              </div>

              <div className="flex items-center">
                <label htmlFor="sort" className="mr-2 text-sm font-medium text-gray-700">
                  Sort by:
                </label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black text-sm"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              category={product.category}
              isNew={product.isNew}
              isSale={product.isSale}
              discount={product.discount}
              onQuickView={() => handleQuickView(product.id)}
              onAddToFavorites={() => handleAddToFavorites(product.id)}
            />
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;