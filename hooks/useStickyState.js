import { useEffect, useState } from 'react'

export function useStickyState(defaultValue, key) {
    
    const [value, setValue] = useState(defaultValue);
  
    useEffect(() => {
      // after the first page load,
      // see if our item exists in local storage
      // if so, update state to that value
      const stickyValue = window.localStorage.getItem(key);
  
      if (stickyValue !== null) {
        setValue(JSON.parse(stickyValue));
      }
    }, [key]); // re-fetch if the value of "key" changes
  
    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]); // reset if either key or value changes
  
    return [value, setValue];
  }