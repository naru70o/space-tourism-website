import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <div className="hidden md:flex relative px-[4rem] md:w-full xl:w-[70%]">
      {/* Background with opacity */}
      <div className="absolute inset-0 bg-white/10  backdrop-blur-3xl pointer-events-none"></div>
      {/* the nav list */}
      <ul className="flex items-center text-white font-normal py-10 font-barlowCondensed h-full text-[1.6rem] gap-[4.8rem] justify-end w-full z-10 tracking-widest">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-nav" : "hover-nav"
            }
            to="/"
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/destination"
            className={({ isActive }) =>
              isActive ? "active-nav" : "hover-nav"
            }
          >
            02 DESTINATION
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/crew"
            className={({ isActive }) =>
              isActive ? "active-nav" : "hover-nav"
            }
          >
            03 CREW
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/technology"
            className={({ isActive }) =>
              isActive ? "active-nav" : "hover-nav"
            }
          >
            04 TECHNOLOGY
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavLinks;
