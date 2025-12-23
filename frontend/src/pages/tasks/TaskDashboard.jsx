
import Navbar from "../../components/layout/Navbar.jsx";
import TaskForm from "../../components/task/TaskForm.jsx";
import TaskList from "../../components/task/TaskList.jsx";
import Loader from "../../components/ui/Loader.jsx";
import useTasks from "../../hooks/useTasks.js";
const Dashboard = () => {
    const { tasks, loading, addTask, updateTask, deleteTask } = useTasks();

    if (loading) return <Loader />;

    return (
        <>
         <Navbar/>
            <div className="max-w-3xl mx-auto p-6 space-y-6">
                <TaskForm onSubmit={addTask} />
                <TaskList
                    tasks={tasks}
                    onUpdate={updateTask}
                    onDelete={deleteTask}
                />
            </div>
        </>
    );
};

export default Dashboard;
