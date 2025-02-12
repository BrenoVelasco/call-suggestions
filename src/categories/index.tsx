import React, { useCallback, useState } from 'react'
import categories, { Category as CategoryType } from './categories'

const Categories = () => {
    const [categoriesData, setCategoriesData] = useState<CategoryType[]>(categories)

    const mappedCategories = useCallback((subCategories?: CategoryType[] | null) => {
        const categoryList = subCategories ?? categoriesData
        if (!categoryList?.length) return null

        
        return categoryList.map((cat: CategoryType) => {
            return (
                <>
                <div>
                    {cat.title}
                    {!cat.enabled && `⛔️`}
                    {cat.subCategories?.length ?
                        <div className="pl-10 py-5">
                            {mappedCategories(cat.subCategories)}
                        </div>
                        : null
                    }
                </div>                
                </>
            )
        })
    }, [categoriesData])

    return(
        <div className="flex flex-col justify-center w-100 border-1 border-solid border-gray-500">
            {mappedCategories()}
        </div>
    )
}

export default Categories