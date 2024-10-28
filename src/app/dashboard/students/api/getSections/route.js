import { connectDB } from "@/lib/connectDB";



export const GET = async () => {
  try {
    const db = await connectDB();
    const sectionCollection = await db.collection("section");
    const result = await sectionCollection.find().toArray();
    return Response.json(result);
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Something went wrong" });
  }
};


