import React from 'react'
import List from './List/List'
import { useCategoriesContext } from '../../hooks/useCategoriesContext'

const Categories = () => {
    const { categories } = useCategoriesContext()
    return(
        <div className="flex flex-col justify-center w-100 border-1 border-solid border-gray-500 rounded p-4">
            <hr className="border-2 my-4" />
            <List categories={categories} />
        </div>
    )
}

export default Categories