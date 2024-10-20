import React from "react";
import { IoSearch } from "react-icons/io5";
import { useAppDispatch } from "../../redux/hooks";
import { handlerSearch } from "../../redux/taskhandleSlice";
function Search() {
  const dispatch = useAppDispatch();
  return (
    <div className=" relative">
      <input
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(handlerSearch(e.target.value))
        }
        className=" p-2 text-sm rounded-md  px-4 border w-[250px]"
        placeholder="Search Your Task here.."
      />
      <IoSearch className=" absolute top-2.5 right-3" />
    </div>
  );
}

export default Search;
