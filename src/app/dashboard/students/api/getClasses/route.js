import { connectDB } from "@/lib/connectDB";


export const GET = async () => {
  try {
    const db = await connectDB();
    const classCollection = await db.collection("class");
    const result = await classCollection.find().sort({classNumber:1}).toArray();
    return Response.json(result);
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Something went wrong" });
  }
};


