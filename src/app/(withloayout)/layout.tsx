import Contents from "@/components/ui/Contents";
import SideBar from "@/components/ui/SideBar";
import { Layout } from "antd";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout hasSider>
      <SideBar></SideBar>

      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
