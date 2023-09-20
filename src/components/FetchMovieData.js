import { useEffect, useState } from "react"

import { API_KEY } from "../utils/constants";


export const useFetchMovieData = (id) =>
{

   const [result, setResult] = useState(null);

   

   const MOVIE_DATA_API = 'https://api.themoviedb.org/3/movie/'+id+'?api_key='+API_KEY





    useEffect(() =>{
        getMovieData();
    },[]);

    const getMovieData = async () =>
    {
        const data = await fetch(MOVIE_DATA_API);
        if (!data.ok) {
            throw new Error("Failed to fetch data"); // Throw an error for non-OK responses
          }
        const json = await data.json();
        setResult(json);
    }

    return result;
}