import TaskCard from "./TaskCard.jsx";
import { memo, useCallback } from "react";

const TaskList = ({ tasks, onUpdate, onDelete }) => {
    const renderTask = useCallback(
        (task) => (
            <TaskCard
                key={task._id}
                task={task}
                onUpdate={onUpdate}
                onDelete={onDelete}
            />
        ),
        [onUpdate, onDelete]
    );

    return <div className="space-y-3">{tasks.map(renderTask)}</div>;
};

export default memo(TaskList);
