import { NavLink, useNavigate } from "react-router-dom";
interface Props {
  open: boolean;
}
function NavLinks({ open }: Props) {
  const navigate = useNavigate();
  return (
    <>
      <div className="hidden md:flex relative px-[4rem] md:w-full lg:w-full">
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

      {/* mobile */}
      <div
        className={`bg-white/5 backdrop-blur-xl md: md:hidden z-[90] flex h-screen w-[70%] right-0 top-0 fixed text-white pl-8 py-32 ${
          open ? "open" : "closed"
        }`}
      >
        <ul className="flex flex-col items-start text-white font-normal py-10 font-barlowCondensed h-full text-[1.6rem] gap-4 justify-start w-full z-10 tracking-widest">
          <li
            onClick={() => {
              navigate("/");
            }}
            className="flex group justify-between w-full items-center cursor-pointer"
          >
            <span>00 HOME</span>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active-nav-mobile" : "hover-nav-mobile"
              }
            ></NavLink>
          </li>
          <li
            onClick={() => {
              navigate("/destination");
            }}
            className="flex group justify-between w-full items-center cursor-pointer"
          >
            <span>02 DESTINATION</span>
            <NavLink
              to="/destination"
              className={({ isActive }) =>
                isActive ? "active-nav-mobile" : "hover-nav-mobile"
              }
            ></NavLink>
          </li>
          <li
            onClick={() => {
              navigate("/crew");
            }}
            className="flex group justify-between w-full items-center cursor-pointer"
          >
            <span>03 CREW</span>
            <NavLink
              to="/crew"
              className={({ isActive }) =>
                isActive ? "active-nav-mobile" : "hover-nav-mobile"
              }
            ></NavLink>
          </li>
          <li
            onClick={() => {
              navigate("/technology");
            }}
            className="flex group justify-between w-full items-center cursor-pointer"
          >
            <span>04 TECHNOLOGY</span>
            <NavLink
              to="/technology"
              className={({ isActive }) =>
                isActive ? "active-nav-mobile" : "hover-nav-mobile"
              }
            ></NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavLinks;
