import { GetSessionParams, getSession, useSession } from "next-auth/react";
import Head from "next/head";
import DashboardContainer from "@/containers/dashboard";

const Dashboard = (): JSX.Element => {
  const { data } = useSession();
  return (
    <>
      <Head>
        <title>Template NextJs</title>
      </Head>
      <DashboardContainer useName={data?.user?.name} />
    </>
  );
};

export const getServerSideProps = async (context: GetSessionParams | undefined) => {
  const session = await getSession(context);

  if (!session)
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };

  return {
    props: {
      session,
    },
  };
};

export default Dashboard;
