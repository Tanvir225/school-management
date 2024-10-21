import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions = {
  //CONFIGURE ONE OR MORE AUTHENTICATION PROVIDERS
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },

  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        const { email, password } = credentials;

        if (!email || !password) {
          return null;
        }

        const db = await connectDB();
        const user = await db.collection("users").findOne({ email });
        if (!user) {
          return null;
        }
        const decryptPassword = bcrypt.compareSync(password, user?.password); // true
        if (!decryptPassword) {
          return null;
        }
        return user;
      },
    }),
  ],
  pages: {
    signIn:"/picking/role"
  },
  callbacks: {},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
