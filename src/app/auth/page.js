import Link from "next/link";
import { FaUserCircle, FaUserGraduate } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
const ChoosePage = () => {
  return (
    <section className="m-3 lg:h-[80vh] flex flex-col lg:flex-row gap-5 justify-center items-center">
      {/* admin */}
      <Link href={"/auth/admin"}>
        <div className="flex flex-col justify-center items-center space-y-3 border border-primary p-3 rounded-md hover:bg-primary hover:text-white transition-all">
          <FaUserCircle size="2em"></FaUserCircle>
          <h2 className="text-2xl font-bold">Admin</h2>
          <p className="text-lg font-light text-center">
            Login as an administrator to access the <br></br> dashboard to
            manage app data.
          </p>
        </div>
      </Link>

      {/* student */}
      <Link href={"/auth/student"}>
        <div className="flex flex-col justify-center items-center space-y-3 border border-purple-400 p-3 rounded-md hover:bg-purple-600 hover:text-white transition-all">
          <FaUserGraduate size="2em"></FaUserGraduate>
          <h2 className="text-2xl font-bold">Student</h2>
          <p className="text-lg font-light text-center">
            Login as a student to explore course <br></br> assignments , notice
            and track your fees.
          </p>
        </div>
      </Link>

      {/* teacher */}
      <Link href={"/auth/teacher"}>
        <div className="flex flex-col justify-center items-center space-y-3 border border-green-400 p-3 rounded-md hover:bg-green-600 hover:text-white transition-all">
          <GiTeacher size="2em"></GiTeacher>
          <h2 className="text-2xl font-bold">Teacher</h2>
          <p className="text-lg font-light text-center">
            Login as a teacher to create courses, <br></br> assignments, and
            track student progress.
          </p>
        </div>
      </Link>
    </section>
  );
};

export default ChoosePage;
