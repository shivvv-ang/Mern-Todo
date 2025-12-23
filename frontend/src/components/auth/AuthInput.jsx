import { memo } from "react";
const AuthInput = memo(({ label, type = "text", ...props }) => {
    return (
        <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700">
                {label}
            </label>

            <input
                type={type}
                className="
            w-full 
            px-3.5 
            py-2.5 
            text-sm
            rounded-lg 
            border 
            border-gray-200
            bg-white
            placeholder-gray-400
            focus:outline-none 
            focus:ring-2 
            focus:ring-black/80
            focus:border-black
            transition
          "
                {...props}
            />
        </div>
    );
});

export default AuthInput;
  