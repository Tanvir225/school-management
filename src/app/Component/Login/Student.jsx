"use client";

import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

const StudentLoginPage = () => {
  const options = ["6", "7", "8", "9", "10"];

  // handle Login functionality
  const handleLogin = async(event)=>{
    event.preventDefault();
    const studentClass = event.target.studentClass.value;
    const roll = event.target.roll.value;

    // console.log(studentClass,roll);

    const result = await signIn('credentials',{
      redirect: false,
      studentClass: studentClass,
      roll: roll,
    })

    if (!result?.ok) {
      toast.error("Invalid class or roll")
    }

    if (result?.status===200) {
      toast.success("login successfully")
    }
  }

  return (
    <div className="flex justify-center items-center h-[85vh]">
      <div className="w-full max-w-lg rounded-lg bg-white p-5 sm:p-8 drop-shadow-lg dark:bg-zinc-900">
        <form className="space-y-6" onSubmit={handleLogin}>
          <h1 className="text-3xl font-semibold tracking-tight">Sign In</h1>
          <div className="space-y-2">
            <label htmlFor="nui_email" className="block">
              Class
            </label>

            {/* dropdown option */}
            <div className="relative">
              <select
                name="studentClass"
                required
                className="h-10 w-full rounded bg-transparent pl-5  outline-none ring-1 ring-zinc-400 dark:ring-gray-500"
              >
                {options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="pass" className="block">
              Class Roll
            </label>
            <div className="relative">
              <input
                className="h-10 w-full rounded bg-transparent pl-10 outline-none ring-1 ring-zinc-400 dark:ring-gray-500"
                placeholder="ex:12"
                name="roll"
                type="text"
              />
              <span className="absolute left-2 top-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="inline-block w-6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-zinc-700 dark:fill-zinc-300"
                    d="M20.9098 11.1203V6.73031C20.9098 5.91031 20.2898 4.98031 19.5198 4.67031L13.9498 2.39031C12.6998 1.88031 11.2898 1.88031 10.0398 2.39031L4.46984 4.67031C3.70984 4.98031 3.08984 5.91031 3.08984 6.73031V11.1203C3.08984 16.0103 6.63984 20.5903 11.4898 21.9303C11.8198 22.0203 12.1798 22.0203 12.5098 21.9303C17.3598 20.5903 20.9098 16.0103 20.9098 11.1203ZM12.7498 12.8703V15.5003C12.7498 15.9103 12.4098 16.2503 11.9998 16.2503C11.5898 16.2503 11.2498 15.9103 11.2498 15.5003V12.8703C10.2398 12.5503 9.49984 11.6103 9.49984 10.5003C9.49984 9.12031 10.6198 8.00031 11.9998 8.00031C13.3798 8.00031 14.4998 9.12031 14.4998 10.5003C14.4998 11.6203 13.7598 12.5503 12.7498 12.8703Z"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
          <button className="rounded px-5 py-2 ring-1 bg-primary text-white ring-zinc-400 hover:bg-zinc-600/20 hover:text-black dark:ring-zinc-500">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentLoginPage;
