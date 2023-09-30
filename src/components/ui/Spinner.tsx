import { Space, Spin } from "antd";

const Spinner = () => {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Space style={{ display: "grid", placeItems: "center", height: "100vh" }}>
        <Spin tip="Loading" size="large">
          <div className="content" />
        </Spin>
      </Space>
    </Space>
  );
};

export default Spinner;
