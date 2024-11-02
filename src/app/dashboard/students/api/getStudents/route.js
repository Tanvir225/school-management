import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { connectDB } from "@/lib/connectDB";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

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

  const session = await getServerSession(authOptions);

  // Return a 403 Forbidden status if session is not valid or user role is "student"
  if (session?.user?.role === "student" || session?.user?.role === "user") {
    return new Response(JSON.stringify({ message: "Forbidden Access" }), {
      status: 403,
      headers: { "Content-Type": "application/json" },
    });
  }

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
