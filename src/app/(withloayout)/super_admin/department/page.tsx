import { Button } from "antd";
import Link from "next/link";

const DepartmentPage = () => {
  return (
    <div>
      <h1>Department page</h1>

      <Link href={"/super_admin/department/create"}>
        <Button type="primary">Create department</Button>
      </Link>
    </div>
  );
};

export default DepartmentPage;
