"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { navutil } from "./navutil";
import { useAuth } from "@/utils/useAuth";

const Navbar = () => {
  const nav = useRef();
  const router = useRouter();
  const [active, setActive] = useState("Home");
  const [showNav, setshowNav] = useState(false);
  const authUser = useAuth();

  const navItemClass =
    "item flex items-center justify-start gap-x-[4rem] w-full text-2xl font-bold my-6 sm:gap-x-[6.5rem] hover:text-red-600";

  const toggleNav = () => {
    nav.current.classList.toggle("translate-x-[-1000px]");
    if (showNav == true) {
      setshowNav(false);
    } else {
      setshowNav(true);
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          setshowNav(true);
          toggleNav();
        }}
        className="text-3xl md:hidden"
      >
        &#9776;
      </button>
      <nav
        ref={nav}
        className={
          showNav
            ? "navbar absolute top-0 left-0 transition-transform bg-white min-h-screen w-[80%] z-99 sm:w-[60%] md:w-[40%] border-r border-gray-200"
            : "navbar absolute top-0 left-0 transition-transform translate-x-[-1000px] bg-white min-h-screen w-[80%] z-99 sm:w-[60%] md:w-[40%] border-r border-gray-200"
        }
      >
        <div className="wrapper flex-props flex-col p-4 sm:p-6">
          <button onClick={toggleNav} className="text-3xl self-end">
            &#9932;
          </button>

          <div className="link-container mt-1 mb-2 text-left gap-y-5">
            {navutil?.map((item) => {
              const isItemActive = item.name === active;
              const itemClass = isItemActive
                ? `${navItemClass} text-red-600`
                : navItemClass;

              const Icon = item.icon; // React component for the icon

              return (
                <div
                  onClick={() => {
                    setActive(item.name);
                    setshowNav(false);
                  }}
                  key={item.name}
                >
                  <Link href={item.url} className={itemClass}>
                    <div className="icon text-2xl">
                      <Icon size={24} /> {/* Render the icon */}
                    </div>
                    <h3>{item.name}</h3>
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="flex-props mb-11">
            {authUser ? (
              <>Signed As: {authUser.email}</>
            ) : (
              <button
                className={
                  active == "login"
                    ? "w-[15.2rem] px-2 text-center py-1 border border-gray-600 rounded-md bg-red-600 text-xl text-white font-bold "
                    : "w-[15.2rem] px-2 text-center py-1 border border-gray-600 rounded-md bg-green-800 text-xl text-white font-bold outline-none border-none"
                }
                onClick={() => {
                  setActive("login");
                  setshowNav(false)
                  router.push("/login");
                }}
              >
                Login
              </button>
            )}
          </div>

          <div>&copy; APSTimes all rights reserved</div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;