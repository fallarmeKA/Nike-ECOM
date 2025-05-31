import React from "react";
import Navbar from "@/components/layout/Navbar";
import ProductGrid from "@/components/products/ProductGrid";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const KidsPage = () => {
  // Mock data for kids' products
  const kidsProducts = [
    {
      id: "3",
      name: "Nike Air Force 1",
      price: 90,
      category: "kids",
      image:
        "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500&q=80",
      colorways: 5,
    },
    {
      id: "8",
      name: "Nike SB Dunk Low",
      price: 85,
      category: "kids",
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80",
      colorways: 4,
    },
    {
      id: "36",
      name: "Nike Air Max 90",
      price: 100,
      category: "kids",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
      colorways: 3,
      isNew: true,
    },
    {
      id: "37",
      name: "Nike Team Hustle D 10",
      price: 65,
      category: "kids",
      image:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80",
      colorways: 2,
    },
    {
      id: "38",
      name: "Nike Revolution 6",
      price: 55,
      category: "kids",
      image:
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80",
      colorways: 4,
      isNew: true,
    },
    {
      id: "39",
      name: "Nike Sportswear Club Fleece",
      price: 40,
      category: "kids",
      image:
        "https://images.unsplash.com/photo-1552902019-ebcd97aa9aa0?w=500&q=80",
      colorways: 5,
    },
    {
      id: "40",
      name: "Nike Dri-FIT T-Shirt",
      price: 25,
      category: "kids",
      image:
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&q=80",
      colorways: 6,
      isNew: true,
    },
    {
      id: "41",
      name: "Nike Sportswear Tech Fleece",
      price: 70,
      category: "kids",
      image:
        "https://images.unsplash.com/photo-1556391922-01a8073e5d43?w=500&q=80",
      colorways: 3,
    },
    {
      id: "42",
      name: "Nike Sportswear Woven Shorts",
      price: 30,
      category: "kids",
      image:
        "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=500&q=80",
      colorways: 4,
    },
    {
      id: "43",
      name: "Nike Everyday Cushioned Socks",
      price: 15,
      category: "kids",
      image:
        "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=500&q=80",
      colorways: 3,
      isNew: true,
    },
    {
      id: "44",
      name: "Nike Brasilia Backpack",
      price: 35,
      category: "kids",
      image:
        "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=500&q=80",
      colorways: 4,
    },
    {
      id: "45",
      name: "Nike Elemental Lunch Bag",
      price: 20,
      category: "kids",
      image:
        "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=500&q=80",
      colorways: 2,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-20 pb-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Kids' Collection</h1>
          <p className="text-gray-600 mb-6">
            Style and comfort for young athletes.
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
                value="big-kids"
                className="data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none"
              >
                Big Kids (8-16)
              </TabsTrigger>
              <TabsTrigger
                value="little-kids"
                className="data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none"
              >
                Little Kids (4-7)
              </TabsTrigger>
              <TabsTrigger
                value="toddler"
                className="data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none"
              >
                Toddler (1-3)
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800&q=80"
              alt="Kids' Shoes"
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
              src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80"
              alt="Kids' Clothing"
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
              src="https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=800&q=80"
              alt="Kids' Accessories"
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
          products={kidsProducts}
          title="Kids' Products"
          showFilters={true}
        />
      </div>
    </div>
  );
};

export default KidsPage;
