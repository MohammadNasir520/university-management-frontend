import { Button } from "antd";
import Link from "next/link";

const MangeFacultyPage = () => {
  return (
    <div>
      <h1>faculty List</h1>

      <Link href={"/super_admin/manage-faculty/create"}>
        <Button type="primary">Create Student</Button>
      </Link>
    </div>
  );
};

export default MangeFacultyPage;
