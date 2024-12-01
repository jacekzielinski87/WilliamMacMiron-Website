import Link from "next/link";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", href: "/admin" },
    { name: "Users", href: "/admin/users" },
    { name: "Settings", href: "/admin/settings" },
    // Add more items as needed
  ];

  return (
    <div className="h-screen w-20 bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-lg font-bold border-b border-gray-700">
        Admin Panel
      </div>
      <nav className="mt-4 flex flex-col space-y-2">
        {menuItems
          .filter((item) => item.href) // Skip invalid items
          .map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 py-2 hover:bg-gray-700 rounded"
            >
              {item.name}
            </Link>
          ))}
      </nav>
    </div>
  );
};

export default Sidebar;
