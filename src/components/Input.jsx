import React from "react";

// Reusable Input component
export default function Input({
  label,
  id,
  name,
  value,
  type,
  error,
  onChange,
}) {
  return (
    <div className="flex flex-col gap-1 relative">
      {/* Label for the input field */}
      <label className="text-hColor" htmlFor={id}>
        {label}
      </label>

      {/* Error message (displayed on the top right) */}
      <span className="absolute top-0 right-0 text-xs text-hColor">
        {error}
      </span>

      {/* Input field */}
      <input
        className="border-none outline-none rounded-md p-2 bg-iColor"
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
