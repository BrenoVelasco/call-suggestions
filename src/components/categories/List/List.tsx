import React, { FC, useCallback } from 'react'
import { Category as CategoryType } from '../categories'
import Category from '../Category/Category'
import { useCategoriesContext } from '../../../hooks/useCategoriesContext'

const List: FC<{ categories: CategoryType[], isSubCategory?: boolean, parentNode?: string}> = ({ categories, isSubCategory = false, parentNode }) => {
    const { addCategory } = useCategoriesContext()

    const mappedCategories = useCallback(() => {
            if (!categories?.length) return null
            
            return categories.map((cat: CategoryType) => {
                return (
                    <Category {...cat} parentNode={parentNode} />
                )
            })
        }, [categories, parentNode])

        const handleAdd = () => addCategory({title: `Top ${categories.filter(cat => cat.title.startsWith('Top'))?.length + 1}`, subCategories: [], enabled: true})

    return <div className='flex flex-col justify-center'>
        {mappedCategories()}
        { !isSubCategory && <button className="p-2 rounded cursor-pointer" onClick={handleAdd}>➕</button> }
    </div>
}

export default List