"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const AddStudent = ({ classes, sections, sessions }) => {
  const router = useRouter();

  // handle addStudent function
  const handleAddStudent = async (event) => {
    event.preventDefault();
    const newStudent = {
      name: event.target.name.value,
      phone: event.target.phone.value,
      fatherName: event.target.fatherName.value,
      motherName: event.target.motherName.value,
      parentsNumber: event.target.parentsNumber.value,
      studentClass: parseInt(event.target.studentClass.value),
      studentSection: event.target.studentSection.value,
      roll: parseInt(event.target.roll.value),
      studentSession: event.target.studentSession.value,
      studentImage: event.target.studentImage.value,
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
        <div className="w-full space-y-5 border-2 border-green-500 p-5 shadow-sm rounded-lg">
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
