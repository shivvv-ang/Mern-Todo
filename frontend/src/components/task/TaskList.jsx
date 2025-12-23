import TaskCard from "./TaskCard";


const TaskList = ({ tasks, onUpdate, onDelete }) => {
    return (
        <div className="space-y-3">
            {tasks.map((task) => (
                <TaskCard
                    key={task._id}
                    task={task}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default TaskList;
