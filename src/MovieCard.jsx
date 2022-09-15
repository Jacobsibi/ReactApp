import React from 'react';

//object destructering 
const MovieCard = ({movie1}) => {
  return (
    <div className="movie">
    <div>
      <p>{movie1.Year}</p>
    </div>

    <div>
      {/* Add Extra check to make sure there is an image */}
      {/* 'N/A' is how this API declares movie with no image*/}
      {/* if Poster is not equal to 'N/A' then show poster else placeholder image*/}
      <img src={movie1.Poster !== 'N/A' ? movie1.Poster : "https://via.placeholder.com/400"} alt={movie1.Title}/>
    </div>

    <div>
      <span>{movie1.Type}</span>
      <h3>{movie1.Title}</h3>
    </div>
  </div>
  );
}

export default MovieCard;