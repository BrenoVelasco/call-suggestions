import { useState } from "react";

import categories from "./categories";

import { Suggestions } from "./Suggestions";
import { SuggestionType } from "./types/SuggestionType";

const SuggestionsContainer = () => {
  const [categoriesList, setCategoriesList] = useState(categories);

  const updateCategoriesList = (before: SuggestionType, after: SuggestionType | null) => {
    const index = categoriesList.findIndex((item) => {
      item.title = before.title
    });

    // setCategoriesList({
      
    // })
  }

  return (
    <Suggestions categories={categoriesList} updateCategoriesList={updateCategoriesList} />
  )
}

export { SuggestionsContainer }
