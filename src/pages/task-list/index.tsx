import Head from "next/head";
// import { useMutation } from "react-query";
import TaskListContainer from "@/containers/task-list";

const Task = () => {
  // const { mutate } = useMutation();

  return (
    <>
      <Head>
        <title>Lista de Tareas</title>
      </Head>
      <TaskListContainer />
    </>
  );
};

export default Task;
