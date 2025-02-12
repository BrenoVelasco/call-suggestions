import { Suggestion } from "./Suggestion";
import { SuggestionType } from "./types/SuggestionType";

type SuggestionsProps = {
  categories: SuggestionType[];
  updateParentCategories?: (
    newCategoryList: SuggestionType[],
  ) => void;
}

const Suggestions = ({ categories, updateParentCategories }: SuggestionsProps) => {
  const handleRemove = (categoryTitle: string) => {
    if (updateParentCategories) {
      const index = categories.findIndex((item) => item.title === categoryTitle)

      updateParentCategories(
        [
          ...categories.slice(0, index),
          ...categories.slice(index + 1)
        ]
      );
    }
  }

  const updateCategories = (categoryTitle: string, newCategoryList: SuggestionType[]) => {
    if (updateParentCategories) {
      const index = categories.findIndex((item) => item.title === categoryTitle)

      updateParentCategories(
        [
          ...categories.slice(0, index),
          { ...categories[index], subCategories: newCategoryList },
          ...categories.slice(index + 1)
        ]
      );
    }
  };

  return (
    <ul className="flex flex-col flex-auto w-full gap-4">
      {categories && categories.map(({ title, enabled, subCategories }, index) => (
        <Suggestion
          key={`${title}-${index}`}
          title={title}
          enabled={enabled}
          subCategories={subCategories}
          onRemove={handleRemove}
          updateParentCategories={updateCategories}
        />
      ))}
    </ul>
  );
}

export { Suggestions }
