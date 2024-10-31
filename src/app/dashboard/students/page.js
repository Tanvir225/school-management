import getClasses from "@/api/getClasses";
import getSections from "@/api/getSections";
import getSessions from "@/api/getSessions";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import FilterStudents from "@/app/Component/Dashboard/Students/FilterStudents";
import StudentGrid from "@/app/Component/Dashboard/Students/StudentGrid";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaPlus } from "react-icons/fa";

const studentPage = async ({ searchParams }) => {
  const session = await getServerSession(authOptions);
  // Redirect if the user is not an admin or teacher
  if (!session || !["admin", "teacher"].includes(session.user.role)) {
    redirect("/auth");
  }

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
      `${process.env.NEXT_PUBLIC_URL}/dashboard/students/api/getStudents?${queryString}`
    );
    students = await response.json();

    // return students
    // console.log(students);
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
        {students.length > 0 ? (
          <StudentGrid students={students}></StudentGrid>
        ) : (
          <p>Please Filter to View Students</p>
        )}
      </section>
    </div>
  );
};

export default studentPage;
