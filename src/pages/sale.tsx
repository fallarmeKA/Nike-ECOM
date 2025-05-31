import React from "react";
import Navbar from "@/components/layout/Navbar";
import ProductGrid from "@/components/products/ProductGrid";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const SalePage = () => {
  // Mock data for sale products
  const saleProducts = [
    {
      id: "6",
      name: "Nike Air Zoom Pegasus",
      price: 120,
      originalPrice: 150,
      discount: 20,
      category: "men",
      image:
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80",
      colorways: 3,
      isSale: true,
    },
    {
      id: "7",
      name: "Nike Joyride Run",
      price: 144,
      originalPrice: 180,
      discount: 20,
      category: "women",
      image:
        "https://images.unsplash.com/photo-1576672843344-f01907a9d40c?w=500&q=80",
      colorways: 2,
      isSale: true,
    },
    {
      id: "46",
      name: "Nike Air Max 90",
      price: 112,
      originalPrice: 140,
      discount: 20,
      category: "men",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
      colorways: 4,
      isSale: true,
    },
    {
      id: "47",
      name: "Nike Blazer Low '77",
      price: 76,
      originalPrice: 95,
      discount: 20,
      category: "women",
      image:
        "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500&q=80",
      colorways: 3,
      isSale: true,
    },
    {
      id: "48",
      name: "Nike Sportswear Club Fleece",
      price: 48,
      originalPrice: 60,
      discount: 20,
      category: "men",
      image:
        "https://images.unsplash.com/photo-1552902019-ebcd97aa9aa0?w=500&q=80",
      colorways: 5,
      isSale: true,
    },
    {
      id: "49",
      name: "Nike Dri-FIT T-Shirt",
      price: 28,
      originalPrice: 35,
      discount: 20,
      category: "women",
      image:
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&q=80",
      colorways: 6,
      isSale: true,
    },
    {
      id: "50",
      name: "Nike Sportswear Tech Fleece",
      price: 88,
      originalPrice: 110,
      discount: 20,
      category: "men",
      image:
        "https://images.unsplash.com/photo-1556391922-01a8073e5d43?w=500&q=80",
      colorways: 3,
      isSale: true,
    },
    {
      id: "51",
      name: "Nike Pro Training Tights",
      price: 40,
      originalPrice: 50,
      discount: 20,
      category: "women",
      image:
        "https://images.unsplash.com/photo-1565693413579-8a73ffa4454a?w=500&q=80",
      colorways: 4,
      isSale: true,
    },
    {
      id: "52",
      name: "Nike Air Force 1 '07",
      price: 80,
      originalPrice: 100,
      discount: 20,
      category: "kids",
      image:
        "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500&q=80",
      colorways: 5,
      isSale: true,
    },
    {
      id: "53",
      name: "Nike SB Dunk Low",
      price: 88,
      originalPrice: 110,
      discount: 20,
      category: "kids",
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80",
      colorways: 4,
      isSale: true,
    },
    {
      id: "54",
      name: "Nike Flex Stride Shorts",
      price: 44,
      originalPrice: 55,
      discount: 20,
      category: "men",
      image:
        "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=500&q=80",
      colorways: 4,
      isSale: true,
    },
    {
      id: "55",
      name: "Nike Everyday Cushioned Socks",
      price: 14.4,
      originalPrice: 18,
      discount: 20,
      category: "accessories",
      image:
        "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=500&q=80",
      colorways: 5,
      isSale: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-20 pb-8 bg-red-600">
        <div className="container mx-auto px-4 text-white">
          <Badge className="bg-white text-red-600 mb-2">Limited Time</Badge>
          <h1 className="text-4xl font-bold mb-2">Sale</h1>
          <p className="mb-6">Up to 40% off select styles.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80"
              alt="Men's Sale"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/70 to-transparent">
              <Badge className="w-fit mb-2 bg-red-600">Up to 40% Off</Badge>
              <h3 className="text-2xl font-bold text-white mb-2">Men's Sale</h3>
              <Button className="w-fit bg-white text-black hover:bg-gray-100">
                Shop Now
              </Button>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1576672843344-f01907a9d40c?w=800&q=80"
              alt="Women's Sale"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/70 to-transparent">
              <Badge className="w-fit mb-2 bg-red-600">Up to 40% Off</Badge>
              <h3 className="text-2xl font-bold text-white mb-2">
                Women's Sale
              </h3>
              <Button className="w-fit bg-white text-black hover:bg-gray-100">
                Shop Now
              </Button>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800&q=80"
              alt="Kids' Sale"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/70 to-transparent">
              <Badge className="w-fit mb-2 bg-red-600">Up to 40% Off</Badge>
              <h3 className="text-2xl font-bold text-white mb-2">Kids' Sale</h3>
              <Button className="w-fit bg-white text-black hover:bg-gray-100">
                Shop Now
              </Button>
            </div>
          </div>
        </div>

        <ProductGrid
          products={saleProducts}
          title="Sale Products"
          showFilters={true}
        />
      </div>
    </div>
  );
};

export default SalePage;
