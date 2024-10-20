import React from "react";
import User from "./Components/User";
import TodoList from "./Components/TodoList";
import path from "path";
import fs from "fs";
import Addtask from "./Components/Addtask";
import TaskForm from "./Components/TaskForm";
import TaskDetails from "./Components/TaskDetails";
import Search from "./Components/Search";
import Head from 'next/head';

function Index({ Initialtasks }: { Initialtasks: any }) {
  return (
    <>
    <Head>
        <title>Todo List App</title>
        <meta name="description" content="Manage your tasks efficiently with this simple and intuitive Todo List application." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="bg-[#F5F5F7] overflow-hidden">
      <div className=" max-w-7xl relative flex items-center justify-center h-[100vh] mx-auto">
        <div className=" w-4/5 rounded-lg flex items-start justify-start gap-5 flex-col mx-auto h-[90vh]">
          <div className=" flex flex-wrap gap-4 items-center justify-between w-full">
            <User />
            <p className=" text-3xl font-semibold opacity-80">Todo List</p>
            <Search />
          </div>
          <TodoList TaskList={Initialtasks} />
          <Addtask />
          <TaskForm />
          <TaskDetails />
        </div>
      </div>
    </div>
    </>
  );
}

export default Index;

export const getServerSideProps = async () => {
    try {
      const filePath = path.join(process.cwd(), "initialtask.json");
      const jsonData = fs.readFileSync(filePath, "utf-8");
      const initialtasks = JSON.parse(jsonData);
      const Initialtasks = Array.isArray(initialtasks.TaskList) ? initialtasks.TaskList : [];
      return { props: { Initialtasks } };
    } catch (error) {
      console.error(error);
      return { props: { initialtasks: [] } }; // fallback in case of error
    }
  };