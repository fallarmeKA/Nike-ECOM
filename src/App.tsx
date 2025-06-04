import { Suspense } from "react";
import { Routes, Route, useRoutes } from "react-router-dom";
import CategoryPage from "./pages/category";
import Home from "./components/home";
import CartPage from "./pages/cart";
import FavoritesPage from "./pages/favorites";
import NewFeaturedPage from "./pages/new-featured";
import MenPage from "./pages/men";
import WomenPage from "./pages/women";
import KidsPage from "./pages/kids";
import SalePage from "./pages/sale";
import ProductDetail from "./pages/product/[id]";
import routes from "tempo-routes";

function App() {
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

          {/* ✅ New dynamic subcategory route */}
          <Route path="/category/:subcategory" element={<CategoryPage />} />
        </Routes>

        {/* Conditional Tempo Routes */}
        {import.meta.env.VITE_TEMPO === "true" && (
          <Routes>
            {useRoutes(routes)}
          </Routes>
        )}
      </>
    </Suspense>
  );
}

export default App;
