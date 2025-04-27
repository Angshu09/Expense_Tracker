import React from "react";

// Reusable Select dropdown component
export default function Select({
  label, // Label text for the select input
  id, // ID for linking label and select
  name, // Name attribute for the select input
  value, // Controlled value for the select input
  defaultOption, // Placeholder/default option text
  options, // Array of options to display
  error, // Error message (if any)
  onChange, // Handler function to update value
}) {
  return (
    <div className="flex flex-col gap-1 relative">
      {/* Label for the select */}
      <label className="text-hColor" htmlFor={id}>
        {label}
      </label>

      {/* Display error message if exists */}
      <span className="absolute top-0 right-0 text-xs text-hColor">
        {error}
      </span>

      {/* Select input */}
      <select
        className="w-full border-none outline-none rounded-md p-2 bg-iColor"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      >
        {/* Render default option if provided */}
        {defaultOption && (
          <option hidden value="">
            {defaultOption}
          </option>
        )}

        {/* Render the list of options */}
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
