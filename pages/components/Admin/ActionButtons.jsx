import {
    publishCategory,
    archiveCategory,
} from '../../../services/adminApi';

export default function ActionButtons({ category, onUpdate }) {
    async function handlePublish() {
        await publishCategory(category.id);
        if (onUpdate) await onUpdate();
    }

    async function handleArchive() {
        await archiveCategory(category.id);
        if (onUpdate) await onUpdate();
    }

    return(
        <div>
        {category.status !== "published" && (
            <button type="button" onClick={handlePublish}>
            Publish
            </button>
        )}

        {category.status !== "archived" && (
            <button type="button" onClick={handleArchive}>
            Archive
            </button>
        )}
        </div>
    );
}