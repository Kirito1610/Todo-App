"use client";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import {
  editTaskHandler,
  handleDeatilsModalState,
} from "../../redux/taskhandleSlice";

function TaskDetails() {
  const { currentTask, isTaskDetailsVisible } = useAppSelector(
    (state: RootState) => state.taskManger
  );
  const [disabledState, upadateDisableSate] = useState("disable");
  const dispatch = useAppDispatch();
  const [newTask, updateNewTask] = useState<typeof currentTask>(currentTask);
  const ChangeHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    updateNewTask((prevState) => {
      if (prevState === null) {
        return currentTask;
      }
      return { ...prevState, [name]: value };
    });
  };
  const submitHanlder = (e: any) => {
    e.preventDefault();
    dispatch(handleDeatilsModalState());
    if (newTask === null) {
      return updateNewTask(currentTask);
    }
    dispatch(editTaskHandler(newTask));
    upadateDisableSate("disable");
  };

  return (
    <div
      className={`absolute ${
        isTaskDetailsVisible ? "scale-100" : "scale-0"
      } transition-all ease-out duration-300 origin-top rounded-md top-[5%] left-[20%] px-8 p-8 w-3/5 h-max bg-white shadow-lg z-10`}
    >
      <p className="text-xl">Task</p>
      <form
        action=""
        onSubmit={submitHanlder}
        className="flex flex-col w-full gap-4 pt-6"
      >
        <label htmlFor="">
          <p className=" text-lg opacity-70">Title</p>
          {disabledState === "disable" ? (
            <p
              className="w-full accent-[#0D92F4] capitalize p-3"
              onClick={() => upadateDisableSate("able")}
            >
              {currentTask?.title}
            </p>
          ) : (
            <input
              type="text"
              name="title"
              onChange={ChangeHandler}
              value={newTask ? newTask.title : currentTask?.title}
              className="w-full accent-[#0D92F4] outline-none border-b capitalize p-3"
            />
          )}
        </label>
        <label htmlFor="">
          <p className=" text-lg opacity-70">Description</p>
          {disabledState === "disable" ? (
            <p
              className="w-full accent-[#0D92F4] capitalize p-3"
              onClick={() => upadateDisableSate("able")}
            >
              {currentTask?.description}
            </p>
          ) : (
            <textarea
              onChange={ChangeHandler}
              name="description"
              value={newTask ? newTask.description : currentTask?.description}
              className=" w-full border-b bg-[0,0,0] p-3 outline-none"
            />
          )}
        </label>
        <label htmlFor="">
          <p className=" text-lg opacity-70">Priority</p>
          {disabledState === "disable" ? (
            <p className="p-3">{currentTask?.priority}</p>
          ) : (
            <select
              name="priority"
              onChange={ChangeHandler}
              value={newTask ? newTask.priority : currentTask?.priority}
              className="p-3"
              id=""
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          )}
        </label>
        {disabledState === "disable" ? (
          <button
            type="button"
            className=" ml-[90%] bg-[#0D92F4] w-max text-white p-2 px-4 rounded-sm"
            onClick={() => {
              dispatch(handleDeatilsModalState());
              upadateDisableSate("disable");
            }}
          >
            Close
          </button>
        ) : (
          <div className="flex gap-3">
            <button
              type="submit"
              className=" bg-[#0D92F4] w-max text-white p-2 px-4 rounded-sm"
            >
              Save changes
            </button>
            <button
              type="button"
              onClick={() => {
                dispatch(handleDeatilsModalState());
                upadateDisableSate("disable");
              }}
              className=" bg-[#F95454] w-max text-white p-2 px-4 rounded-sm"
            >
              Back
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default TaskDetails;
