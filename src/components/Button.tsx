import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({ children, variant = "primary", className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "transition-transform transition-shadow duration-300 ease-out",
        "hover:scale-105 hover:shadow-lg active:scale-95",
        variant === "primary"
          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
          : "border-2 border-purple-500 text-purple-500 bg-white",
        "rounded-full px-6 py-3 font-semibold",
        className
      )}
    >
      {children}
    </button>
  );
}