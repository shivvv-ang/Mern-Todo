
import Navbar from "../../components/layout/Navbar";
import TaskForm from "../../components/task/TaskForm";
import TaskList from "../../components/task/TaskList";
import Loader from "../../components/ui/Loader";
import useTasks from "../../hooks/useTasks";
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
