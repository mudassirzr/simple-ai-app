import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outlined";
  loading?: boolean;
}

const Button = ({
  variant = "primary",
  loading = false,
  className,
  children,
  ...props
}: ButtonProps) => {
  const baseClasses =
    "p-2 rounded-md focus:outline-none focus:ring-2 flex items-center justify-center";
  const variantClasses = {
    primary: "bg-blue-500 text-white focus:ring-blue-500 disabled:bg-blue-300",
    secondary:
      "bg-gray-500 text-white focus:ring-gray-500 disabled:bg-gray-300",
    outlined:
      "border border-gray-500 text-gray-500 focus:ring-gray-500 disabled:border-gray-300 disabled:text-gray-300",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading ? (
        <svg
          className="animate-spin h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
