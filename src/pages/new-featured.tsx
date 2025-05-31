import React from "react";
import Navbar from "@/components/layout/Navbar";
import ProductGrid from "@/components/products/ProductGrid";

const NewFeaturedPage = () => {
  // Mock data for new and featured products
  const newFeaturedProducts = [
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
      id: "9",
      name: "Nike Blazer Mid '77",
      price: 100,
      category: "lifestyle",
      image:
        "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500&q=80",
      colorways: 4,
      isNew: true,
    },
    {
      id: "11",
      name: "Nike Sportswear Club Fleece",
      price: 60,
      category: "lower",
      image:
        "https://images.unsplash.com/photo-1552902019-ebcd97aa9aa0?w=500&q=80",
      colorways: 6,
      isNew: true,
    },
    {
      id: "12",
      name: "Nike Air Jordan 1",
      price: 180,
      category: "lifestyle",
      image:
        "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=500&q=80",
      colorways: 8,
      isNew: true,
    },
    {
      id: "13",
      name: "Nike Dunk Low",
      price: 110,
      category: "lifestyle",
      image:
        "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?w=500&q=80",
      colorways: 6,
      isNew: true,
    },
    {
      id: "14",
      name: "Nike Air Zoom Pegasus 38",
      price: 120,
      category: "running",
      image:
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80",
      colorways: 5,
      isNew: true,
    },
    {
      id: "15",
      name: "Nike Metcon 7",
      price: 130,
      category: "training",
      image:
        "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&q=80",
      colorways: 4,
      isNew: true,
    },
    {
      id: "16",
      name: "Nike Air Force 1 '07",
      price: 100,
      category: "lifestyle",
      image:
        "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500&q=80",
      colorways: 7,
      isNew: true,
    },
    {
      id: "17",
      name: "Nike Tech Fleece Windrunner",
      price: 130,
      category: "upper",
      image:
        "https://images.unsplash.com/photo-1617952385804-7b9a54f67c36?w=500&q=80",
      colorways: 3,
      isNew: true,
    },
    {
      id: "18",
      name: "Nike Pro Dri-FIT",
      price: 35,
      category: "upper",
      image:
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&q=80",
      colorways: 5,
      isNew: true,
    },
    {
      id: "19",
      name: "Nike Sportswear Woven Shorts",
      price: 45,
      category: "lower",
      image:
        "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=500&q=80",
      colorways: 4,
      isNew: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-20 pb-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">New & Featured</h1>
          <p className="text-gray-600 mb-6">
            Discover the latest Nike innovations, styles, and collections.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&q=80"
              alt="New Releases"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="text-2xl font-bold text-white mb-2">
                New Releases
              </h3>
              <p className="text-white mb-4">
                Be the first to rock the latest drops
              </p>
              <button className="w-fit bg-white text-black hover:bg-gray-100 px-6 py-2 rounded-full font-medium">
                Shop Now
              </button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&q=80"
              alt="SNKRS Launch Calendar"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="text-2xl font-bold text-white mb-2">
                SNKRS Launch Calendar
              </h3>
              <p className="text-white mb-4">
                Stay up to date with upcoming releases
              </p>
              <button className="w-fit bg-white text-black hover:bg-gray-100 px-6 py-2 rounded-full font-medium">
                Explore Calendar
              </button>
            </div>
          </div>
        </div>

        <ProductGrid
          products={newFeaturedProducts}
          title="Latest Arrivals"
          showFilters={true}
        />
      </div>
    </div>
  );
};

export default NewFeaturedPage;
