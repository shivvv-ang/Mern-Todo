import { useState, useCallback } from "react";
import toast from "react-hot-toast";

const TaskCard = ({ task, onUpdate, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [form, setForm] = useState({
        title: task.title,
        description: task.description || "",
    });

    const handleFieldChange = useCallback((field, value) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    }, []);

    const handleSave = useCallback(async () => {
        try {
            await onUpdate(task._id, form);
            toast.success("Task updated");
            setIsEditing(false);
        } catch (error) {
            toast.error(error);
        }
    }, [onUpdate, task._id, form]);

    const handleCancel = useCallback(() => {
        setForm({ title: task.title, description: task.description || "" });
        setIsEditing(false);
    }, [task.title, task.description]);

    const toggleEdit = useCallback(() => setIsEditing(true), []);

    const toggleStatus = useCallback(async () => {
        try {
            await onUpdate(task._id, {
                status: task.status === "DONE" ? "PENDING" : "DONE",
            });
            toast.success("Task status updated");
        } catch (error) {
            toast.error(error);
        }
    }, [onUpdate, task._id, task.status]);

    const handleDelete = useCallback(async () => {
        try {
            await onDelete(task._id);
            toast.success("Task deleted");
        } catch (error) {
            toast.error(error);
        }
    }, [onDelete, task._id]);

    return (
        <div className="border rounded p-4 flex justify-between items-start">
            <div>
                {isEditing ? (
                    <>
                        <input
                            value={form.title}
                            onChange={(e) => handleFieldChange("title", e.target.value)}
                            className="border px-2 py-1 rounded w-full mb-2"
                        />
                        <textarea
                            value={form.description}
                            onChange={(e) => handleFieldChange("description", e.target.value)}
                            className="border px-2 py-1 rounded w-full"
                        />
                    </>
                ) : (
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
                        <button onClick={handleSave} className="text-sm text-green-600">Save</button>
                        <button onClick={handleCancel} className="text-sm text-gray-500">Cancel</button>
                    </>
                ) : (
                    <>
                        <button onClick={toggleEdit} className="text-sm">Edit</button>
                        <button onClick={toggleStatus} className="text-sm">
                            {task.status === "DONE" ? "Undo" : "Done"}
                        </button>
                        <button onClick={handleDelete} className="text-sm text-red-500">Delete</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default TaskCard;
