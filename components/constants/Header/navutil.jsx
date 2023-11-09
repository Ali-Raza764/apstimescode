import {
    HiHome,
    HiNewspaper,
    HiUser,
    HiPencilAlt,
  } from "react-icons/hi";
import { AiFillSetting } from "react-icons/ai";
  
export const navutil = [
    { name: "Home", icon: HiHome, url: "/" },
    { name: "Articles", icon: HiNewspaper, url: "/articles" },
    { name: "Members", icon: HiUser, url: "/members" },
    { name: "Create", icon: HiPencilAlt, url: "/write" },
    { name: "Admin", icon: AiFillSetting, url: "/admin" },
  ];
