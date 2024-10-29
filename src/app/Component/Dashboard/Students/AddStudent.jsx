"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const AddStudent = ({ classes, sections, sessions }) => {
  const router = useRouter();

  // Function to get the current date in Bangladesh Time
  function getBangladeshDate() {
    const now = new Date();
    const bangladeshOffset = 6 * 60; // Offset in minutes (UTC+6)
    const localTime = new Date(now.getTime() + bangladeshOffset * 60 * 1000);

    // Extract the date part (YYYY-MM-DD)
    const year = localTime.getUTCFullYear();
    const month = String(localTime.getUTCMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const day = String(localTime.getUTCDate()).padStart(2, "0");

    return `${day}-${month}-${year}`; // Format: YYYY-MM-DD
  }

  // console.log(getBangladeshDate());

  // handle addStudent function
  const handleAddStudent = async (event) => {
    event.preventDefault();
    const newStudent = {
      name: event.target.name.value,
      gender: event.target.gender.value,
      phone: event.target.phone.value,
      fatherName: event.target.fatherName.value,
      motherName: event.target.motherName.value,
      parentsNumber: event.target.parentsNumber.value,
      studentClass: parseInt(event.target.studentClass.value),
      studentSection: event.target.studentSection.value,
      roll: parseInt(event.target.roll.value),
      studentSession: parseInt(event.target.studentSession.value),
      studentImage: event.target.studentImage.value,
      admissionDate: getBangladeshDate(),
    };

    // console.log(newStudent);
    const response = await fetch(
      "http://localhost:3000/dashboard/students/add-student/api",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newStudent),
      }
    );
    if (response.status === 200) {
      router.push("/dashboard/students");
      event.target.reset();
      toast.success("student added Successfully");
    }
    if (response.status === 400) {
      toast.error("Students of this role are already exist");
    }
  };

  return (
    <section className="w-full">
      <h1 className="text-xl font-bold text-primary my-4 border-b-2 border-primary">
        Add New Student
      </h1>
      {/* student form */}
      <form
        onSubmit={handleAddStudent}
        className="flex items-center gap-5 flex-col lg:flex-row"
      >
        {/* side - 1 */}
        <div className="w-full space-y-3 border-2 border-green-500 p-5 shadow-sm rounded-lg">
          <h1 className="font-semibold text-lg border-b-2 border-dashed border-green-200">
            Personal Information
          </h1>
          <div className="">
            <input
              className="h-10 w-full rounded bg-transparent pl-2  outline-none ring-1 ring-primary dark:ring-gray-500"
              type="text"
              name="name"
              placeholder="student name"
              required
            />
          </div>
          <div className="space-y-1">
            <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
              <input
                id="bordered-radio-2"
                type="radio"
                value="male"
                name="gender"
                required
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="bordered-radio-2"
                className="w-full py-1  ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Male
              </label>
            </div>
            <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
              <input
                id="bordered-radio-2"
                type="radio"
                value="female"
                name="gender"
                required
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="bordered-radio-2"
                className="w-full py-1  ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Female
              </label>
            </div>
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
          <h1 className="font-semibold text-lg border-b-2 border-dashed border-primary">
            Academic Information
          </h1>
          <select
            name="studentClass"
            required
            className="h-10 w-full rounded bg-transparent pl-5  outline-none ring-1 ring-zinc-400 dark:ring-gray-500"
          >
            {classes.map((option) => (
              <option key={option._id} value={option?.classNumber}>
                {option?.classNumber}
              </option>
            ))}
          </select>
          <select
            name="studentSection"
            required
            className="h-10 w-full rounded bg-transparent pl-5  outline-none ring-1 ring-zinc-400 dark:ring-gray-500"
          >
            {sections.map((section) => (
              <option key={section._id} value={section?.section}>
                {section?.section}
              </option>
            ))}
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
            {sessions.map((session) => (
              <option key={session._id} value={session?.sessionYear}>
                {session?.sessionYear}
              </option>
            ))}
          </select>

          <div>
            <input
              type="text"
              className="h-10 w-full rounded bg-transparent pl-5  outline-none ring-1 ring-primary dark:ring-gray-500"
              name="studentImage"
              placeholder="student image link"
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
