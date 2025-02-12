import { useState } from 'react'

import { SuggestionType } from "./types/SuggestionType"
import { Suggestions } from "./Suggestions";

interface SuggestionProps extends SuggestionType {
  updateCategoriesList: () => void;
}

const Suggestion = ({ title, enabled, subCategories, updateCategoriesList }: SuggestionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAdd = () => {

  }

  const handleRemove = () => {
    
  }

  return (
    <li className={`border text-xl font-bold rounded-xl ${enabled ? '' : 'opacity-25'}`}>
      <p className="p-4" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span onClick={handleRemove}>x</span>
        <span onClick={handleAdd}>+</span>
      </p>
      {isOpen && enabled && subCategories.length > 0 && (
        <div className="p-8">
          <Suggestions categories={subCategories} updateCategoriesList={updateCategoriesList} />
        </div>
      )}
    </li>
  )
}

export { Suggestion }
