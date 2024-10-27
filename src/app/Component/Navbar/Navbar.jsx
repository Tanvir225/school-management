"use client";

import logo from "@/assests/logo.svg";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import toast from "react-hot-toast";
import LoginSkeleton from "../Utils/LoginSkeleton";

const Navbar = () => {
  const session = useSession();

  console.log(session);

  return (
    <section className="flex items-center justify-between container mx-auto border-green-100 border-b-2 p-1 ">
      <div>
        <Link href={"/"}>
          <Image src={logo} alt="logo" width={40} height={40}></Image>
        </Link>
      </div>
      <div className="">
        {session.status === "loading" && <LoginSkeleton></LoginSkeleton>}

        {session.status === "unauthenticated" && (
          <button className="btn btn-sm btn-outline btn-primary  hover:btn-primary ">
            Demo
          </button>
        )}

        {session.status === "authenticated" && (
          <div className="flex gap-2 items-center">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full skeleton">
                  <Image
                    src={session?.data?.user?.image}
                    alt={session?.data?.user?.name}
                    width={45}
                    height={45}
                  ></Image>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a className="text-primary font-semibold">
                    {session?.data?.user?.name}
                  </a>
                </li>
                <li>
                  <a
                    onClick={() =>
                      signOut(toast.success("Logout Successfully"))
                    }
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <Link href={"/dashboard"}>
                <button className="btn btn-sm btn-outline text-primary hover:bg-primary">
                  Dashboard
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Navbar;
