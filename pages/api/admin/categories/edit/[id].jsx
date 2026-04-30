import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import { getCategory, updateCategory } from "../../../../../services/adminApi";
import CategorForm from "../../../../components/Admin/CategoryFrom";

export default function EditPage() {
    const router = useRouter();
    const {id} = router.query;


const [category, setCategory] = useState(null);

useEffect(() =>{
    if(id) {
        getCategory(id).then(setCategory);
    }
},[id]);

async function handleSubmit(data) {
    await updateCategory(id, data);
    router.push('/admin/categories');
}
    if(!category) return <div>Proszę czekać...</div>;

    return <CategorForm initialData={category} onSubmit={handleSubmit}/>;
}

