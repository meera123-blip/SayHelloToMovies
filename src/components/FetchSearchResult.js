import { useEffect, useState } from "react";
import { API_KEY } from "../utils/constants";

export const useFetchSearchResult = (query) => {
  const [result, setResult] = useState(null);


  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`;

  const fetchSearchSuggestion = async () => {
    
      const data = await fetch(SEARCH_API);
      if (!data.ok) {
        throw new Error("Failed to fetch data"); // Throw an error for non-OK responses
      }
      const json = await data.json();
      setResult(json.results);
      // Set the error state with the error message
    
  };

  useEffect(() => {
    fetchSearchSuggestion();
  }, []);

  return  result; // Return both result and error
};
