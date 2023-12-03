import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container w-[93%]  mx-auto">
      <nav className="flex flex-col md:flex-row gap-5 md:justify-between items-center py-6 my-4 px-5">
        <NavLink to="/">
          <img src="/Logo.png" alt="" />
        </NavLink>
        <ul className="flex gap-5 md:text-lg text-base">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending font-semibold"
                  : isActive
                  ? "text-red-50 font-semibold underline underline-offset-2	"
                  : "font-semibold hover:text-red-50"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/donated"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-red-50 font-semibold underline underline-offset-2"
                  : "font-semibold hover:text-red-50"
              }
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-red-50 font-semibold underline  underline-offset-2"
                  : "font-semibold hover:text-red-50"
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
