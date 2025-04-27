import { useState } from "react";

// Custom hook: useFilter
export function useFilter(dataList, callBack) {
  // Store the selected filter query (default "All")
  const [query, setQuery] = useState("All");

  // Filter the data based on the query
  const filteredData = dataList.filter((data) => {
    if (query === "All") return true; // If "All" is selected, show all items
    return callBack(data).includes(query); // Otherwise, filter based on callback
  });

  // Return both the filtered data and the function to update the query
  return [filteredData, setQuery];
}
