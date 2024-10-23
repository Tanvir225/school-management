import AdminLoginPage from "@/app/Component/Login/Admin";
import StudentLoginPage from "@/app/Component/Login/Student";
import TeacherLoginPahe from "@/app/Component/Login/Teacher";
import React from "react";

const LoginPage = ({ params }) => {
  return (
    <div>
      {params?.role === "admin" ? (
        <AdminLoginPage></AdminLoginPage>
      ) : params?.role === "teacher" ? (
        <TeacherLoginPahe></TeacherLoginPahe>
      ) : (
        <StudentLoginPage></StudentLoginPage>
      )}
    </div>
  );
};

export default LoginPage;
