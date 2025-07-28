import React, { useState } from "react";
import { Search, Heart, ShoppingBag, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

interface NavbarProps {
  cartItemCount?: number;
  favoriteItemCount?: number;
}

const Navbar = ({ cartItemCount = 0, favoriteItemCount = 0 }: NavbarProps) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const categories = [
    {
      name: "New & Featured",
      subcategories: [
        "New Releases",
        "SNKRS Launch Calendar",
        "Best Sellers",
        "Just In",
        "Latest Shoes",
      ],
    },
    {
      name: "Men",
      subcategories: [
        "All Shoes",
        "Lifestyle",
        "Running",
        "Basketball",
        "Training & Gym",
      ],
    },
    {
      name: "Women",
      subcategories: [
        "All Shoes",
        "Lifestyle",
        "Running",
        "Training & Gym",
        "Slides & Sandals",
      ],
    },
    {
      name: "Kids",
      subcategories: [
        "Big Kids",
        "Little Kids",
        "Toddler",
        "Baby & Crib",
        "All Kids Shoes",
      ],
    },
    {
      name: "Sale",
      subcategories: [
        "Men's Sale",
        "Women's Sale",
        "Kids' Sale",
        "Shoes $100 & Under",
        "Last Chance",
      ],
    },
  ];

  const handleMouseEnter = (category: string) => {
    setActiveDropdown(category);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/src\images\NLogo.png" 
                alt="Nike" 
                className="h-8 w-auto" 
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {categories.map((category) => (
              <div
                key={category.name}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(category.name)}
              >
                <Link
                  to={`/${category.name.toLowerCase().replace(/ & | /g, "-")}`}
                  className="flex items-center text-sm font-medium text-gray-900 hover:text-red-600 transition-colors"
                >
                  {category.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Link>

                {/* Dropdown Menu */}
                {activeDropdown === category.name && (
                  <div
                    className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10"
                    onMouseEnter={() => handleMouseEnter(category.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {category.subcategories.map((subcategory) => (
                      <Link
                        key={subcategory}
                        to={`/category/${subcategory.toLowerCase().replace(/ /g, "-")}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {subcategory}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Search, Favorites, Cart */}
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center relative">
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black w-64"
              />
              <Search className="absolute left-3 h-5 w-5 text-gray-400" />
            </div>

            <Link
              to="/favorites"
              className="relative text-gray-900 hover:text-red-600 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Heart className="h-6 w-6" />
              {favoriteItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {favoriteItemCount}
                </span>
              )}
            </Link>

            <Link
              to="/cart"
              className="relative text-gray-900 hover:text-red-600 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ShoppingBag className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
