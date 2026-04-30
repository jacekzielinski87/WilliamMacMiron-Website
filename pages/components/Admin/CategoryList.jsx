import Link from "next/link";
import ActionButtons from './ActionButtons';

export default function CategoryList({categories}) {
    return (
        <div>
            {categories.map((cat) =>(
                <div key={cat.id}>
                    <h3>{cat.name}</h3>
                    <p>{cat.description}</p>

                    <Link href={`/admin/categories/edi/${cat.id}`}>
                    Edytuj
                    </Link>

                    <ActionButtons category={cat}/>
                </div>
            ))}
        </div>
    );
}