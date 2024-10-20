import React from "react";

const SignupPage = () => {
  return (
    <div className="max-w-2xl bg-white p-6 my-2 rounded-lg shadow-md sm:px-8 sm:py-10 lg:px-12 lg:py-16 dark:bg-zinc-900 lg:h-[80vh] mx-auto">
      <div className="flex flex-col space-y-2">
        <h3 className="text-3xl font-bold tracking-tight">Sign Up</h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Please fill in the form to create an account.
        </p>
      </div>
      <div>
        <form className="space-y-6 mt-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2 text-sm">
              <label
                className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300"
                htmlFor="full_name"
              >
                Full Name
              </label>
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                placeholder="Enter Full name"
                name="full_name"
                type="text"
              />
            </div>
            <div className="space-y-2 text-sm">
              <label
                className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300"
                htmlFor="phone"
              >
                Phone 
              </label>
              <input
                className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                id="phone"
                placeholder="ex: 017******"
                name="phone"
                type="text"
              />
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <label
              className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
              id="email"
              placeholder="Enter your email"
              name="email"
              type="email"
            />
          </div>
          <div className="space-y-2 text-sm">
            <label
              className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300"
              htmlFor="password_"
            >
              Password
            </label>
            <input
              className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
              id="password_"
              placeholder="password"
              name="password"
              type="password"
            />
          </div>
          <button className="rounded-md bg-primary px-4 py-2 text-white transition-colors hover:bg-zinc-700 dark:bg-sky-700">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
