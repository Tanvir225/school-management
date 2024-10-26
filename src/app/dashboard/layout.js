import Sidebar from "../Component/Dashboard/Sidebar/Sidebar";

const layout = ({ children }) => {
  return (
    <div className="container mx-auto flex items-center gap-2">
      <Sidebar></Sidebar>
      <div className="ml-64 px-2 h-[85vh] overflow-y-auto">{children}</div>
    </div>
  );
};

export default layout;
