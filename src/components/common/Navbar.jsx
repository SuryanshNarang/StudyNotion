import React, { useState, useEffect } from "react";
import Logo from "../../assets/Logo/Logo-Small-Light.png";
import { Link, matchPath, useLocation } from "react-router-dom";
import { NavbarLinks } from "../../data/navbar-links";
import { apiConnector } from "../../services/apiconnector";
import { categories } from "../../services/apis";
import { IoIosArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [subLinks, setSubLinks] = useState([]);

  // Fetching subLinks dynamically
  const fetchSubLinks = async () => {
    try {
      setLoading(true);
      const result = await apiConnector("GET", categories.COURSE_CATEGORIES_API);
      console.log("API Response:", result);

      if (result?.data?.allTags) {
        setSubLinks(result.data.allTags);
      } else {
        setSubLinks([]);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      setSubLinks([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubLinks();
  }, []);

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
        {/* Navigation Links */}
        <nav className="flex flex-1 justify-center">
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <div
                    className={`group relative flex cursor-pointer items-center gap-1 ${
                      matchRoute("/catalog/:catalogName") ? "text-yellow-25" : "text-richblack-25"
                    }`}
                  >
                    <p>{link.title}</p>
                    <IoIosArrowDropdown />
                    <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                      <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                      {loading ? (
                        <p className="text-center">Loading...</p>
                      ) : subLinks.length > 0 ? (
                        subLinks.map((subLink, i) => (
                          <Link
                            to={`/catalog/${subLink.link || subLink.name}`}  // Use fallback value
                            className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                            key={i}
                          >
                            <p>{subLink.name}</p>
                          </Link>
                        ))
                      ) : (
                        <p className="text-center">No Courses Found</p>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path) ? "text-yellow-25" : "text-richblack-25"
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
      </div>
    </div>
  );
};
export default Navbar;

