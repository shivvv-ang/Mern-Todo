import Navbar from "../../components/layout/Navbar";
import TaskCard from "../../components/task/TaskCard"

const mockTasks = [
    {
        id: 1,
        title: "Finish MERN assignment",
        description: "Complete backend APIs and push final code",
        status: "PENDING",
    },
    {
        id: 2,
        title: "Refactor auth flow",
        description: "Clean up token handling and middleware",
        status: "DONE",
    },
];

const TaskDashboard = () => {
    return (
        <>
        <Navbar />
        <div className="min-h-screen bg-[#fafafa] px-4 py-6 sm:px-6 lg:px-12">

           
            <div className="max-w-5xl mx-auto mb-8">
                <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
                    Your tasks
                </h1>
                <p className="text-gray-600 mt-1">
                    Keep track of what you’re working on.
                </p>
            </div>


            <div className="max-w-5xl mx-auto mb-6">
                <input
                    placeholder="Add a new task..."
                    className="
            w-full 
            rounded-xl 
            border 
            border-gray-200 
            px-4 
            py-3
            text-sm
            focus:outline-none
            focus:ring-2
            focus:ring-black
          "
                />
            </div>

          
            <div className="max-w-5xl mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {mockTasks.map(task => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>

        </div>
        </>
    );
};

export default TaskDashboard;
