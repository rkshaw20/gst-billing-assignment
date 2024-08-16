import { Link, useLocation } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { useEffect, useState } from "react";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    setDropdownOpen(false);
  }, [location]);

  return (
    <div className="navbar bg-base-300 rounded-box">
      <div className="flex-1 px-2 lg:flex-none">
        <Link to="/" className="text-lg font-bold">
          GST Billing
        </Link>
      </div>
      <div className="flex flex-1 justify-end px-2 block md:hidden">
        <div className="flex items-stretch">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost rounded-btn"
            >
              <IoIosMenu
                className="text-3xl "
                onClick={() => toggleDropdown()}
              />
            </div>
            {dropdownOpen && (
              <ul
                tabIndex={0}
                className="menu dropdown-content bg-base-200 rounded-box z-[1] mt-4 w-52 p-2 shadow  text-black"
              >
                <li>
                  <Link to="/" className="">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/sales" className="">
                    Sales
                  </Link>
                </li>
                <li>
                  <Link to="/revenue" className="">
                    Revenue
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
