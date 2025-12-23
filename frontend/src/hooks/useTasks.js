import { useEffect, useState } from "react";
import * as taskApi from "../api/task.api";

const useTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchTasks = async () => {
        const res = await taskApi.getTasks();
        setTasks(res.data.data);
        setLoading(false);
    };

    const addTask = async (task) => {
        const res = await taskApi.createTask(task);
        setTasks((prev) => [res.data.data, ...prev]);
    };

    const updateTask = async (id, updates) => {
        const res = await taskApi.updateTask(id, updates);
        setTasks((prev) =>
            prev.map((t) => (t._id === id ? res.data.data : t))
        );
    };

    const deleteTask = async (id) => {
        await taskApi.deleteTask(id);
        setTasks((prev) => prev.filter((t) => t._id !== id));
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return { tasks, loading, addTask, updateTask, deleteTask };
};

export default useTasks;
