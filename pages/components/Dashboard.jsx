// components/Dashboard.js
const Dashboard = () => {
    return (
      <div className="p-6 absolute right-0 top-20 ">
        <h2 className="text-xl font-bold mb-4">Welcome to the Admin Dashboard</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="font-semibold text-gray-700">Total Users</h3>
            <p className="mt-2 text-2xl font-bold">1,024</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="font-semibold text-gray-700">Revenue</h3>
            <p className="mt-2 text-2xl font-bold">$12,560</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h3 className="font-semibold text-gray-700">Active Issues</h3>
            <p className="mt-2 text-2xl font-bold">8</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;
  