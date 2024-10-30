"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const SignupPage = () => {

  const router = useRouter()

  //handle signup form
  const handleSubmit = async (event) => {
    event.preventDefault();
    const newUser = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
      phone: event.target.phone.value,
      image: event.target.image.value,
      role:'user'
    };

    // console.log(newUser);

    //save new user data into database
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/signup/api`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    if (response.status === 200) {
      event.target.reset();
      toast.success("user created");
      router.push("/auth/admin");
    }
  };

  return (
    <div className="max-w-2xl bg-white p-6 my-2 rounded-lg shadow-md sm:px-8 sm:py-10 lg:px-12 lg:py-5 dark:bg-zinc-900 lg:h-[82vh] mx-auto">
      <div className="flex flex-col space-y-2">
        <h3 className="text-3xl font-bold tracking-tight">Sign Up</h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Please fill in the form to create an account.
        </p>
      </div>
      <div>
        <form className="space-y-5 mt-2" onSubmit={handleSubmit}>
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
                name="name"
                required
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
                required
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
              placeholder="Enter your email"
              name="email"
              required
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
              required
              placeholder="password"
              name="password"
              type="password"
            />
          </div>
          <div className="space-y-2 text-sm">
            <label
              className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300"
              htmlFor="Image"
            >
              Image URL <span className="text-red-800">(*jpg or png)</span>
            </label>

            <input
              type="text"
              name="image"
              placeholder="Enter your image url"
              className="input input-bordered  w-full h-10  focus-visible:outline-none"
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
