import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type initialStateType = {
  taskName: string;
  isModalVisible: boolean;
  isTaskDetailsVisible: boolean;
  completedTasks: Array<string>;
  newTasks: Array<newTasks>;
  currentTask: newTasks | null;
  query: string | null;
};
type newTasks = { title: string; description: string; priority: string };
const initialState: initialStateType = {
  taskName: "",
  isTaskDetailsVisible: false,
  isModalVisible: false,
  completedTasks: [],
  newTasks: [],
  currentTask: null,
  query: null,
};

const taskMangerSlice = createSlice({
  name: "taskManger",
  initialState,
  reducers: {
    updateTaskName: (state, actions: { payload: any; type: string }) => {
      state.taskName = actions.payload;
    },
    handlerSearch: (state, actions: { payload: string; type: string }) => {
      state.query = actions.payload;
    },
    updateCompletedTasks: (state, action: { payload: any; type: string }) => {
      state.completedTasks.push(action.payload);
    },
    updateToPending: (state, action: { payload: any; type: string }) => {
      state.completedTasks = state.completedTasks.filter(
        (task) => task !== action.payload
      );
    },
    handleModalState: (state) => {
      state.isModalVisible = !state.isModalVisible;
    },
    handleDeatilsModalState: (state) => {
      state.isTaskDetailsVisible = !state.isTaskDetailsVisible;
    },
    addNewTasks: (state, action: PayloadAction<newTasks>) => {
      state.newTasks.push(action.payload);
    },
    deleteNewTasks: (state, action: { payload: string }) => {
      state.newTasks = state.newTasks.filter(
        (task) => task.title !== action.payload
      );
    },
    showTaskDeatils: (state, action: { payload: newTasks }) => {
      state.currentTask = action.payload;
    },
    editTaskHandler: (state, action: PayloadAction<newTasks>) => {
      const { title, description, priority } = action.payload;
      const index = state.newTasks.findIndex((task) => task.title === title);
      if (index !== -1) {
        state.newTasks[index] = { title, description, priority };
      }
    },
  },
});

export const {
  handleModalState,
  handlerSearch,
  editTaskHandler,
  handleDeatilsModalState,
  showTaskDeatils,
  deleteNewTasks,
  updateCompletedTasks,
  updateToPending,
  addNewTasks,
} = taskMangerSlice.actions;
export default taskMangerSlice.reducer;
