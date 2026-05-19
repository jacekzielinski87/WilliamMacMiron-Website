

import {
    publishCategory,
    archiveCategory,
  } from "@/services/adminApi";
  
  export default function ActionButtons({
    category,
    onUpdate,
  }) {
    async function handlePublish() {
      await publishCategory(category.id);
  
      if (onUpdate) {
        onUpdate();
      }
    }
  
    async function handleArchive() {
      await archiveCategory(category.id);
  
      if (onUpdate) {
        onUpdate();
      }
    }
  
    return (
      <div className="flex gap-2">
  
        {category.status !== "published" && (
          <button
            onClick={handlePublish}
            className="
              bg-green-100
              px-2 py-1
              text-sm
            "
          >
            Publish
          </button>
        )}
  
        {category.status !== "archived" && (
          <button
            onClick={handleArchive}
            className="
              bg-gray-200
              px-2 py-1
              text-sm
            "
          >
            Archive
          </button>
        )}
      </div>
    );
  }