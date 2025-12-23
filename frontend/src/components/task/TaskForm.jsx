import { useState, useCallback } from "react";

const TaskForm = ({ onSubmit }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            onSubmit({ title, description });
            setTitle("");
            setDescription("");
        },
        [title, description, onSubmit]
    );

    return (
        <form onSubmit={handleSubmit} className="space-y-3">
            <input
                placeholder="Task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border px-3 py-2 rounded"
                required
            />
            <textarea
                placeholder="Description (optional)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border px-3 py-2 rounded"
            />
            <button className="bg-black text-white px-4 py-2 rounded">
                Add Task
            </button>
        </form>
    );
};

export default TaskForm;
