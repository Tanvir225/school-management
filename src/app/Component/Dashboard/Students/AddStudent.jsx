'use client'
const AddStudent = () => {
  // handle addStudent function
  const handleAddStudent = async(event) => {
    event.preventDefault();
    const newStudent = {
      name: event.target.name.value,
      phone: event.target.phone.value,
      fatherName: event.target.fatherName.value,
      motherName: event.target.motherName.value,
      parentsNumber: event.target.parentsNumber.value,
      studentClass: event.target.studentClass.value,
      studentSection: event.target.studentSection.value,
      roll: event.target.roll.value,
      studentSession: event.target.studentSession.value,
      studentImage: event.target.studentImage.value,
    };

    console.log(newStudent);
  };

  return (
    <section className="w-full">
      <h1 className="text-xl font-bold text-primary my-5 border-b-2 border-primary">
        Add New Student
      </h1>
      {/* student form */}
      <form onSubmit={handleAddStudent} className="flex items-center gap-5 flex-col lg:flex-row">
        {/* side - 1 */}
        <div className="w-full space-y-5 border-2 border-green-500 p-5 shadow-sm rounded-lg">
          <div className="">
            <input
              className="h-10 w-full rounded bg-transparent pl-2  outline-none ring-1 ring-primary dark:ring-gray-500"
              type="text"
              name="name"
              placeholder="student name"
              required
            />
          </div>
          <div className="">
            <input
              className="h-10 w-full rounded bg-transparent pl-2  outline-none ring-1 ring-primary dark:ring-gray-500"
              type="text"
              name="phone"
              placeholder="student number"
              required
            />
          </div>
          <div className="">
            <input
              className="h-10 w-full rounded bg-transparent pl-2  outline-none ring-1 ring-primary dark:ring-gray-500"
              type="text"
              name="fatherName"
              placeholder="father name"
              required
            />
          </div>
          <div className="">
            <input
              className="h-10 w-full rounded bg-transparent pl-2  outline-none ring-1 ring-primary dark:ring-gray-500"
              type="text"
              name="motherName"
              placeholder="mother name"
              required
            />
          </div>
          <div className="">
            <input
              className="h-10 w-full rounded bg-transparent pl-2  outline-none ring-1 ring-primary dark:ring-gray-500"
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

          <div className="">
            <input
              className="h-10 w-full rounded bg-transparent pl-5  outline-none ring-1 ring-zinc-400 dark:ring-gray-500"
              type="number"
              name="roll"
              placeholder="student roll"
              required
            />
          </div>
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
              name="studentImage"
            />
          </div>

          <div>
            <button className="btn w-full btn-outline btn-primary">
              Add student
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default AddStudent;
