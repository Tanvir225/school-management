import MobileSidebar from "../Component/Dashboard/Sidebar/MobileSidebar";
import Sidebar from "../Component/Dashboard/Sidebar/Sidebar";

const layout = ({ children }) => {
  return (
    <div className="container mx-auto flex lg:items-center  flex-col lg:flex-row">
      <Sidebar></Sidebar>
      <MobileSidebar></MobileSidebar>
      <div className="lg:ml-64 p-5 lg:h-[85vh] h-[80vh] overflow-y-auto w-full">{children}</div>
    </div>
  );
};

export default layout;
