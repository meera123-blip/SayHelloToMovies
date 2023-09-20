import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchMovieData } from './FetchMovieData';
import { useFetchCastData } from './FetchCastData';
import ShimmerUi from '../utils/shimmer_overview_page';

const MovieOverView = () => {
  const { id } = useParams();
  const movieData = useFetchMovieData(id);
  const cast = useFetchCastData(id);

  const getDirectorsAndWriters = (crew, job) => {
    const filteredCrew = crew.filter((member) => member.job === job);
    return filteredCrew.map((member) => member.name).join(', ');
  };

  if (!movieData || !cast) {
    return <ShimmerUi/>; // Return a loading indicator while data is loading
  }

  return (
    <div className="bg-gradient-to-r from-emerald-800 to-teal-900 p-4 md:p-8 lg:p-12 xl:p-16 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          <img
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movieData.poster_path}`}
            alt={movieData.title}
            className="rounded-lg shadow-lg max-h-60 md:max-h-full"
          />
        </div>
        <div>
          <div className="text-3xl font-bold mb-4">{movieData.title}</div>
          <div className="flex flex-wrap space-y-2 md:space-y-0 md:space-x-4 mb-4">
            <div className="flex items-center">
              <span className="text-gray-300">{movieData.original_language}</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-300">{movieData.release_date}</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-300">
                {movieData.genres.map((genre) => genre.name).join(', ')}
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-300">
                {`${Math.floor(movieData.runtime / 60)} h ${movieData.runtime % 60} m`}
              </span>
            </div>
          </div>
          <div className="text-2xl font-bold mb-4">
            {Math.floor((movieData.vote_average / 10) * 100)}%
            <span className="text-gray-300 ml-2">User Score</span>
          </div>
          <div className="italic mb-4">{movieData.tagline}</div>
          <div>{movieData.overview}</div>
          <div className="mb-4">
            <div className="font-bold">Directors:</div>
            <div>{getDirectorsAndWriters(cast.crew, 'Director')}</div>
          </div>
          <div>
            <div className="font-bold">Writers:</div>
            <div>{getDirectorsAndWriters(cast.crew, 'Writer')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieOverView;
