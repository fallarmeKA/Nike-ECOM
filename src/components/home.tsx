import React from "react";
import { Link } from "react-router-dom";
import { Search, Heart, ShoppingBag, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Badge } from "./ui/badge";

const Home = () => {
  // Mock data for featured products
  const featuredProducts = [
    // Shoes
    {
      id: 1,
      name: "Nike Air Max 270",
      price: 150,
      category: "Men's Shoes",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
      isNew: true,
      colorways: 5,
    },
    {
      id: 2,
      name: "Nike Air Force 1",
      price: 110,
      category: "Lifestyle Shoes",
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80",
      isNew: false,
      colorways: 3,
    },
    // Upper Wear
    {
      id: 3,
      name: "Nike Dri-FIT Jacket",
      price: 85,
      category: "Upper Wear",
      image:
        "https://images.unsplash.com/photo-1617952385804-7b9a54f67c36?w=500&q=80",
      isNew: true,
      colorways: 4,
    },
    {
      id: 4,
      name: "Nike Sportswear T-Shirt",
      price: 35,
      category: "Upper Wear",
      image:
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&q=80",
      isNew: false,
      colorways: 6,
    },
    {
      id: 5,
      name: "Nike Tech Fleece Sweatshirt",
      price: 110,
      category: "Upper Wear",
      image:
        "https://images.unsplash.com/photo-1556391922-01a8073e5d43?w=500&q=80",
      isNew: false,
      colorways: 3,
    },
    // Lower Wear
    {
      id: 6,
      name: "Nike Flex Stride Shorts",
      price: 55,
      category: "Lower Wear",
      image:
        "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=500&q=80",
      isNew: true,
      colorways: 4,
    },
    {
      id: 7,
      name: "Nike Pro Cycling Shorts",
      price: 45,
      category: "Lower Wear",
      image:
        "https://images.unsplash.com/photo-1565693413579-8a73ffa4454a?w=500&q=80",
      isNew: false,
      colorways: 2,
    },
    {
      id: 8,
      name: "Nike Everyday Cushioned Socks",
      price: 18,
      category: "Socks",
      image:
        "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=500&q=80",
      isNew: false,
      colorways: 5,
    },
    {
      id: 9,
      name: "Nike Blazer Mid '77",
      price: 100,
      category: "Lifestyle Shoes",
      image:
        "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500&q=80",
      isNew: true,
      colorways: 4,
    },
    {
      id: 10,
      name: "Nike React Infinity Run",
      price: 160,
      category: "Running Shoes",
      image:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80",
      isNew: false,
      colorways: 3,
    },
    {
      id: 11,
      name: "Nike Sportswear Club Fleece",
      price: 60,
      category: "Lower Wear",
      image:
        "https://images.unsplash.com/photo-1552902019-ebcd97aa9aa0?w=500&q=80",
      isNew: true,
      colorways: 6,
    },
    {
      id: 12,
      name: "Nike Air Jordan 1",
      price: 180,
      category: "Lifestyle Shoes",
      image:
        "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=500&q=80",
      isNew: true,
      colorways: 8,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Left Side: Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png"
                  alt="Nike Logo"
                  className="h-6 w-auto"
                />
              </Link>
            </div>

            {/* Center: Navigation Links */}
            <nav className="hidden md:flex space-x-8 justify-center">
              <div className="relative group">
                <button className="flex items-center text-sm font-medium text-gray-900 hover:text-red-600 transition-colors">
                  New & Featured <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md p-2 hidden group-hover:block z-50">
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Shoes
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Shirts
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Jackets
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Footwear
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Sports Attire
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Lifestyle Attire
                  </Link>
                </div>
              </div>
              <div className="relative group">
                <button className="flex items-center text-sm font-medium text-gray-900 hover:text-red-600 transition-colors">
                  Men <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md p-2 hidden group-hover:block z-50">
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Shoes
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Shirts
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Jackets
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Footwear
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Sports Attire
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Lifestyle Attire
                  </Link>
                </div>
              </div>
              <div className="relative group">
                <button className="flex items-center text-sm font-medium text-gray-900 hover:text-red-600 transition-colors">
                  Women <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md p-2 hidden group-hover:block z-50">
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Shoes
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Shirts
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Jackets
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Footwear
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Sports Attire
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Lifestyle Attire
                  </Link>
                </div>
              </div>
              <div className="relative group">
                <button className="flex items-center text-sm font-medium text-gray-900 hover:text-red-600 transition-colors">
                  Kids <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md p-2 hidden group-hover:block z-50">
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Shoes
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Shirts
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Jackets
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Footwear
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Sports Attire
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Lifestyle Attire
                  </Link>
                </div>
              </div>
              <div className="relative group">
                <button className="flex items-center text-sm font-medium text-gray-900 hover:text-red-600 transition-colors">
                  Sale <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md p-2 hidden group-hover:block z-50">
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Shoes
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Shirts
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Jackets
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Footwear
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Sports Attire
                  </Link>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    Lifestyle Attire
                  </Link>
                </div>
              </div>
            </nav>

            {/* Right Side: Search, Favorites, Cart */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center relative">
                <Input
                  type="text"
                  placeholder="Search"
                  className="w-40 lg:w-60 pl-8 h-9 rounded-full bg-gray-100 border-none focus-visible:ring-red-500"
                />
                <Search className="absolute left-2 h-4 w-4 text-gray-500" />
              </div>
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-0">
        <div className="relative h-[600px] w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=1400&q=80"
            alt="People doing sports with Nike products"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-end pb-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Just Do It
              </h1>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-white">
                Discover the latest Nike innovations, styles, and collections.
              </p>
              <div className="flex justify-center gap-4">
                <Button className="bg-white hover:bg-gray-100 text-black">
                  Shop Men
                </Button>
                <Button className="bg-white hover:bg-gray-100 text-black">
                  Shop Women
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="new">New Arrivals</TabsTrigger>
                <TabsTrigger value="shoes">Shoes</TabsTrigger>
                <TabsTrigger value="upper">Upper Wear</TabsTrigger>
                <TabsTrigger value="lower">Lower Wear</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden group border-none shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.isNew && (
                    <Badge className="absolute top-2 left-2 bg-red-600 hover:bg-red-700">
                      New
                    </Badge>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-base mb-1">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500 mb-1">
                        {product.category}
                      </p>
                      <p className="text-sm text-gray-500">
                        {product.colorways} Colors
                      </p>
                    </div>
                    <p className="font-medium">${product.price}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white transition-colors"
            >
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Collections Banner */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&q=80"
                alt="Apparel Collection"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-2xl font-bold text-white mb-2">Apparel</h3>
                <Button className="w-fit bg-white text-black hover:bg-gray-100">
                  Shop Now
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
                alt="Footwear Collection"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-2xl font-bold text-white mb-2">Footwear</h3>
                <Button className="w-fit bg-white text-black hover:bg-gray-100">
                  Shop Now
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&q=80"
                alt="Lifestyle Collection"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Lifestyle
                </h3>
                <Button className="w-fit bg-white text-black hover:bg-gray-100">
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Shoes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Clothing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Accessories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    New Releases
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Help
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Shipping
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Returns
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Order Status
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Sustainability
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Store Locator
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Nike, Inc. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
