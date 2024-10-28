import { connectDB } from "@/lib/connectDB";

export const POST = async (req) => {
  const newStudent = await req.json();
  //   console.log(newStudent);
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
