import getClasses from "@/api/getClasses";
import getSections from "@/api/getSections";
import getSessions from "@/api/getSessions";
import FilterStudents from "@/app/Component/Dashboard/Students/FilterStudents";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

const studentPage = async ({ searchParams }) => {
  const classes = await getClasses();
  const sections = await getSections();
  const sessions = await getSessions();

  let students = [];

  const { studentClass, studentSection, studentSession } = searchParams;
  // console.log(studentClass, studentSection, studentSession);

  if (studentClass && studentSection && studentSession) {
    const queryString = new URLSearchParams({
      studentClass,
      studentSection,
      studentSession,
    }).toString();

    const response = await fetch(
      `http://localhost:3000/dashboard/students/api/getStudents?${queryString}`
    );
    students = await response.json();
    console.log(students);
  }

  return (
    <div className="w-full space-y-3">
      {/* student overview */}
      <section className="h-16 bg-base-100 shadow-sm rounded-lg w-full border-2 border-blue-100 p-2 flex justify-between items-center">
        <h1 className="text-primary font-semibold text-lg">
          Total students :{" "}
          {students.length > 0
            ? students.length
            : "Please Filter to View Students"}
        </h1>
        <Link href={"/dashboard/students/add-student"}>
          <button className="btn btn-primary btn-outline hover:bg-primary hover:text-white">
            <FaPlus size={20}></FaPlus> add student
          </button>
        </Link>
      </section>

      {/* student filter options */}
      <section className="bg-base-100 shadow-sm rounded-lg w-full border-2 border-green-200 h-16 p-3">
        <FilterStudents
          classes={classes}
          sections={sections}
          sessions={sessions}
        ></FilterStudents>
      </section>

      {/* student show as a grid  */}
      <section className="w-full border-2 border-green-100 shadow-sm p-2 rounded-lg">
        {students.length > 0 ? "" : <p>Please Filter to View Students</p>}
      </section>
    </div>
  );
};

export default studentPage;
