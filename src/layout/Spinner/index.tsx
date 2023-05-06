import { Spin } from "antd";

const Spinner = ({ visible }: { visible: boolean }) => {
  if (!visible) return null;
  return (
    <div className="spinner-page">
      <Spin size="large" />
    </div>
  );
};

export default Spinner;
