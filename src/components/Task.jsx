import { MIN_LANE, MAX_LANE } from "../constants";

function Task({ task, handleBackward, handleForward, handleRemove }) {
  const colorMap = {
    red: "bg-red-300",
    blue: "bg-blue-300",
    green: "bg-green-300",
    yellow: "bg-yellow-300",
    purple: "bg-purple-300",
  };

  return (
    <div className="bg-gray-50 border border-gray-400 rounded-lg p-2 mb-3">
      <div className="flex justify-between">
        <h3 className="font-semibold">{task.title}</h3>
        <button onClick={() => handleRemove(task.id, task.lane)} className="text-xs cursor-pointer">
          ❌
        </button>
      </div>
      <p className="text-xs text-black-600">
        <span className="font-bold">Category: </span>
        <span className={`${colorMap[task.category_color]} border rounded-full px-1`}>{task.category}</span>
      </p>
      <p className="text-xs text-black-600">
        <span className="font-bold">Priority:</span> {task.priority}
      </p>
      <p className="text-xs mt-2">{task.description}</p>
      <div className="mt-2 flex justify-between">
        {task.lane !== MIN_LANE ? (
          <button
            onClick={() => handleBackward(task.id, task.lane)}
            className="text-xs text-white bg-gray-500 rounded-full px-2 py-1 cursor-pointer hover:bg-blue-600"
          >
            🡰
          </button>
        ) : (
          <div></div>
        )}

        {task.lane !== MAX_LANE ? (
          <button
            onClick={() => handleForward(task.id, task.lane)}
            className="text-xs text-white bg-gray-500 rounded-full px-2 py-1 cursor-pointer hover:bg-blue-600"
          >
            🡲
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Task;
