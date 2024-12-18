"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";
import toast from "react-hot-toast";
import { HashLoader } from "react-spinners";

const AdminLoginPage = () => {

  const router = useRouter()
  const [loading,setLoading] = useState(false)

  // login functionality
  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    // console.log(email,password);
    setLoading(true)
    const result = await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
    });

    setLoading(false)
    if (!result.ok) {
      toast.error("Invalid email or password");
      // event.target.reset()
    }

    if (result?.status === 200) {
      toast.success("login successfully");
      event.target.reset();
      router.push("/dashboard");
    }
  };

  //google login functionality

  const handelMedia = async (provider) => {
    // console.log(provider);
    const response = await signIn(provider, {
      redirect: true,
      callbackUrl: "/"
    });
  };

  return (
    <div className="max-w-3xl bg-white p-6 my-2 rounded-lg shadow-md sm:px-8 sm:py-10 lg:px-12 lg:py-16 dark:bg-zinc-900 lg:h-[80vh] mx-auto">
      <div className="flex flex-col justify-between space-x-0 sm:flex-row sm:space-x-12">
        <div className="mb-8 w-full sm:mb-0 sm:w-1/2">
          {/* Left side form */}
          <h2 className="mb-6 text-3xl font-semibold tracking-tight">
            Sign In
          </h2>

          <form onSubmit={handleLogin}>
            <div className="mb-4 flex flex-col space-y-4">
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none dark:border-zinc-700 focus:ring-1"
                placeholder="email"
                type="email"
                required
                name="email"
              />
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none dark:border-zinc-700 focus:ring-1"
                placeholder="Password"
                type="password"
                name="password"
              />
            </div>
            <div className="mb-6 flex items-center space-x-2 accent-sky-600">
              <input type="checkbox" id="keep_signed_in" />
              <label
                className="select-none text-sm font-medium"
                htmlFor="keep_signed_in"
              >
                Keep me signed in
              </label>
            </div>
            <button disabled={loading} className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium uppercase text-white hover:bg-black">
              { loading ? <HashLoader loading={loading} color="white" size={30}></HashLoader> :'Login'}
            </button>
          </form>
          <p className="mt-6 flex gap-1 text-sm">
            Did you
            <a className="text-sky-500 underline" href="#">
              forget your password?
            </a>
          </p>
        </div>
        {/* Right side content */}
        <div className="w-full sm:w-1/2">
          <p className="mb-6 text-sm">
            If you don&apos;t already have an account click the button below to
            create your account.
          </p>
          <Link href={"/signup"}>
            <button className="mb-2 inline-flex h-10 w-full items-center justify-center rounded-md bg-zinc-800 px-4 py-2 text-sm font-medium uppercase text-white hover:bg-zinc-700">
              Create Account
            </button>
          </Link>
          <p className="my-4 text-center">OR</p>

          <button onClick={() => handelMedia("google")} className="flex h-10 w-full items-center justify-center gap-1 rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="size-6 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            SIGN IN WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
