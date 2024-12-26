import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  wrapperClass?: string;
  labelClass?: string;
}

const Input = ({
  label,
  error,
  className,
  wrapperClass = "",
  labelClass = "",
  id,
  ...props
}: InputProps) => {
  return (
    <div className={`mb-4 ${wrapperClass}`}>
      {label && (
        <label
          htmlFor={id}
          className={`block text-sm font-semibold text-gray-700 mb-1 ${labelClass}`}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={`border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className} ${
          error ? "border-red-500" : ""
        }`}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
