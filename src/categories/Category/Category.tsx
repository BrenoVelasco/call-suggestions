import React, { FC } from "react"
import { Category as CategoryType } from "../categories"

const Category: FC<CategoryType> = ({ title, subCategories, enabled }) => {

    return (
        <div className="flex flex-col p-2">
            <div>{title}</div>
            <div>{enabled ? 'enabled': 'disabled'}</div>
            <div>{subCategories?.length}</div>
        </div>
    )
}

export default Category