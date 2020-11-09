import { useState, useEffect, useRef } from 'react';

// Hook
export const useDebounce = (value, delay) => {
    // State and setters for debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(
        () => {
            // Update debounced value after delay
            const handler = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);

            // Cancel the timeout if value changes 
            return () => {
                clearTimeout(handler);
            };
        },
        [value, delay] // Only re-call effect if value or delay changes
    );

    return debouncedValue;
}

export const useComponentWillMount = func => {
    const willMount = useRef(true);

    if (willMount.current) {
        func();
    }

    willMount.current = false;
};
