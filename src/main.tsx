import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Categories from "./components/categories";
import { CategoriesProvider } from "./context/CategoriesContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CategoriesProvider>
      <div className="flex flex-col justify-center mt-10 px-10">
        <h1 className="text-3xl font-bold underline">Call Suggestions</h1>
        <Categories />
      </div>
    </CategoriesProvider>
  </StrictMode>
);
