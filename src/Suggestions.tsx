import { Suggestion } from "./Suggestion";
import { SuggestionType } from "./types/SuggestionType";

const Suggestions = (
  { categories, updateCategoriesList }:
  { categories: SuggestionType[], updateCategoriesList: () => void }
) => {
  return (
    <ul className="flex flex-col flex-auto w-full gap-4">
      {categories.map(({ title, enabled, subCategories }, index) => (
        <Suggestion
          key={`${title}-${index}`}
          title={title}
          enabled={enabled}
          subCategories={subCategories}
          updateCategoriesList={updateCategoriesList}
        />
      ))}
    </ul>
  );
}

export { Suggestions }
