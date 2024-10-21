import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";

export const POST = async (req) => {
  const newUser = await req.json();
  console.log(newUser);

  try {
    const db = await connectDB();
    const userCollection = await db.collection("users");
    const existUser = await userCollection.findOne({ email: newUser.email });
    if (existUser) {
      return Response.json(
        { message: "user is already exist" },
        { status: 400 }
      );
    }
    const hashPassword = bcrypt.hashSync(newUser.password, 10);
    const result = await userCollection.insertOne({
      ...newUser,
      password: hashPassword,
    });

    return Response.json(
      { message: "user save into databse" },
      { status: 200 },
      { result }
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      { message: "something went wrong" },
      { status: 400 },
      { error: error }
    );
  }
};
