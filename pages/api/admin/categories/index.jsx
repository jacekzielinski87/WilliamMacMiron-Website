import { useEffect, useState } from "react";
import { getCategories } from "../../../../services/adminApi";
import CategoryList from '../../../components/Admin/CategoryList';

export default function CategoriesPage() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then(setCategories);
    }, []);

    return<CategoryList categories={categories}/>;
}