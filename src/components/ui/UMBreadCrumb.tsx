import Link from "next/link";

import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";

const UMBreadCrumb = ({
  items,
}: {
  items: { label: string; link: string }[];
}) => {
  const bredCrumbItems = [
    {
      title: (
        <Link href={"/"}>
          <HomeOutlined />
        </Link>
      ),
    },
    ...items.map((item: any) => {
      return {
        title: item.link ? (
          <Link href={item.link}>{item.label}</Link>
        ) : (
          <span>{item.label}</span>
        ),
      };
    }),
  ];
  return <Breadcrumb items={bredCrumbItems}></Breadcrumb>;
};

export default UMBreadCrumb;
