import getClasses from "@/api/getClasses";
import getSections from "@/api/getSections";
import AdminLoginPage from "@/app/Component/Login/Admin";
import StudentLoginPage from "@/app/Component/Login/Student";
import TeacherLoginPahe from "@/app/Component/Login/Teacher";
import React from "react";

const LoginPage = async({ params }) => {
  const classes = await getClasses()
  const sections = await getSections()

  return (
    <div>
      {params?.role === "admin" ? (
        <AdminLoginPage></AdminLoginPage>
      ) : params?.role === "teacher" ? (
        <TeacherLoginPahe></TeacherLoginPahe>
      ) : (
        <StudentLoginPage classes={classes} sections={sections} ></StudentLoginPage>
      )}
    </div>
  );
};

export default LoginPage;
