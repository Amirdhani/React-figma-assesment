import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardGrid from "../components/DashboardGrid";

export default function Home() {
  return (
    <div className="w-125 md:w-full flex-1 flex flex-col">
      <Navbar />
      <div className="flex p-6">
        <Sidebar />
        <main className="p-6 bg-gray-50 min-h-screen">
          <DashboardGrid />
        </main>
      </div>
    </div>
  );
}