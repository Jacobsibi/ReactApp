import React from 'react';

//object destructing  
const MovieCard = ({movie}) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>

      <div>
      {/* - Add Extra check to make sure there is an image 
          - 'N/A' is how this API declares movie with no image
          - if Poster is not equal to 'N/A' then show poster else placeholder image */}
        <img src={movie.Poster !== 'N/A' ? movie.Poster 
         : "https://via.placeholder.com/400"} alt={movie.Title}/>
      </div>

      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
  </div>
  );
}

export default MovieCard;