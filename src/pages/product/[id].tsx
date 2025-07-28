import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Heart, ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { useFavorites } from "@/components/context/FavoritesContext"; 

// Placeholder Navbar
const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold">NIKE</a>
          <nav className="hidden md:flex ml-10 space-x-8">
            <a href="#" className="text-sm font-medium hover:text-gray-500">New & Featured</a>
            <a href="#" className="text-sm font-medium hover:text-gray-500">Men</a>
            <a href="#" className="text-sm font-medium hover:text-gray-500">Women</a>
            <a href="#" className="text-sm font-medium hover:text-gray-500">Kids</a>
            <a href="#" className="text-sm font-medium hover:text-gray-500">Sale</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <button className="p-2"><Heart size={20} /></button>
          <button className="p-2"><ShoppingBag size={20} /></button>
        </div>
      </div>
    </header>
  );
};

interface ProductImage {
  url: string;
  alt: string;
}

interface ProductColorway {
  name: string;
  color: string;
  images: ProductImage[];
}

interface ProductSize {
  value: string;
  label: string;
  available: boolean;
}

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  colorways: ProductColorway[];
  sizes: ProductSize[];
}

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [selectedColorway, setSelectedColorway] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedImage, setSelectedImage] = useState(0);

  const { toggleFavorite, isFavorite } = useFavorites(); // ✅ Use favorites context

  // Mock product
  const product: Product = {
    id: id || "1",
    name: "Nike Air Max 270",
    price: 150,
    description: "The Nike Air Max 270 delivers visible cushioning...",
    colorways: [
      {
        name: "Black/White",
        color: "#000000",
        images: [
          { url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80", alt: "Side" },
          { url: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&q=80", alt: "Top" },
          { url: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80", alt: "Back" }
        ],
      },
      {
        name: "Red/Black",
        color: "#FF0000",
        images: [
          { url: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80", alt: "Side" },
          { url: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80", alt: "Top" },
          { url: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80", alt: "Back" }
        ],
      },
      {
        name: "Blue/White",
        color: "#0000FF",
        images: [
          { url: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=800&q=80", alt: "Side" },
          { url: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80", alt: "Top" },
          { url: "https://images.unsplash.com/photo-1465453869711-7e174808ace9?w=800&q=80", alt: "Back" }
        ],
      },
    ],
    sizes: [
      { value: "6", label: "US 6", available: true },
      { value: "7", label: "US 7", available: true },
      { value: "8", label: "US 8", available: true },
      { value: "9", label: "US 9", available: true },
      { value: "10", label: "US 10", available: true },
      { value: "11", label: "US 11", available: false },
      { value: "12", label: "US 12", available: true },
      { value: "13", label: "US 13", available: false },
    ],
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    console.log("Added to cart:", {
      product: product.id,
      name: product.name,
      colorway: product.colorways[selectedColorway].name,
      size: selectedSize,
      price: product.price,
    });
  };

  const handleToggleFavorite = () => {
    toggleFavorite({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.colorways[selectedColorway].images[0].url,
      category: product.colorways[selectedColorway].name,
      colorways: product.colorways.map((c) => c.name),
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img
                src={product.colorways[selectedColorway].images[selectedImage].url}
                alt={product.colorways[selectedColorway].images[selectedImage].alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {product.colorways[selectedColorway].images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 rounded-md overflow-hidden ${selectedImage === index ? "ring-2 ring-black" : "opacity-70"}`}
                >
                  <img src={image.url} alt={image.alt} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="text-xl mt-1">${product.price}</p>
            </div>

            {/* Color */}
            <div>
              <h2 className="text-lg font-medium mb-2">Select Color</h2>
              <div className="flex space-x-3">
                {product.colorways.map((colorway, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedColorway(index);
                      setSelectedImage(0);
                    }}
                    className={`w-8 h-8 rounded-full ${selectedColorway === index ? "ring-2 ring-offset-2 ring-black" : ""}`}
                    style={{ backgroundColor: colorway.color }}
                    aria-label={`Select ${colorway.name}`}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-1">
                {product.colorways[selectedColorway].name}
              </p>
            </div>

            {/* Size */}
            <div>
              <h2 className="text-lg font-medium mb-2">Select Size</h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size.value}
                    onClick={() => setSelectedSize(size.value)}
                    disabled={!size.available}
                    className={`py-2 border rounded-md ${selectedSize === size.value ? "border-black bg-black text-white" : "border-gray-300"} ${!size.available ? "opacity-40 cursor-not-allowed" : "hover:border-gray-800"}`}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4">
              <Button
                onClick={handleAddToCart}
                className="flex-1 bg-black hover:bg-gray-800 text-white py-6"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Add to Bag
              </Button>

              <Button
                variant="outline"
                onClick={handleToggleFavorite}
                className="border-gray-300 hover:bg-gray-100"
              >
                <Heart
                  className={`h-5 w-5 ${isFavorite(product.id) ? "fill-red-500 text-red-500" : ""}`}
                />
              </Button>
            </div>

            <Separator />

            {/* Tabs */}
            <div>
              <Tabs defaultValue="description">
                <TabsList className="w-full justify-start border-b rounded-none bg-transparent">
                  <TabsTrigger value="description" className="data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none">
                    Description
                  </TabsTrigger>
                  <TabsTrigger value="details" className="data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none">
                    Details
                  </TabsTrigger>
                  <TabsTrigger value="shipping" className="data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none">
                    Shipping & Returns
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="pt-4">
                  <p className="text-gray-700">{product.description}</p>
                </TabsContent>
                <TabsContent value="details" className="pt-4">
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Lightweight mesh upper for breathability</li>
                    <li>270 Max Air unit delivers unrivaled cushioning</li>
                    <li>Foam midsole for responsive comfort</li>
                    <li>Rubber outsole for durability and traction</li>
                    <li>Reflective details enhance visibility in low light</li>
                  </ul>
                </TabsContent>
                <TabsContent value="shipping" className="pt-4">
                  <div className="space-y-4 text-gray-700">
                    <p><strong>Free standard shipping</strong> on orders over $50</p>
                    <p>Standard delivery: 3–5 business days</p>
                    <p>Express delivery: 1–2 business days</p>
                    <p>Free returns within 30 days of delivery</p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
