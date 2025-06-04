import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import ProductGrid from "@/components/products/ProductGrid";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const KidsPage = () => {
  const [selectedTab, setSelectedTab] = useState("all");

  const kidsProducts = [
    {
      id: "3",
      name: "Nike Air Force 1",
      price: 90,
      category: "big-kids",
      image:
        "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500&q=80",
      colorways: 5,
    },
    {
      id: "8",
      name: "Nike SB Dunk Low",
      price: 85,
      category: "big-kids",
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80",
      colorways: 4,
    },
    {
      id: "36",
      name: "Nike Air Max 90",
      price: 100,
      category: "big-kids",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
      colorways: 3,
      isNew: true,
    },
    {
      id: "37",
      name: "Nike Team Hustle D 10",
      price: 65,
      category: "little-kids",
      image:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80",
      colorways: 2,
    },
    {
      id: "38",
      name: "Nike Revolution 6",
      price: 55,
      category: "little-kids",
      image:
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80",
      colorways: 4,
      isNew: true,
    },
    {
      id: "39",
      name: "Nike Sportswear Club Fleece",
      price: 40,
      category: "toddler",
      image:
        "https://images.unsplash.com/photo-1552902019-ebcd97aa9aa0?w=500&q=80",
      colorways: 5,
    },
    // ... rest unchanged
  ];

  const filteredProducts =
    selectedTab === "all"
      ? kidsProducts
      : kidsProducts.filter((product) => product.category === selectedTab);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-20 pb-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Kids' Collection</h1>
          <p className="text-gray-600 mb-6">
            Style and comfort for young athletes.
          </p>

          <Tabs
            defaultValue="all"
            className="w-full"
            onValueChange={(val) => setSelectedTab(val)}
          >
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
          {/* Category Banners */}
          {/* ... same as before */}
        </div>

        <ProductGrid
          products={filteredProducts}
          title="Kids' Products"
          showFilters={true}
        />
      </div>
    </div>
  );
};

export default KidsPage;
