import {
  Navbar,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";
import { useContext, useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineBars, AiOutlineMail } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";
function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut();
    return Swal.fire({
      position: "top-end",
      icon: "success",
      title: "User logged out successfully",
      showConfirmButton: false,
      timer: 1000,
    });
  };
  const profileMenuItems = (
    <ul className="space-y-2 font-semibold p-2">
      <li className="md:hidden text-blue-500 text-center">
        <NavLink className="flex gap-1">{user.displayName || ""}</NavLink>
      </li>
      <li>
        <NavLink className="flex items-center gap-1">
          <AiOutlineMail className="w-5 h-4"></AiOutlineMail>{" "}
          {user.email || "No email"}
        </NavLink>
      </li>
      <li>
        <NavLink className="flex gap-1">
          <UserCircleIcon className="w-5"></UserCircleIcon> My Profile
        </NavLink>
      </li>
      <li>
        <NavLink className="flex gap-1">
          <Cog6ToothIcon className="w-5"></Cog6ToothIcon> Edit Profile
        </NavLink>
      </li>
      <li>
        <NavLink className="flex gap-1">
          <InboxArrowDownIcon className="w-5"></InboxArrowDownIcon>Inbox
        </NavLink>
      </li>
      <li>
        <NavLink className="flex gap-1">
          <LifebuoyIcon className="w-5"></LifebuoyIcon> Help
        </NavLink>
      </li>
      <li>
        <NavLink onClick={handleSignOut} className="flex gap-1 text-red-500">
          <PowerIcon className="w-5"></PowerIcon>Sign Out
        </NavLink>
      </li>
    </ul>
  );
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <p className="text-lg font-semibold text-blue-600 hidden md:block text-center">
        {user.displayName || ""}
      </p>
      <MenuHandler>
        {user && (
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
          >
            <img
              className="rounded-full w-10 h-10"
              src={
                user.photoURL ||
                "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
              }
              alt=""
            />

            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform text-black ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          </Button>
        )}
      </MenuHandler>
      <MenuList className="p-1">{profileMenuItems}</MenuList>
    </Menu>
  );
}

const CustomizeNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);
  const navLinks = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-10 font-semibold list-none">
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " block py-1 lg:py-2 pl-3 pr-4 md:bg-transparent  md:p-0 text-gray-500"
              : " block py-1 lg:py-2 pl-3 pr-4 md:bg-transparent hover:text-gray-500 text-black md:p-0"
          }
          aria-current="page"
          variant="small"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/events"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " block py-1 lg:py-2 pl-3 pr-4 md:bg-transparent  md:p-0 text-gray-500"
              : " block py-1 lg:py-2 pl-3 pr-4 md:bg-transparent text-black hover:text-gray-500 md:p-0"
          }
          aria-current="page"
          variant="small"
        >
          Events
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " block py-1 lg:py-2 pl-3 pr-4 md:bg-transparent  md:p-0 text-gray-500"
              : " block py-1 lg:py-2 pl-3 pr-4 md:bg-transparent text-black hover:text-gray-500 md:p-0"
          }
          aria-current="page"
          variant="small"
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/membership"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " block py-1 lg:py-2 pl-3 pr-4 md:bg-transparent  md:p-0 text-gray-500"
              : " block py-1 lg:py-2 pl-3 pr-4 md:bg-transparent text-black hover:text-gray-500 md:p-0"
          }
          aria-current="page"
          variant="small"
        >
          Membership
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " block py-1 lg:py-2 pl-3 pr-4 md:bg-transparent  md:p-0 text-gray-500"
              : " block py-1 lg:py-2 pl-3 pr-4 md:bg-transparent text-black hover:text-gray-500 md:p-0"
          }
          aria-current="page"
          variant="small"
        >
          Contact
        </NavLink>
      </li>
      {!user && (
        <>
          <li>
            <NavLink
              to="/register"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " block py-1 md:py-2 pl-3 pr-4 md:bg-transparent  md:p-0 text-gray-500"
                  : " block py-1 md:py-2 pl-3 pr-4 md:bg-transparent text-black hover:text-gray-500 md:p-0"
              }
              aria-current="page"
              variant="small"
            >
              Register
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " block py-1 md:py-2 pl-3 pr-4 md:bg-transparent  md:p-0 text-gray-500"
                  : " block py-1 md:py-2 pl-3 pr-4 md:bg-transparent text-black hover:text-gray-500 md:p-0"
              }
              aria-current="page"
              variant="small"
            >
              Login
            </NavLink>
          </li>
        </>
      )}
    </ul>
  );
  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 ">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900 max-w-screen-xl">
        <div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? (
              <AiOutlineClose className="text-xl" />
            ) : (
              <AiOutlineBars className="text-xl" />
            )}
          </IconButton>
        </div>
        <NavLink
          to="/"
          className="mr-4 ml-2 my-2  text-2xl font-bold cursor-pointer text-black luna flex gap-2 items-center"
        >
          <img className="h-8" src="/logo.png" alt="" />
          SPORTACULAR360
        </NavLink>
        <div className="flex gap-5 items-center">
          <div className="hidden lg:block">{navLinks}</div>
          {user && <ProfileMenu />}
        </div>
      </div>
      <Collapse open={isNavOpen} className="overflow-hidden">
        {navLinks}
      </Collapse>
    </Navbar>
  );
};

export default CustomizeNavbar;
