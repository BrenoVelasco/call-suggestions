import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CatList from './CatList';
import "./index.css"
import categories from "./categories";



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="flex flex-col gap-3 justify-center mt-10">
      <h1 className="text-3xl font-bold underline">Call Suggestions</h1>
      {/* Your solution here */}
      <CatList categories={categories} />
    </div>
  </StrictMode>
);
