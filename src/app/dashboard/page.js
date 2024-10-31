import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);
  // console.log(session,7);

  // Redirect if the user is not an admin or teacher
  if (!session || !["admin", "teacher"].includes(session.user.role)) {
    redirect("/auth");
  }

  return <div>this is dashboard</div>;
};

export default Dashboard;
