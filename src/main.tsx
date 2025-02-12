import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { SuggestionsContainer } from "./SuggestionsContainer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="flex flex-col items-center p-10 gap-8">
      <h1 className="text-3xl font-bold underline">Call Suggestions</h1>
      <SuggestionsContainer />
    </div>
  </StrictMode>
);
