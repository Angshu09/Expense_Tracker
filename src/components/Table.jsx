import React, { useState } from "react";
import { useFilter } from "../hooks/useFilter";
import ContextMenu from "./ContextMenu";
import Select from "./Select";

export default function Table({
  expenseItems,
  menuPosition,
  setMenuPosition,
  setExpense,
  setEditingRowId,
  setExpenseItems,
}) {
  // Filtered data and category selection (using custom hook)
  const [filteredData, setQuery] = useFilter(
    expenseItems,
    (data) => data.category
  );

  // Track the row's id where right-click (context menu) is triggered
  const [rowId, setRowId] = useState("");

  // Dynamic sorting callback (initially no sorting)
  const [sortCallback, setSortCallBack] = useState(() => {
    return () => {};
  });

  return (
    <>
      {/* Context Menu that appears on right-click */}
      <ContextMenu
        expenseItems={expenseItems}
        setExpense={setExpense}
        left={menuPosition.left}
        top={menuPosition.top}
        rowId={rowId}
        setEditingRowId={setEditingRowId}
        setExpenseItems={setExpenseItems}
      />

      {/* Table starts */}
      <table className="w-full">
        <thead>
          <tr className="grid grid-cols-3 gap-2 text-xs sm:text-sm lg:text-base text-[#06202B]">
            {/* Title Column */}
            <th className="text-left flex rounded-md items-center p-2 bg-iColor">
              Title
            </th>

            {/* Category Column with Select Dropdown */}
            <th className="bg-iColor rounded-md">
              <Select
                name="category"
                id="category"
                onChange={(e) => setQuery(e.target.value)}
                options={[
                  "All",
                  "Grocery",
                  "Clothes",
                  "Bills",
                  "Education",
                  "Medicine",
                  "Food",
                  "Other",
                ]}
              />
            </th>

            {/* Price Column with Sorting Buttons */}
            <th className="text-left p-2 flex items-center justify-between bg-iColor rounded-md">
              <span>Price</span>
              <div className="flex gap-1 lg:gap-2">
                {/* Sort by ascending price */}
                <i
                  className="fa-solid fa-arrow-up cursor-pointer hover:scale-125 transition-all"
                  onClick={() => {
                    setSortCallBack(() => (a, b) => a.price - b.price);
                  }}
                ></i>

                {/* Sort by descending price */}
                <i
                  className="fa-solid fa-arrow-down cursor-pointer hover:scale-125 transition-all"
                  onClick={() => {
                    setSortCallBack(() => (a, b) => b.price - a.price);
                  }}
                ></i>

                {/* Remove sorting (reset) */}
                <i
                  className="fa-solid fa-rotate cursor-pointer hover:scale-125 transition-all"
                  onClick={() => {
                    setSortCallBack(() => () => {});
                  }}
                ></i>
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          {/* Loop over filtered and sorted data */}
          {filteredData
            .sort(sortCallback)
            .map(({ id, title, category, price }) => (
              <tr
                key={id}
                className="grid grid-cols-3 text-hColor gap-3"
                onContextMenu={(e) => {
                  e.preventDefault();
                  setRowId(id); // Set right-clicked row's id
                  setMenuPosition({ left: e.clientX, top: e.clientY }); // Show context menu
                }}
              >
                <td className="p-1">{title}</td>
                <td className="p-1">{category}</td>
                <td className="p-1">{price}</td>
              </tr>
            ))}
        </tbody>

        {/* Footer showing total price */}
        <tfoot className="border-t-[0.5px]">
          <tr className="grid grid-cols-3 gap-3 text-[#06202B] font-bold">
            <td className="p-1">Total</td>
            <td className="p-1"></td>
            <td className="p-1">
              {filteredData.reduce((acc, ele) => {
                return acc + Number(ele.price);
              }, 0)}
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}
