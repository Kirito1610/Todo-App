"use client";
import { IoMdAdd } from "react-icons/io";
import { useAppDispatch } from "../../redux/hooks";
import { handleModalState } from "../../redux/taskhandleSlice";
function Addtask() {
  const dispatch = useAppDispatch();
  return (
    <div
      onClick={() => dispatch(handleModalState())}
      className=" z-50 bg-white group cursor-pointer absolute right-[10%] bottom-10 shadow-lg rounded-full p-2"
    >
      <IoMdAdd className=" text-2xl" />
    </div>
  );
}

export default Addtask;
