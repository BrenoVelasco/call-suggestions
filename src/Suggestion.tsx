import { MouseEvent, useRef, useState } from "react"

import { SuggestionType } from "./types/SuggestionType"
import { Suggestions } from "./Suggestions";

interface SuggestionProps extends SuggestionType {
  onRemove?: (categoryTitle: string) => void
  updateParentCategories?: (categoryTitle: string, newCategoryList: SuggestionType[]) => void
}

const Suggestion = ({ title, enabled, subCategories, onRemove, updateParentCategories }: SuggestionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const counterRef = useRef(subCategories.length); // Workaround to avoid subCategory name collisions, since we are generating new subCategory names

  const handleAdd = (newTitle: string, e: MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();

    counterRef.current++;

    if (updateParentCategories) {
      updateParentCategories(
        title,
        [
          ...subCategories,
          { title: newTitle, enabled: true, subCategories: [] }
        ]
      );
    }

    setIsOpen(true);
  }

  const handleRemove = (title: string, e: MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();

    if (onRemove) {
      onRemove(title);
    }
  }

  const updateCategories = (newCategoryList: SuggestionType[]) => {
    if (updateParentCategories) {
      updateParentCategories(
        title,
        [
          ...newCategoryList,
        ]
      );
    }
  };

  return (
    <li className={`border text-xl font-bold rounded-xl ${enabled ? '' : 'opacity-25'}`}>
      <p className="flex justify-between p-4" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <div className="flex gap-4">
          <span
            className="flex w-8 h-8 items-center justify-center rounded-full bg-black text-white cursor-pointer"
            onClick={(e) => handleRemove(title, e)}>
              &times;
          </span>
          <span
            className="flex w-8 h-8 items-center justify-center rounded-full bg-black text-white cursor-pointer"
            onClick={(e) => handleAdd(`New Category - ${title} - ${counterRef.current}`, e)}>
              +
          </span>
        </div>
      </p>
      {isOpen && enabled && subCategories.length > 0 && (
        <div className="p-8">
          <Suggestions categories={subCategories} updateParentCategories={updateCategories} />
        </div>
      )}
    </li>
  )
}

export { Suggestion }
