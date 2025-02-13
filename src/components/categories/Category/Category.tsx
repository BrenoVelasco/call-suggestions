import React, { FC } from "react"
import { Category as CategoryType } from "../categories"
import { useCategoriesContext } from "../../../hooks/useCategoriesContext"
import List from "../List/List"

const Category: FC<CategoryType & {parentNode?: string}> = ({ title, subCategories, enabled, parentNode }) => {
        const {addCategory, removeCategory} = useCategoriesContext()

    return (
        <details key={title} className="py-4">
            <summary className='cursor-pointer flex flex-row hover:bg-gray-300'>
                {!enabled && <span className="pr-2">⛔️</span>}
                {title}
                <button className="px-2 ml-auto cursor-pointer" onClick={() => removeCategory(title, parentNode)}>🗑️</button>
            </summary>
            <div className="border-l-1 border-gray-300">

            <div className=" pl-10 py-2">
                {enabled && subCategories?.length ?
                        <List categories={subCategories} isSubCategory parentNode={title} />
                    : null
                }
            </div>                    
                {enabled && <button className="pt-4 rounded cursor-pointer" onClick={() => addCategory({title, subCategories, enabled}, title)}>➕</button>}
            </div>
        </details> 
    )
}

export default Category