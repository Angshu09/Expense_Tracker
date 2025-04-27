import React, { useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  // Custom hook to get/set expense items from localStorage
  const [expenseItems, setExpenseItems] = useLocalStorage("expenses", []);

  // Custom hook to get/set single expense form data from localStorage
  const [expense, setExpense] = useLocalStorage("expense", {
    title: "",
    category: "",
    price: "",
  });

  // State to track right-click menu position (for context menu)
  const [menuPosition, setMenuPosition] = useState({ left: null, top: null });

  // Custom hook to get/set the currently editing row's id from localStorage
  const [editingRowId, setEditingRowId] = useLocalStorage("editingRowId", "");

  return (
    // Main container
    <div
      className="py-10"
      onClick={() => {
        // Close context menu if open (when clicking outside)
        if (menuPosition.left) {
          setMenuPosition({ left: null, top: null });
        }
      }}
    >
      {/* Header section */}
      <div className="flex justify-center items-center flex-col gap-3">
        <h1 className="text-5xl font-semibold text-hColor">ExpensePro</h1>
        <p className="text-sm text-hColor">Track Your Expenses like a Pro!</p>
      </div>

      {/* Main content area: Form + Table */}
      <section className="flex flex-col gap-14 md:gap-0 md:flex-row justify-center items-center md:justify-evenly pt-12">
        {/* Left side: Form to add/edit expenses */}
        <div className="p-4 md:p-6 bg-fColor rounded-xl w-[92%] md:w-[45%] ">
          <h2 className="text-hColor text-xl mb-6 font-semibold">
            Add Your Expense
          </h2>
          <Form
            setExpenseItems={setExpenseItems} // Function to update list of expenses
            expense={expense} // Current expense input values
            setExpense={setExpense} // Function to update input values
            editingRowId={editingRowId} // Id of row being edited
            setEditingRowId={setEditingRowId} // Function to set editing row
          />
        </div>

        {/* Right side: Table to list expenses */}
        <div className="p-3 md:p-6 bg-fColor rounded-xl w-[92%] md:w-[45%] ">
          <h2 className="text-hColor text-xl mb-6 font-semibold">
            Your Expenses
          </h2>
          <Table
            expenseItems={expenseItems} // Array of all expenses
            menuPosition={menuPosition} // Context menu position
            setMenuPosition={setMenuPosition} // Set menu position
            setExpense={setExpense} // Prefill form for editing
            setEditingRowId={setEditingRowId} // Set the id for editing
            setExpenseItems={setExpenseItems} // Update the list after delete/edit
          />
        </div>
      </section>
    </div>
  );
}

export default App;
