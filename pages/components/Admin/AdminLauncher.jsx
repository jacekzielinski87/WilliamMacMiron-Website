import { useState } from "react";
import AdminModal from "./AdminModal";

export default function AdminLauncher() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {!open && (
            <button
                type="button"
                onClick={() => setOpen(true)}
                className="bg-white px-2 py-2 shadow-md shadow-zinc-900 hover:bg-gray-100 font-bold font-serif"
            >
                Admin
            </button>
            )}
            {open && <AdminModal onClose={() => setOpen(false)} />}
        </>
    );
}