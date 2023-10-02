import UMTable from "@/components/ui/UMTable";
import { Button } from "antd";
import Link from "next/link";

const DepartmentPage = () => {
  return (
    <div>
      <h1>Department List</h1>

      <Link href={"/super_admin/department/create"}>
        <Button type="primary">Create department</Button>
      </Link>
      <UMTable />
    </div>
  );
};

export default DepartmentPage;
