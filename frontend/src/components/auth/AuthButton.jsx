const AuthButton = ({ children, ...props }) => {
    return (
        <button
            className="
          w-full
          bg-black 
          text-white 
          py-2.5
          rounded-lg
          text-sm
          font-medium
          hover:bg-gray-900
          active:scale-[0.98]
          transition
          disabled:opacity-60
          disabled:cursor-not-allowed
        "
            {...props}
        >
            {children}
        </button>
    );
};

export default AuthButton;
  