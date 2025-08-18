import Task from "./Task";

function TaskList({ tasks, handleBackward, handleForward, handleRemove }) {
  return (
    <>
      {tasks.map((task, index) => (
        <Task task={task} key={index} handleBackward={handleBackward} handleForward={handleForward} handleRemove={handleRemove} />
      ))}
    </>
  );
}

export default TaskList;
