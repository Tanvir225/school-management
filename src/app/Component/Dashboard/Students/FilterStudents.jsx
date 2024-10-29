"use client";

import { useRouter } from "next/navigation";

const FilterStudents = ({ classes, sections, sessions }) => {
  const router = useRouter();

  //handle fileterForm
  const handleFilterForm = async (event) => {
    event.preventDefault();
    const filterData = {
      studentClass: parseInt(event.target.studentClass.value),
      studentSection: event.target.studentSection.value,
      studentSession: parseInt(event.target.studentSession.value),
    };

    // console.log (filterData)
    // Construct query string
    const queryString = new URLSearchParams(filterData).toString();

    // Push the new route with the query parameters
    router.push(`/dashboard/students?${queryString}`);
  };

  return (
    <div className="">
      <form
        className="flex justify-between items-center gap-5"
        onSubmit={handleFilterForm}
      >
        <select
          name="studentClass"
          required
          className="h-10 w-full rounded bg-transparent pl-5  outline-none ring-1 ring-zinc-400 dark:ring-gray-500"
        >
          {classes &&
            classes.map((option) => (
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
          {sections &&
            sections.map((section) => (
              <option key={section._id} value={section?.section}>
                {section?.section}
              </option>
            ))}
        </select>
        <select
          name="studentSession"
          required
          className="h-10 w-full rounded bg-transparent pl-5  outline-none ring-1 ring-zinc-400 dark:ring-gray-500"
        >
          {sessions &&
            sessions.map((session) => (
              <option key={session._id} value={session?.sessionYear}>
                {session?.sessionYear}
              </option>
            ))}
        </select>

        <div>
          <button className="btn btn-sm btn-primary btn-outline hover:bg-primary hover:text-white ">
            search
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterStudents;
