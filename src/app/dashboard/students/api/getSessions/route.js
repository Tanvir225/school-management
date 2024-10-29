import { connectDB } from "@/lib/connectDB";



export const GET = async () => {
  try {
    const db = await connectDB();
    const sessionCollection = await db.collection("session");
    const result = await sessionCollection.find().sort({sessionYear:1}).toArray();
    return Response.json(result);
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Something went wrong" });
  }
};


