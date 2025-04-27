import { useEffect, useState } from "react";

// Custom hook to manage data with localStorage
export function useLocalStorage(key, initialData) {
  // State to hold the data
  const [data, setData] = useState(initialData);

  // On component mount, check if data exists in localStorage
  useEffect(() => {
    const existingData = JSON.parse(localStorage.getItem(key));
    if (existingData) {
      // If found, update the state with existing data
      setData(existingData);
    } else {
      // If not found, initialize localStorage with initial data
      localStorage.setItem(key, JSON.stringify(initialData));
    }
  }, []);

  // Function to update both state and localStorage
  function updateLocalStorage(newData) {
    if (typeof newData === "function") {
      // If newData is a function, execute it with the current state
      localStorage.setItem(key, JSON.stringify(newData(data)));
    } else {
      // Otherwise, store the provided new data directly
      localStorage.setItem(key, JSON.stringify(newData));
    }
    // Update the React state
    setData(newData);
  }

  // Return the current data and the updater function
  return [data, updateLocalStorage];
}
