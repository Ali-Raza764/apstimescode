"use client";
import Link from "next/link";
import { useAuth } from "@/utils/useAuth";
import Dashboard from "./Dashboard";

const Admin = () => {
  const authUser = useAuth();

  if (!authUser) {
    return (
      <Link href={"/login"} className="block m-auto">
        <button className="p-2 rounded-md text-xl font-bold text-white shadow-md bg-green-800 hover:bg-red-600">
          Login
        </button>
      </Link>
    );
  }
  return (
    <Dashboard />
  );
};

export default Admin