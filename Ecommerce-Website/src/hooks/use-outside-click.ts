import React, { useEffect } from "react";

// Define a specific callback type that accepts an event
type Callback = (event: MouseEvent | TouchEvent) => void;

export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: Callback // Use the specific Callback type instead of Function
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // Check if the click is outside the referenced element
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      callback(event); // Call the callback with the event
    };

    // Add event listeners for mouse and touch events
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    // Cleanup function to remove event listeners
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};