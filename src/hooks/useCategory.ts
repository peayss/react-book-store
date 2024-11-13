import { useState, useEffect } from "react";
import { Category } from "../../models/category.model";
import { fatchCategory } from "../../api/category.api";

export const useCategory = () => {
    const [category, setCategory] = useState<Category[]>([]);
    useEffect(() => {
      fatchCategory().then((category)=>{
        if (!category) return;
        const categoryWithAll = [
            {
                id : null,
                name: "전체",
            },
            ...category,
        ];
        setCategory(categoryWithAll);
      });
    }, []);
    return {category};
};