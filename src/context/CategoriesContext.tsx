import { createContext, FC, PropsWithChildren, useCallback, useState } from "react";
import categoriesSource, { Category as CategoryType } from "../components/categories/categories";


const defaultProvider = {
    categories: categoriesSource,
    removeCategory: (key: string, parent?: string) => console.log(key, parent),
    addCategory: (category: CategoryType, parent?: string) => console.log(category, parent)
}

export const CategoriesContext = createContext(defaultProvider)

enum Operation {
    REMOVE = 'remove',
    ADD = 'add'
}


export const CategoriesProvider: FC<PropsWithChildren> = ({ children }) => {
    const [categoriesData, setCategoriesData] = useState(defaultProvider.categories)

    
        const updateChildCategory = useCallback((childCategory: Partial<CategoryType>, parent: string, op: Operation, categoryNodes?: CategoryType[] ): CategoryType[] => {
            const categories = categoryNodes ?? categoriesData
            const hasParent = categories.some(category => category.title === parent)
            if (!hasParent) {
                return categories.map(category => {
                    if(category.subCategories?.length) {
                        return {...category, subCategories: updateChildCategory(childCategory, parent, op, category.subCategories)}
                    }
                    return   category
                })
            }
    
            
            const matchedParent = categories.findIndex(category => category.title === parent)
            if (op === Operation.ADD) {
                const sameNameCategoryCount = categories[matchedParent]?.subCategories?.filter(cat => cat.title.startsWith(`${parent}'s child`)).length
                const newCategory = {
                    title: `${parent}'s child ${( sameNameCategoryCount ?? 0) + 1}`,
                    enabled: true,
                    subCategories: [] as CategoryType[]
                }
                categories[matchedParent]?.subCategories.push(newCategory) 
                return categories
            }
    
            categories[matchedParent].subCategories = categories[matchedParent].subCategories.filter(cat => cat.title !== childCategory.title)
    
            return categories
        }, [categoriesData])
    
        const addCategory = useCallback((category: CategoryType, parent?: string) => {
            if (!parent) return setCategoriesData([...categoriesData, category])
            const newCategories = updateChildCategory(category, parent, Operation.ADD)
            setCategoriesData([...newCategories])
        }, [categoriesData, updateChildCategory]);
    
        const removeCategory = useCallback((categoryKey: string, parent?: string) => {
            if (!parent) return setCategoriesData(categoriesData.filter(category => category.title !== categoryKey))
            const newCategories = updateChildCategory({ title: categoryKey }, parent, Operation.REMOVE)
            setCategoriesData([...newCategories])
            
        }, [categoriesData, updateChildCategory]);

    return(
        <CategoriesContext.Provider value={{ categories: categoriesData, addCategory: addCategory, removeCategory: removeCategory}}>{children}</CategoriesContext.Provider>
    )

}

export default CategoriesContext