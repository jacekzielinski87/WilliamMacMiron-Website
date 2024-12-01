// components/Header.js
const Header = () => {
    return (
      <div className="h-16 w-[300px] bg-gray-300 flex items-center px-6 justify-center absolute right-20">
        <h1 className="text-lg font-semibold p-2">Admin Dashboard</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Logout
        </button>
      </div>
    );
  };
  
  export default Header;
  