import React from 'react'
import List from './List/List'
import categories, { Category as CategoryType } from './categories'
import Category from './Category/Category'

const Categories = () => {

    const mappedCategories = (subCategories = []) => {
        const categoryList = subCategories?.length > 0 ? subCategories : categories
        if (!categoryList?.length) return null

        return categoryList.map((cat: CategoryType) => {
            if (cat.subCategories?.length) return <List> {mappedCategories(cat.subCategories)}</List>
            return (
            <div className={`${subCategories?.length > 0} ? pl-5`}>
                <Category {...cat} />
            </div>
            )
        })
    }

    return(
        <div className="flex flex-col justify-center w-100">
            <List>{mappedCategories()}</List>
        </div>
    )
}

export default Categories