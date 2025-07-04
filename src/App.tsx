import React, { Suspense } from "react";
import { Routes, Route, useRoutes } from "react-router-dom";

import Home from "./components/home";
import CartPage from "./pages/cart";
import FavoritesPage from "./pages/favorites";
import NewFeaturedPage from "./pages/new-featured";
import MenPage from "./pages/men";
import WomenPage from "./pages/women";
import KidsPage from "./pages/kids";
import SalePage from "./pages/sale";
import ProductDetail from "./pages/product/[id]";
import CategoryPage from "./pages/category";

import routes from "tempo-routes";

function App() {
  // Conditionally use tempo routes if VITE_TEMPO is "true"
  const tempoRoutes = import.meta.env.VITE_TEMPO === "true" ? useRoutes(routes) : null;

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/new-featured" element={<NewFeaturedPage />} />
          <Route path="/men" element={<MenPage />} />
          <Route path="/women" element={<WomenPage />} />
          <Route path="/kids" element={<KidsPage />} />
          <Route path="/sale" element={<SalePage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/category/:subcategory" element={<CategoryPage />} />
        </Routes>

        {/* Render tempo routes if enabled */}
        {tempoRoutes}
      </>
    </Suspense>
  );
}

export default App;
