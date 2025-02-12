import { useState } from "react";
import categoriesData from "./categories";

import { Suggestions } from "./Suggestions";
import { SuggestionType } from "./types/SuggestionType";

const SuggestionsContainer = () => {
  const [categories, setCategories] = useState(categoriesData);

  const updateCategories = (newCategoryList: SuggestionType[]) => {
    setCategories(newCategoryList);

    // TODO: implement updating the category list to an API
  }

  return (
    <Suggestions categories={categories} updateParentCategories={updateCategories} />
  )
}

export { SuggestionsContainer }
