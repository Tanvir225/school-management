"use client";
import Lottie from "lottie-react";
import lodingLogo from "@/assests/loading.json";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Navbar = () => {

  const session = useSession()
  console.log(session);

  return (
    <section className="flex items-center justify-between container mx-auto border-green-100 border-b-2 p-1 ">
      <div>
        <Link href="/">
          <Lottie
            animationData={lodingLogo}
            loop={true}
            className="w-11 h-11"
          ></Lottie>
        </Link>
      </div>
      <div>
        <button className="btn btn-sm btn-outline btn-primary  hover:btn-primary ">
          Demo
        </button>
      </div>
    </section>
  );
};

export default Navbar;
