import { ReactElement } from "react";
import { Button, Result } from "antd";
import { useRouter } from "next/router";

const Forbidden = (): JSX.Element => {
  const { push } = useRouter();

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={() => push("/")}>
          Back Home
        </Button>
      }
    />
  );
};

Forbidden.getLayout = (page: ReactElement) => page;

export default Forbidden;
