import Column from "./Column";
import { STATUSES } from "../data/tasks";
// import { Tasks } from "../data/tasks";
// import { IoIosRadioButtonOff } from "react-icons/io";
// import { IoMdTime } from "react-icons/io";

function Board({ tasks, deleteTask, EditTask, handleEditTask }) {
  return (
    <>
      <div className="w-full max-w-7xl flex flex-wrap gap-6 items-start justify-center p-8 mx-auto">
        {/* <div>I am Board</div> */}
        {STATUSES.map((status) => (
          <Column
            key={status.title}
            title={status.title}
            icon={status.icon}
            tasks={tasks}
            deleteTask={deleteTask}
            EditTask={EditTask}
            handleEditTask={handleEditTask}
          />
        ))}
      </div>
    </>
  );
}

export default Board;
