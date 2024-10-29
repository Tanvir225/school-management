import { connectDB } from "@/lib/connectDB";

export const GET = async (req) => {
  // Extract query parameters using `new URL`
  const { searchParams } = new URL(req.url);

  const studentClass = searchParams.get("studentClass");
  const studentSection = searchParams.get("studentSection");
  const studentSession = searchParams.get("studentSession");

  // Build the query object dynamically
  const query = {
    ...(studentClass && { studentClass: parseInt(studentClass) }),
    ...(studentSection && { studentSection: studentSection }),
    ...(studentSession && { studentSession: parseInt(studentSession) }),
  };

  try {
    const db = await connectDB();
    const studentCollection = await db.collection("students");
    const result = await studentCollection
      .find(query)
      .sort({ admissionDate: -1 })
      .toArray();
    return Response.json(result, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
};
