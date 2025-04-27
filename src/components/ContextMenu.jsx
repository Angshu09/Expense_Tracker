import React from "react";

// ContextMenu component for editing or deleting expense items
export default function ContextMenu({
  expenseItems,
  left,
  top,
  setExpense,
  rowId,
  setEditingRowId,
  setExpenseItems,
}) {
  // If coordinates are not provided, don't render the menu
  if (left == null || top == null) return null;

  return (
    <div
      className="border-2 absolute text-hColor bg-fColor rounded-md p-3 cursor-pointer z-10"
      style={{ left: `${left}px`, top: `${top}px` }}
    >
      {/* Edit option */}
      <div
        className="text-center"
        onClick={() => {
          // Find the selected expense item using rowId
          const { title, category, price } = expenseItems.find(
            (expense) => expense.id === rowId
          );
          // Set the form to edit mode with selected item values
          setEditingRowId(rowId);
          setExpense({ title, category, price });
        }}
      >
        Edit
      </div>

      {/* Delete option */}
      <div
        className="text-center pt-2"
        onClick={() => {
          // Remove the selected expense item from the list
          setExpenseItems((prevItemsList) =>
            prevItemsList.filter((item) => item.id != rowId)
          );
        }}
      >
        Delete
      </div>
    </div>
  );
}
