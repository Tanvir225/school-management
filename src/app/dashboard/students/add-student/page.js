import getClasses from "@/api/getClasses";
import getSections from "@/api/getSections";
import getSessions from "@/api/getSessions";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AddStudent from "@/app/Component/Dashboard/Students/AddStudent";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const addStudentPage = async () => {
  const session = await getServerSession(authOptions);
  // console.log(session,7);

  // Redirect if the user is not an admin or teacher
  if (!session || !["admin", "teacher"].includes(session.user.role)) {
    redirect("/auth");
  }
  const classes = await getClasses();
  const sections = await getSections();
  const sessions = await getSessions();

  return (
    <div>
      <AddStudent
        classes={classes}
        sections={sections}
        sessions={sessions}
      ></AddStudent>
    </div>
  );
};

export default addStudentPage;
