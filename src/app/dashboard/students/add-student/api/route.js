import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { connectDB } from "@/lib/connectDB";
import { getServerSession } from "next-auth";

export const POST = async (req) => {
  const newStudent = await req.json();
  //   console.log(newStudent);

  const session = await getServerSession(authOptions);
  // console.log(session,7);

  // Redirect if the user is not an admin or teacher
  if (!session || !["admin", "teacher"].includes(session.user.role)) {
    return Response.json({ message: "forbidden access" }, { status: 403 });
  }

  try {
    const db = await connectDB();
    const newStudentCollection = await db.collection("students");

    const studentExist = await newStudentCollection.findOne({
      studentClass: newStudent?.studentClass,
      studentSection: newStudent?.studentSection,
      roll: newStudent?.roll,
    });

    if (!studentExist) {
      const result = await newStudentCollection.insertOne(newStudent);
      return Response.json({ message: "new student added" }, { status: 200 });
    } else {
      return Response.json(
        { message: "student already exist" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
};
