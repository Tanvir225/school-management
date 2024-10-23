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
        let user;

        if (!email || !password) {
          return null;
        }

        const db = await connectDB();

        // check for admin and teachers login

        user = await db.collection("users").findOne({ email: email });
        if (!user) {
          user = await db.collection("teachers").findOne({ email: email });
          if (!user) {
            return null;
          }
        }
        const decryptPassword = bcrypt.compareSync(password, user?.password); // true
        if (!decryptPassword) {
          return null;
        }

        // end check admin and teacher login

        //check for student login

        if (credentials.studentClass && credentials.roll) {
          user = await db.collection("students").findOne({
            class: credentials.studentClass,
            roll: parseInt(credentials.roll),
          });
        }

        if (!user) {
          return Response.json({ message: "user not found" });
        }

        return user;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
