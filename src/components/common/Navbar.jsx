import React from "react";
import Logo from "../../assets/Logo/Logo-Small-Light.png";
import { Link, matchPath, useLocation } from "react-router-dom";
import { NavbarLinks } from "../../data/navbar-links";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProfileDropDown from "../core/Auth/ProfileDropDown";
const Navbar = () => {
  const location = useLocation();
  // after slices the below code is to fetch those states
  // destructuring
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);

  // Function to match route
  const matchRoute = (route) => {
    return matchPath({ path: route, end: true }, location.pathname);
  };

  return (
    <div className="flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700">
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="Logo" height={42} loading="lazy" />
        </Link>
        {/* Navlinks */}
        <nav>
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <div></div>
                ) : (
                  <Link to={link.path}>
                    <p
                      className={`${
                        matchRoute(link.path)
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Understanding few things here as there is too much info now.
            User=>logged in hai ya nhi how to know? We need Data.
            so if token==null then not logged in (login button will appear and signup also)
            if token!=null then logged in (dashboard button will appear and profile also)
            if user!= instructor how many items in cart?
            we will use redux toolkit to manage statemanagement here.
        */}
        {/* Login, signup,dashboard */}
        <div className="flex gap-x-4 items-center ">
          {/* if i want cart functionality that how many items are there in the cart: that can only happen when 
            user is present if not logged in then there is no value in user o/w user will have some value
          */}
          {/* instead of adding instructor directly as a string here a constant file must have been there. */}
          {user && user?.accountType != "Instructor" && (
            // since we want the number to overlap on the cart icon we set the property to relative
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart />
              {totalItems > 0 && <span>{totalItems}</span>}
            </Link>
          )}
          {token === null && (
            <Link to={"/login"}>
              <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-50 rounded-md">
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to={"/signup"}>
              <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-50 rounded-md">
                SignUp
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropDown />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
