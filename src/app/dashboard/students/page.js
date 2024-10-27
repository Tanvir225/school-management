import FilterStudents from "@/app/Component/Dashboard/Students/FilterStudents";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

const studentPage = () => {
  return (
    <div className="w-full space-y-3">
      {/* student overview */}
      <section className="h-16 bg-base-100 shadow-sm rounded-lg w-full border-2 border-blue-100 p-2 flex justify-between items-center">
        <h1 className="text-primary font-semibold text-lg">
          Total students : 150
        </h1>
        <Link href={"/dashboard/students/add-student"}>
          <button className="btn btn-primary btn-outline hover:bg-primary hover:text-white">
            <FaPlus size={20}></FaPlus> add student
          </button>
        </Link>
      </section>

      {/* student filter options */}
      <section className="bg-base-100 shadow-sm rounded-lg w-full border-2 border-green-200 h-16 p-3">
        <FilterStudents></FilterStudents>
      </section>
    </div>
  );
};

export default studentPage;
