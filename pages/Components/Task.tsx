import { MdDeleteOutline } from "react-icons/md";
import { IoMdExpand } from "react-icons/io";

interface task {
  title: string;
  priority: string;
  description: string;
}

function Task({
  TaskDetails,
  onchecked,
  completedTasks,
  showModal,
  deleteTaskHandler,
  showTaskDetails,
}: {
  showModal: () => void;
  showTaskDetails: (value: task) => void;
  deleteTaskHandler: (value: string) => void;
  completedTasks: string[];
  TaskDetails: task;
  onchecked: (value: string, isChecked: boolean) => void;
}) {
    const completed = Array.isArray(completedTasks) && completedTasks.includes(TaskDetails.title);


  return (
    <li className="bg-white rounded-lg flex flex-wrap h-max md:h-[50px] gap-7 py-5 md:py-2 items-center justify-between px-5 sm:w-full shadow-sm transition-transform duration-1000">
      <div className="flex group gap-4">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => onchecked(TaskDetails.title, e.target.checked)}
          className="peer"
          aria-label={`Mark ${TaskDetails?.title} as completed`}
        />
        <p className='relative peer-checked:opacity-50 before:absolute before:content-[""] before:transition-all before:ease-out before:duration-500 before:w-0 peer-checked:before:w-full before:h-[1.5px] before:top-1/2 capitalize before:bg-black'>
          {TaskDetails?.title}
        </p>
      </div>
      <div className="flex items-center justify-center gap-2">
        {!completed ? (
          <span className="flex items-center gap-2 justify-center bg-[rgba(0,0,0,0.06)] text-[rgba(0,0,0,0.6)] px-3 py-1.5 rounded-md text-sm transition-all ease-out duration-300">
            <div
              className={`w-2 h-2 rounded-full ${
                TaskDetails?.priority === "High"
                  ? "bg-red-600"
                  : TaskDetails?.priority === "Low"
                  ? "bg-green-600"
                  : "bg-yellow-400"
              }`}
            ></div>
            Priority - {TaskDetails?.priority}
          </span>
        ) : (
          <span className="flex items-center gap-2 justify-center bg-[rgba(0,0,0,0.06)] text-[rgba(0,0,0,0.6)] px-3 py-1.5 rounded-md text-sm transition-all ease-out duration-300">
            Completed
          </span>
        )}
        <button
          onClick={() => {
            showTaskDetails(TaskDetails);
            showModal();
          }}
          className="bg-[rgba(0,0,0,0.06)] px-1.5 py-2 hover:bg-[#0D92F4] transition-all ease-out duration-500 group rounded-md"
          aria-label={`Expand details for ${TaskDetails?.title}`}
        >
          <IoMdExpand className="text-sm transition-all ease-out duration-300 group-hover:text-white text-[rgba(0,0,0,0.6)]" />
        </button>
        <button
          onClick={() => deleteTaskHandler(TaskDetails?.title)}
          className="bg-[rgba(0,0,0,0.06)] px-1.5 py-2 hover:bg-red-600 transition-all ease-out duration-500 group rounded-md"
          aria-label={`Delete ${TaskDetails?.title}`}
        >
          <MdDeleteOutline className="text-sm transition-all ease-out duration-300 group-hover:text-white text-[rgba(0,0,0,0.6)]" />
        </button>
      </div>
    </li>
  );
}

export default Task;
