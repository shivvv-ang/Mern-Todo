const statusStyles = {
    PENDING: "bg-yellow-100 text-yellow-700",
    DONE: "bg-green-100 text-green-700",
};

const TaskCard = ({ task }) => {
    return (
        <div
            className="
          bg-white 
          rounded-2xl 
          border 
          border-gray-100
          p-5
          shadow-[0_8px_24px_rgba(0,0,0,0.03)]
          hover:shadow-[0_12px_32px_rgba(0,0,0,0.05)]
          transition
        "
        >
            
            <span
                className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full mb-3 ${statusStyles[task.status]}`}
            >
                {task.status}
            </span>

            <h3 className="text-base font-semibold text-gray-900 mb-1">
                {task.title}
            </h3>

            <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                {task.description}
            </p>

            <div className="flex items-center justify-between">
                <button className="text-sm text-gray-500 hover:text-black transition">
                    Edit
                </button>

                <button className="text-sm text-red-500 hover:text-red-600 transition">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TaskCard;
  