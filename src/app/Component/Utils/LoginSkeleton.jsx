const LoginSkeleton = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      <div className="skeleton h-10 w-10 shrink-0 rounded-full"></div>
      <div className="skeleton h-4 w-16"></div>
    </div>
  );
};

export default LoginSkeleton;
