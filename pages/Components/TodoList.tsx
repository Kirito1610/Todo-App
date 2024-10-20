import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import {
  deleteNewTasks,
  updateCompletedTasks,
  updateToPending,
  showTaskDeatils,
  handleDeatilsModalState,
} from "../../redux/taskhandleSlice";
import Task from "./Task";

function TodoList({ TaskList }: { TaskList: any }) {
  const { completedTasks, newTasks, query } = useAppSelector(
    (state: RootState) => state.taskManger
  );
  const dispatch = useAppDispatch();

  const handleTaskCompletionUpdate = (value: string, isChecked: boolean) => {
    isChecked
      ? dispatch(updateCompletedTasks(value))
      : dispatch(updateToPending(value));
  };

  const deleteTaskHandler = (value: string) => {
    dispatch(deleteNewTasks(value));
  };
  const AllTasks = [...(TaskList || []), ...(newTasks || [])];
  const priorityOrder: { [key: string]: number } = {
    High: 1,
    Medium: 2,
    Low: 3,
  };

  const filteredTasks = AllTasks.filter(
    (task: any) =>
      task.title.toLowerCase().includes(query ? query.toLowerCase() : "") ||
      task.description.toLowerCase().includes(query ? query.toLowerCase() : "")
  );
  const SortedArray = filteredTasks.sort((a: any, b: any) => {
    
    const A = completedTasks.includes(a.title)
      ? 4
      : priorityOrder[a.priority];
    const B = completedTasks.includes(b.title)
      ? 4
      : priorityOrder[b.priority];
    return A - B;
  });

  const showTaskDetails = (value: any) => {
    dispatch(showTaskDeatils(value));
  };
  const showModal = () => {
    dispatch(handleDeatilsModalState());
  };
  return (
    <>
      <ul className=" w-full .no-scrollbar overflow-auto relative flex flex-col gap-3 mt-7">
        {SortedArray.map((task: any, index: number) => (
          <Task
            showModal={showModal}
            deleteTaskHandler={deleteTaskHandler}
            showTaskDetails={showTaskDetails}
            completedTasks={completedTasks}
            onchecked={handleTaskCompletionUpdate}
            TaskDetails={task}
            key={task.title}
          />
        ))}
      </ul>
    </>
  );
}
export default TodoList;
