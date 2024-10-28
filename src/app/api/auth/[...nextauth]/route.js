import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
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
        const { email, password, studentClass, roll, studentSection } =
          credentials;
        let user;
        const db = await connectDB();

        //check for student login

        if (studentClass && roll && studentSection) {
          user = await db.collection("students").findOne({
            studentClass: parseInt(studentClass),
            roll: parseInt(roll),
            studentSection: studentSection,
          });

          if (!user) {
            return null;
          }
        }

        // end student login

        // check for admin and teachers login

        if (email && password) {
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
        }

        // end check admin and teacher login

        if (!user) {
          return Response.json({ message: "user not found" });
        }

        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ account, user }) {
      if (account.provider === "google" || account.provider === "github") {
        // const { name, email, image } = user;
        // console.log(name, email, image);
        user.role = "user";
        try {
          const db = await connectDB();
          const userCollection = db.collection("users");
          const userExist = await userCollection.findOne({
            email: user?.email,
          });
          if (!userExist) {
            const res = await userCollection.insertOne(user);
            return user;
          } else {
            return user;
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        return user;
      }
    },
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
