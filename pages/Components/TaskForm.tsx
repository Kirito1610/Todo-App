import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { handleModalState, addNewTasks } from "../../redux/taskhandleSlice";

function TaskForm() {
  const isFormVisibale = useAppSelector(
    (state: RootState) => state.taskManger.isModalVisible
  );
  const dispatch = useAppDispatch();
  const initialForm = { title: "", description: "", priority: "" };
  const [newTask, updateNewTask] = useState<{
    title: string;
    description: string;
    priority: string;
  }>(initialForm);
  const ChangeHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    updateNewTask((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  const submitHanlder = (e: any) => {
    e.preventDefault();
    if (
      newTask.description.length > 1 &&
      newTask.title.length > 1 &&
      newTask.priority.length > 1
    ) {
      dispatch(handleModalState());
      dispatch(addNewTasks(newTask));
      updateNewTask(initialForm);
    }
  };
  return (
    <div
      className={`bg-white z-10 absolute bottom-[70px] shadow-md rounded-md p-4 w-3/5 right-[12%] duration-300 transition-all ease-out origin-bottom-right ${
        isFormVisibale ? "scale-100" : "scale-0"
      }`}
    >
      <form className="w-full flex flex-col gap-2" onSubmit={submitHanlder}>
        <input
          type="text"
          name="title"
          onChange={ChangeHandler}
          value={newTask.title}
          placeholder="Create New task"
          className="w-full bg-[#F5F5F5] text-sm capitalize p-3 outline-none rounded-md"
        />
        <textarea
          rows={2}
          name="description"
          onChange={ChangeHandler}
          value={newTask.description}
          placeholder="Add a description"
          className="w-full text-sm p-3 bg-[#F5F5F5] outline-none rounded-md"
        />
        <div className="flex items-center justify-between">
          <label htmlFor="" className=" flex gap-3 items-center">
            <select
              name="priority"
              id=""
              value={newTask.priority}
              onChange={ChangeHandler}
              className="text-sm flex p-3 outline-none bg-[#F5F5F5] rounded-md"
            >
              <option value="default">Priority *</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </label>
          <button
            type="submit"
            className="bg-[#0D92F4] text-white box-border text-sm p-2 px-4 rounded-md"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
