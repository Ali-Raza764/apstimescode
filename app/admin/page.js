"use client";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase";
import { useRouter } from "next/navigation";
import { useAuth } from "@/utils/useAuth";

const Admin = () => {
  const router = useRouter()
  const authUser = useAuth();

  const logOut = async(e) =>{
    await signOut(auth);
    router.push('/')
  }

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
    <div className="min-h-screen w-full flex-props">{authUser.email}
    <button onClick={logOut}>Log Out</button></div>
  );
};

export default Admin;
