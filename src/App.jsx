import { useState, useEffect } from "react";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Lane from "./components/Lane";
import { MIN_LANE } from "./constants";

function App() {
  const [todo, setTodo] = useState(() => JSON.parse(localStorage.getItem("todo")) || []);
  const [inProgress, setInProgress] = useState(() => JSON.parse(localStorage.getItem("inProgress")) || []);
  const [review, setReview] = useState(() => JSON.parse(localStorage.getItem("review")) || []);
  const [completed, setCompleted] = useState(() => JSON.parse(localStorage.getItem("completed")) || []);
  const tasks = [todo, inProgress, review, completed];
  const setTasks = [setTodo, setInProgress, setReview, setCompleted];

  // When state changes, this is called after the initial render and after every update.
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
    localStorage.setItem("inProgress", JSON.stringify(inProgress));
    localStorage.setItem("review", JSON.stringify(review));
    localStorage.setItem("completed", JSON.stringify(completed));
  }, [todo, inProgress, review, completed]);

  // Guaranteed to be called with valid lane values.
  const moveTask = (id, lane, nextLane) => {
    const task = tasks[lane].find((task) => task.id === id);
    const newCurrentLaneTasks = tasks[lane].filter((task) => task.id !== id);
    const newNextLaneTasks = [...tasks[nextLane], { ...task, lane: nextLane }];
    setTasks[lane](newCurrentLaneTasks);
    setTasks[nextLane](newNextLaneTasks);
  };

  // Guaranteed to be called with valid lane value.
  const handleBackward = (id, lane) => {
    moveTask(id, lane, lane - 1);
  };

  // Guaranteed to be called with valid lane value.
  const handleForward = (id, lane) => {
    moveTask(id, lane, lane + 1);
  };

  const handleRemove = (id, lane) => {
    const newCurrentLaneTasks = tasks[lane].filter((task) => task.id !== id);
    setTasks[lane](newCurrentLaneTasks);
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">📋 My Kanban Board</h1>
      <div className="flex w-full space-x-4 justify-between">
        <Lane title="To Do">
          <TaskList tasks={todo} handleBackward={handleBackward} handleForward={handleForward} handleRemove={handleRemove} />
          <TaskForm lane={MIN_LANE} tasks={todo} setTasks={setTodo} />
        </Lane>

        <Lane title="In Progress">
          <TaskList tasks={inProgress} handleBackward={handleBackward} handleForward={handleForward} handleRemove={handleRemove} />
        </Lane>

        <Lane title="Review">
          <TaskList tasks={review} handleBackward={handleBackward} handleForward={handleForward} handleRemove={handleRemove} />
        </Lane>

        <Lane title="Completed">
          <TaskList tasks={completed} handleBackward={handleBackward} handleForward={handleForward} handleRemove={handleRemove} />
        </Lane>
      </div>
    </>
  );
}

export default App;
