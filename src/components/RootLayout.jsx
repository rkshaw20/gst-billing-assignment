import { Outlet } from "react-router";
import Header from "./Header";
import NavBar from "./NavBar";

const RootLayout = () => {
  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-1 md:grid-cols-[auto_1fr] h-screen w-full">
      {/* Header */}
      <header className="row-span-1 col-span-1 md:col-span-2  text-white flex justify-between items-center ">
        <Header />
      </header>

      {/* Sidebar */}
      <nav className="hidden md:block row-span-1 col-span-1  p-4 shadow-md bg-primary-300">
        <NavBar />
      </nav>
      {/* Main content */}
      <main className="row-span-1 col-span-1 p-2 ">
        <Outlet />
      </main>
    </div>
  );
};
export default RootLayout;
