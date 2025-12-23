import { memo } from "react";

const AuthForm = memo(({ title, subtitle, onSubmit, children, footer }) => {
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

                {footer && (
                    <div className="mt-6 text-center text-sm text-gray-600">
                        {footer}
                    </div>
                )}
            </div>
        </div>
    );
});

export default AuthForm;
  