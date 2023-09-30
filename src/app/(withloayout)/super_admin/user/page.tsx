import { Button } from "antd";
import Link from "next/link";
const UserPage = () => {
  return (
    <div>
      <h1>User page</h1>
      <Link href={"/super_admin/user/create"}>
        <Button type="primary">Create user</Button>
      </Link>
    </div>
  );
};

export default UserPage;
