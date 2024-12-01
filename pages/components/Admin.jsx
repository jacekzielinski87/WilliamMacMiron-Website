// pages/admin.js
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";

const Admin = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto">
          <Dashboard />
        </main>
      </div>
    </div>
  );
};

export default Admin;
