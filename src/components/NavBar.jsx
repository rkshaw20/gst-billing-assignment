import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex flex-col gap-3 w-[120px] h-full  ">
      <Link to="/" className="">
        Categories
      </Link>
      <hr className="border-t-2 border-gray-600 " />
      <Link to="/products" className="">
        Products
      </Link>
      <hr className="border-t-2 border-gray-600 " />
      <Link to="/sales" className="">
        Sales
      </Link>
      <hr className="border-t-2 border-gray-600 " />

      <Link to="/revenue" className="">
        Revenue
      </Link>
    </nav>
  );
};

export default NavBar;
