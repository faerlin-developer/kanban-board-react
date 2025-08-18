import { useState } from "react";
import TextInput from "./inputs/TextInput";
import SelectInput from "./inputs/SelectInput";
import TextAreaInput from "./inputs/TextAreaInput";

function createIdGenerator() {
  let current = 0;
  return function () {
    return current++;
  };
}

const getId = createIdGenerator();

function TaskForm({ lane, tasks, setTasks }) {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    category_color: "green",
    priority: "🟠 Medium",
    description: "",
  });

  const handleChange = (event) => {
    let key = event.target.name;
    let value = event.target.value;
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const task = { id: getId(), lane: lane, ...formData };
    setTasks([...tasks, task]);
    setFormData({
      title: "",
      category: "",
      category_color: "green",
      priority: "🟠 Medium",
      description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 border border-gray-400 rounded-lg p-2">
      <h3 className="font-semibold mb-2">New Task</h3>

      <TextInput label="Title" name="title" value={formData.title} onChange={handleChange} required />
      <TextInput label="Category" name="category" value={formData.category} onChange={handleChange} required />
      <SelectInput
        label=""
        name="category_color"
        value={formData.category_color}
        onChange={handleChange}
        options={[
          { value: "red", label: "🟥 Red" },
          { value: "green", label: "🟩 Green" },
          { value: "yellow", label: "🟨 Yellow" },
          { value: "blue", label: "🟦 Blue" },
          { value: "orange", label: "🟧 Orange" },
          { value: "purple", label: "🟪 Purple" },
        ]}
      />
      <SelectInput
        label="Priority"
        name="priority"
        value={formData.priority}
        onChange={handleChange}
        options={[
          { value: "🟢 Low", label: "🟢 Low" },
          { value: "🟠 Medium", label: "🟠 Medium" },
          { value: "🔴 High", label: "🔴 High" },
        ]}
      />
      <TextAreaInput label="Description" name="description" value={formData.description} onChange={handleChange} required />
      <button className="border rounded-full w-full bg-blue-500 text-white px-1 py-1 text-sm cursor-pointer hover:bg-blue-600">Add Task</button>
    </form>
  );
}

export default TaskForm;
