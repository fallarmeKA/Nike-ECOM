import React from "react";
import Navbar from "@/components/layout/Navbar";
import ProductGrid from "@/components/products/ProductGrid";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const WomenPage = () => {
  // Mock data for women's products
  const womensProducts = [
    {
      id: "2",
      name: "Nike React Infinity Run",
      price: 160,
      category: "women",
      image:
        "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&q=80",
      colorways: 3,
    },
    {
      id: "5",
      name: "Nike Blazer Mid",
      price: 100,
      category: "women",
      image:
        "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500&q=80",
      colorways: 6,
    },
    {
      id: "7",
      name: "Nike Joyride Run",
      price: 180,
      category: "women",
      image:
        "https://images.unsplash.com/photo-1576672843344-f01907a9d40c?w=500&q=80",
      colorways: 2,
      isSale: true,
    },
    {
      id: "27",
      name: "Nike Air Zoom Pegasus 38",
      price: 120,
      category: "women",
      image:
        "https://images.unsplash.com/photo-1465877783223-4eba513e27c6?w=500&q=80",
      colorways: 5,
      isNew: true,
    },
    {
      id: "28",
      name: "Nike Free Run 5.0",
      price: 100,
      category: "women",
      image:
        "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&q=80",
      colorways: 4,
    },
    {
      id: "29",
      name: "Nike Air Force 1 Shadow",
      price: 110,
      category: "women",
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80",
      colorways: 6,
      isNew: true,
    },
    {
      id: "30",
      name: "Nike Sportswear Essential Fleece",
      price: 65,
      category: "women",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80",
      colorways: 3,
    },
    {
      id: "31",
      name: "Nike Dri-FIT One Luxe",
      price: 45,
      category: "women",
      image:
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&q=80",
      colorways: 5,
      isNew: true,
    },
    {
      id: "32",
      name: "Nike Pro Training Tights",
      price: 50,
      category: "women",
      image:
        "https://images.unsplash.com/photo-1565693413579-8a73ffa4454a?w=500&q=80",
      colorways: 4,
    },
    {
      id: "33",
      name: "Nike Yoga Luxe Jumpsuit",
      price: 120,
      category: "women",
      image:
        "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&q=80",
      colorways: 2,
      isNew: true,
    },
    {
      id: "34",
      name: "Nike Sportswear Windrunner",
      price: 100,
      category: "women",
      image:
        "https://images.unsplash.com/photo-1578021127722-1f1ff95b429e?w=500&q=80",
      colorways: 3,
    },
    {
      id: "35",
      name: "Nike Everyday Plus Cushioned Socks",
      price: 18,
      category: "women",
      image:
        "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=500&q=80",
      colorways: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-20 pb-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Women's Collection</h1>
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
              src="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80"
              alt="Women's Shoes"
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
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80"
              alt="Women's Clothing"
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
              src="https://images.unsplash.com/photo-1565693413579-8a73ffa4454a?w=800&q=80"
              alt="Women's Accessories"
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
          products={womensProducts}
          title="Women's Products"
          showFilters={true}
        />
      </div>
    </div>
  );
};

export default WomenPage;
