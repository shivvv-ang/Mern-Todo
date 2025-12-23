import { useState } from "react";

const TaskCard = ({ task, onUpdate, onDelete }) => {

    const [isEditing, setIsEditing] = useState(false);

    const [form, setForm] = useState({
        title: task.title,
        description: task.description || "",
    });

    return (
        <div className="border rounded p-4 flex justify-between items-start">
            <div>
                {isEditing ? (
                    <>
                        <input
                            value={form.title}
                            onChange={(e) => setForm({ ...form, title: e.target.value })}
                            className="border px-2 py-1 rounded w-full mb-2"
                        />

                        <textarea
                            value={form.description}
                            onChange={(e) =>
                                setForm({ ...form, description: e.target.value })
                            }
                            className="border px-2 py-1 rounded w-full"
                        />
                    </>
                ):(
                        <>
                            <h3 className={`font-medium ${task.status === "DONE" && "line-through"}`}>
                                {task.title}
                            </h3>
                            {task.description && (
                                <p className="text-sm text-gray-600">{task.description}</p>
                            )}
                        </>
                )}
               
            </div>

            <div className="flex gap-2">
                {isEditing ? (
                    <>
                        <button
                            onClick={() => {
                                onUpdate(task._id, form);
                                setIsEditing(false);
                            }}
                            className="text-sm text-green-600"
                        >
                            Save
                        </button>

                        <button
                            onClick={() => {
                                setForm({
                                    title: task.title,
                                    description: task.description || "",
                                });
                                setIsEditing(false);
                            }}
                            className="text-sm text-gray-500"
                        >
                            Cancel
                        </button>
                    </>
                ) : (
                    <>
                            <button
                                onClick={() => setIsEditing(true)}
                                className="text-sm"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() =>
                                    onUpdate(task._id, {
                                        status: task.status === "DONE" ? "PENDING" : "DONE",
                                    })
                                }
                                className="text-sm"
                            >
                                {task.status === "DONE" ? "Undo" : "Done"}
                            </button>
                            <button
                                onClick={() => onDelete(task._id)}
                                className="text-sm text-red-500"
                            >
                                Delete
                            </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default TaskCard;
  