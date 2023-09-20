import React from 'react'
import { useFetchSearchResult } from './FetchSearchResult'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Shimmer from '../utils/shimmer_search_list';


const SearchList = () => {
  const { query } = useParams();
  const searchResult= useFetchSearchResult(query);


  if (!searchResult) {
    return (
      <div className="w-full max-w-screen-lg mx-auto mt-20">
        <div className="grid grid-rows-1 sm:grid-rows-2 md:grid-rows-3 lg:grid-rows-4 gap-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <Shimmer key={index} />
          ))}
        </div>
      </div>
    );
  }
  if(searchResult && searchResult.length === 0)
  {
    return <p>There are no movies that matched your query.</p>
  }

  return (
    <div className="w-full max-w-screen-lg mx-auto mt-20">
      <div className="grid grid-rows-1 sm:grid-rows-2 md:grid-rows-3 lg:grid-rows-4 gap-4">
        {searchResult.map((res) => (
         <Link to={`/movie/${res.id}`}> <li key={res.id} className="bg-white rounded-lg shadow-md flex overflow-hidden border border-gray-200">
            <div>
              <img
                src={`https://www.themoviedb.org/t/p/w94_and_h141_bestv2${res.poster_path}`}
                alt={res.title}
                className="w-full h-auto"
              />
            </div>
            <div className="w-2/3 p-4">
              <h3 className="text-lg font-semibold mb-2">{res.title}</h3>
              <p className="text-gray-500">{res.release_date}</p>
              <p className="mt-2 text-sm line-clamp-2">{res.overview}</p>
            </div>
          </li></Link>
        ))}
      </div>
    </div>
  )
}

export default SearchList;
