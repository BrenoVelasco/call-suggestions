import React, { useState } from 'react'
import initialCategories, { Category } from './categories';

const Categories = () => {
  const [categories, setCategories] = useState(initialCategories);
  const [expandedCategory, setExpandedCategory] = useState('');
  const [count, setCount] = useState(0);


  const handleAddCategory = (parent?: string) => {
    setCount(count + 1)
  
    const newCategory: Category = {
      title: `New category ${count}`,
      subCategories: [],
      enabled: true
    }

    setCategories(prev => {
      if (parent) {
        const parentIndex = prev.findIndex(obj => obj.title); 
      }
  
      return [...prev, newCategory]
    });
  }


  // const handleRemoveCategory = (parent?: string) => {
  //   setCount(count + 1)
  
  //   const newCategory: Category = {
  //     title: `New category ${count}`,
  //     subCategories: [],
  //     enabled: true
  //   }

  //   setCategories(prev => {
  //     return [...prev, newCategory]
  //   });
  // }



  interface IProps {
    category: Category;
  }
  

  const Category = ({ category }: IProps) => {
    const { title, subCategories, enabled } = category;

   return (
      <div>
        <div className="flex align-middle gap-2">
          {(enabled && subCategories.length > 0) && (
            <button
              className={subCategories.length > 0 ? 'bg-amber-300 border-2 p-1' :  'bg-gray-300 border-2 p-1'}
              onClick={() => setExpandedCategory(expandedCategory === title ? '' : title)}
              disabled={subCategories.length <= 0}
            >
              {expandedCategory === title ? 'Hide' : 'Expand'}
            </button>
          )}
          <div>{`${title}${!enabled ? '(Disabled)' : ''}`}</div>
          <button  className="bg-amber-300 border-2 p-1" onClick={() => handleAddCategory(title)}>
            Add
          </button>
          {/* <button  className="bg-red-400 border-2 p-1" onClick={() => handleAddCategory(title)}>
            Remove
          </button> */}
        </div>
        {(expandedCategory === title && subCategories.length > 0) && (
          <ul className="pl-4">
            {subCategories.map((sub, index) => <Category key={index} category={sub} />)}
          </ul>
        )}
      </div>
    )
  }


  return (
    <div className="flex flex-col gap-2">
      {categories.map((category, index) => <Category key={index} category={category} />)}
      <button  className="bg-amber-300 border-2 p-1" onClick={() => handleAddCategory()}>
        Add Category
      </button>
    </div>
  );
}

export default Categories