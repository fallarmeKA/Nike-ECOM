import React from "react";
import Navbar from "@/components/layout/Navbar";
import ProductGrid from "@/components/products/ProductGrid";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MenPage = () => {
  // Mock data for men's products
  const mensProducts = [
    {
      id: "1",
      name: "Nike Air Max 270",
      price: 150,
      category: "men",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
      colorways: 4,
      isNew: true,
    },
    {
      id: "4",
      name: "Nike ZoomX Vaporfly",
      price: 250,
      category: "men",
      image:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80",
      colorways: 2,
      isNew: true,
    },
    {
      id: "6",
      name: "Nike Air Zoom Pegasus",
      price: 120,
      category: "men",
      image:
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80",
      colorways: 3,
      isSale: true,
    },
    {
      id: "10",
      name: "Nike React Infinity Run",
      price: 160,
      category: "men",
      image:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80",
      colorways: 3,
    },
    {
      id: "12",
      name: "Nike Air Jordan 1",
      price: 180,
      category: "men",
      image:
        "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=500&q=80",
      colorways: 8,
      isNew: true,
    },
    {
      id: "20",
      name: "Nike Dri-FIT Jacket",
      price: 85,
      category: "men",
      image:
        "https://images.unsplash.com/photo-1617952385804-7b9a54f67c36?w=500&q=80",
      colorways: 4,
      isNew: true,
    },
    {
      id: "21",
      name: "Nike Sportswear T-Shirt",
      price: 35,
      category: "men",
      image:
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&q=80",
      colorways: 6,
    },
    {
      id: "22",
      name: "Nike Tech Fleece Sweatshirt",
      price: 110,
      category: "men",
      image:
        "https://images.unsplash.com/photo-1556391922-01a8073e5d43?w=500&q=80",
      colorways: 3,
    },
    {
      id: "23",
      name: "Nike Flex Stride Shorts",
      price: 55,
      category: "men",
      image:
        "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=500&q=80",
      colorways: 4,
      isNew: true,
    },
    {
      id: "24",
      name: "Nike Sportswear Club Fleece",
      price: 60,
      category: "men",
      image:
        "https://images.unsplash.com/photo-1552902019-ebcd97aa9aa0?w=500&q=80",
      colorways: 6,
      isNew: true,
    },
    {
      id: "25",
      name: "Nike Everyday Cushioned Socks",
      price: 18,
      category: "men",
      image:
        "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=500&q=80",
      colorways: 5,
    },
    {
      id: "26",
      name: "Nike Air Force 1 '07",
      price: 100,
      category: "men",
      image:
        "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500&q=80",
      colorways: 7,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-20 pb-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Men's Collection</h1>
          <p className="text-gray-600 mb-6">
            Performance and style for every athlete.
          </p>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="bg-transparent border-b w-full justify-start rounded-none">
              <TabsTrigger
                value="all"
                className="data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="shoes"
                className="data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none"
              >
                Shoes
              </TabsTrigger>
              <TabsTrigger
                value="clothing"
                className="data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none"
              >
                Clothing
              </TabsTrigger>
              <TabsTrigger
                value="accessories"
                className="data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none"
              >
                Accessories
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"
              alt="Men's Shoes"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="text-2xl font-bold text-white mb-2">Footwear</h3>
              <Button className="w-fit bg-white text-black hover:bg-gray-100">
                Shop Now
              </Button>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1617952385804-7b9a54f67c36?w=800&q=80"
              alt="Men's Clothing"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="text-2xl font-bold text-white mb-2">Clothing</h3>
              <Button className="w-fit bg-white text-black hover:bg-gray-100">
                Shop Now
              </Button>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1562183241-b937e95585b6?w=800&q=80"
              alt="Men's Accessories"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="text-2xl font-bold text-white mb-2">
                Accessories
              </h3>
              <Button className="w-fit bg-white text-black hover:bg-gray-100">
                Shop Now
              </Button>
            </div>
          </div>
        </div>

        <ProductGrid
          products={mensProducts}
          title="Men's Products"
          showFilters={true}
        />
      </div>
    </div>
  );
};

export default MenPage;
