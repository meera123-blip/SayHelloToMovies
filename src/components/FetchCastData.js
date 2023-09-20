
import { useState,useEffect } from 'react';
import { API_KEY } from '../utils/constants';

export const useFetchCastData = (id) => {
  
    const [result, setResult] = useState(null);

   

    const CAST_DATA_API = 'https://api.themoviedb.org/3/movie/'+id+'/credits?api_key='+API_KEY
 
     useEffect(() =>{
         getCastData();
     },[]);
 
     const getCastData = async () =>
     {
         const data = await fetch(CAST_DATA_API);
         if (!data.ok) {
            throw new Error("Failed to fetch data"); // Throw an error for non-OK responses
          }
         const json = await data.json();
         
         setResult(json);
     }
 
     return result;


}

