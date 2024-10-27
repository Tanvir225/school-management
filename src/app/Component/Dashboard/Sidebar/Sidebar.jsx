"use client";
import Link from "next/link";
import { FaCalendarCheck, FaHome } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { useSession } from "next-auth/react";

const Sidebar = () => {
  // session
  const session = useSession();

  // admin acces routes
  const adminRoutes = [
    {
      href: "/dashboard",
      label: "Home",
      icon: <FaHome></FaHome>,
    },
    {
      href: "/dashboard/students",
      label: "Students",
      icon: <PiStudentBold></PiStudentBold>,
    },
    {
      href: "/dashboard/teachers",
      label: "Teachers",
      icon: <GiTeacher></GiTeacher>,
    },
  ];

  //Teacher access route
  const teacherRoutes = [
    {
      href: "",
      label: "Home",
      icon: <FaHome></FaHome>,
    },
    {
      href: "",
      label: "Students",
      icon: <PiStudentBold></PiStudentBold>,
    },
    {
      href: "",
      label: "Attendance",
      icon: <FaCalendarCheck></FaCalendarCheck>,
    },
  ];

  return (
    <div className="hidden lg:block w-64 fixed border-green-100 shadow-sm rounded-lg border-2 z-40 transition-transform sm:translate-x-0 h-[84vh] overflow-y-auto">
      {/* laptop or pc device */}
      {session?.data?.user?.role === "admin" &&
        adminRoutes.map((route, index) => (
          <div key={index} className="m-5">
            <Link
              href={route?.href}
              className="flex items-center  text-[16px] gap-2 btn hover:text-white hover:bg-primary hover:transition-all"
            >
              {route?.icon} {route?.label}
            </Link>
          </div>
        ))}

      {session?.data?.user?.role === "teacher" &&
        teacherRoutes.map((route, index) => (
          <div key={index} className="m-5">
            <Link
              href={route?.href}
              className="flex items-center  text-[16px] gap-2 btn hover:text-white hover:bg-primary hover:transition-all hover:delay-100"
            >
              {route?.icon} {route?.label}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Sidebar;
