import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Categories from './Categories.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="flex justify-center mt-10 flex-col">
      <h1 className="text-3xl font-bold underline">Call Suggestions</h1>
      <Categories />
    </div>
  </StrictMode>
);
