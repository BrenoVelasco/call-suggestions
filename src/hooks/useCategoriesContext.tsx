import { useContext } from "react";
import CategoriesContext from "../context/CategoriesContext";

export const useCategoriesContext = () => useContext(CategoriesContext)