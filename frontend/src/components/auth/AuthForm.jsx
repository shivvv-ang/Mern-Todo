const AuthForm = ({ title, subtitle, onSubmit, children }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f9f9f9] px-4">
            <div
                className="
            w-full 
            max-w-sm 
            sm:max-w-md 
            lg:max-w-lg
            bg-white 
            p-6 
            sm:p-8 
            rounded-2xl 
            shadow-[0_10px_30px_rgba(0,0,0,0.04)]
          "
            >
                <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-2">
                    {title}
                </h1>

                <p className="text-sm sm:text-base text-gray-600 mb-6">
                    {subtitle}
                </p>

                <form onSubmit={onSubmit} className="space-y-5">
                    {children}
                </form>
            </div>
        </div>
    );
};

export default AuthForm;
  