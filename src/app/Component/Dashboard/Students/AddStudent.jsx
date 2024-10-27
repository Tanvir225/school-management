const AddStudent = () => {
  return (
    <section className="w-full">
      <h1 className="text-xl  font-bold text-primary my-5">Add New Student</h1>
      {/* student form */}
      <form className="flex items-center gap-5">
        {/* side - 1 */}
        <div className="w-full space-y-5 border-2 border-green-100 p-5 shadow-sm rounded-lg">
          <div className="">
            <input
              className="h-10 w-full rounded bg-transparent pl-2  outline-none ring-1 ring-zinc-400 dark:ring-gray-500"
              type="text"
              name="name"
              placeholder="student name"
              required
            />
          </div>
          <div className="">
            <input
              className="h-10 w-full rounded bg-transparent pl-2  outline-none ring-1 ring-zinc-400 dark:ring-gray-500"
              type="text"
              name="phone"
              placeholder="student number"
              required
            />
          </div>
          <div className="">
            <input
              className="h-10 w-full rounded bg-transparent pl-2  outline-none ring-1 ring-zinc-400 dark:ring-gray-500"
              type="text"
              name="fatherName"
              placeholder="father name"
              required
            />
          </div>
          <div className="">
            <input
              className="h-10 w-full rounded bg-transparent pl-2  outline-none ring-1 ring-zinc-400 dark:ring-gray-500"
              type="text"
              name="motherName"
              placeholder="mother name"
              required
            />
          </div>
          <div className="">
            <input
              className="h-10 w-full rounded bg-transparent pl-2  outline-none ring-1 ring-zinc-400 dark:ring-gray-500"
              type="text"
              name="parentsNumber"
              placeholder="parents number"
              required
            />
          </div>
        </div>

        {/* side - 2 */}
        <div className="w-full space-y-5 border-primary border-2 p-5 rounded-lg shadow-sm">
          <select
            name="studentClass"
            required
            className="h-10 w-full rounded bg-transparent pl-5  outline-none ring-1 ring-zinc-400 dark:ring-gray-500"
          >
            <option value="">Select a class</option>
            <option value="">6</option>
            <option value="">7</option>
            <option value="">8</option>
            <option value="">9</option>
            <option value="">10</option>
          </select>
          <select
            name="studentSection"
            required
            className="h-10 w-full rounded bg-transparent pl-5  outline-none ring-1 ring-zinc-400 dark:ring-gray-500"
          >
            <option value="">Select a section</option>
            <option value="">A</option>
            <option value="">B</option>
            <option value="">C</option>
          </select>
          <select
            name="studentSession"
            required
            className="h-10 w-full rounded bg-transparent pl-5  outline-none ring-1 ring-zinc-400 dark:ring-gray-500"
          >
            <option value="">Select a session</option>
            <option value="">2019</option>
            <option value="">2020</option>
            <option value="">2021</option>
          </select>

          <div>
            <label htmlFor="">Student Image</label>
            <input
              type="file"
              className=" w-full rounded bg-transparent p-2  outline-none ring-1 ring-zinc-400 dark:ring-gray-500"
            />
          </div>

          <div>
            <button className="btn w-full btn-outline btn-primary">Add student</button>
          </div>
        </div>
       
      </form>
    </section>
  );
};

export default AddStudent;
