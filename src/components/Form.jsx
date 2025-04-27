import React, { useState } from "react";
import Input from "./Input";
import Select from "./Select";

// Form component to add or edit expense items
export default function Form({
  setExpenseItems,
  expense,
  setExpense,
  editingRowId,
  setEditingRowId,
}) {
  const [error, setError] = useState({}); // State to hold validation errors

  // Validation rules for form fields
  const validationConfig = {
    title: [
      { required: true, errorMessage: "Title is required" },
      { minLength: true, errorMessage: "At least 3 characters required" },
    ],
    category: [{ required: true, errorMessage: "Category is required" }],
    price: [
      { required: true, errorMessage: "Price is required" },
      { isNumber: true, errorMessage: "Enter a number" },
      { minPrice: true, errorMessage: "Your price must be 1 or greater" },
    ],
  };

  // Validate input fields based on rules
  function validate(data) {
    const errorData = {};

    Object.entries(data).forEach(([key, value]) => {
      validationConfig[key].some((rule) => {
        if (rule.required && !value) {
          errorData[key] = rule.errorMessage;
          return true;
        }
        if (rule.minLength && value.length < 3) {
          errorData[key] = rule.errorMessage;
          return true;
        }
        if (rule.isNumber && isNaN(value)) {
          errorData[key] = rule.errorMessage;
          return true;
        }
        if (rule.minPrice && Number(value) < 1) {
          errorData[key] = rule.errorMessage;
          return true;
        }
      });
    });

    setError(errorData); // Set errors if any
    return errorData; // Return error object
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();

    const result = validate(expense); // Validate form fields
    if (Object.keys(result).length) {
      return; // Stop submission if validation fails
    }

    if (editingRowId) {
      // Update existing item
      setExpenseItems((prevItemsList) =>
        prevItemsList.map((item) => {
          if (item.id === editingRowId) {
            return { id: editingRowId, ...expense };
          }
          return item;
        })
      );
      setEditingRowId(""); // Reset editing state
    } else {
      // Add new item
      setExpenseItems((prev) => [
        ...prev,
        { id: crypto.randomUUID(), ...expense },
      ]);
    }

    // Reset form fields
    setExpense({
      title: "",
      category: "",
      price: "",
    });
  }

  // Handle input changes
  function handleChange(e) {
    const { name, value } = e.target;

    setExpense((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError({}); // Clear errors while typing
  }

  // Render form UI
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      {/* Title Field */}
      <Input
        label={"Title"}
        id={"title"}
        name={"title"}
        value={expense.title}
        type={"text"}
        error={error.title}
        onChange={handleChange}
      />

      {/* Category Dropdown */}
      <Select
        label={"Category"}
        id={"category"}
        name={"category"}
        value={expense.category}
        defaultOption={"Select Category"}
        options={[
          "Grocery",
          "Clothes",
          "Bills",
          "Education",
          "Medicine",
          "Food",
          "Other",
        ]}
        error={error.category}
        onChange={handleChange}
      />

      {/* Price Field */}
      <Input
        label={"Price"}
        id={"price"}
        name={"price"}
        value={expense.price}
        type={"text"}
        error={error.price}
        onChange={handleChange}
      />

      {/* Submit Button */}
      <button className="bg-[#06202B] text-hColor p-3 w-full md:w-1/3 rounded-md font-semibold">
        {editingRowId ? "Save" : "Add"}
      </button>
    </form>
  );
}
