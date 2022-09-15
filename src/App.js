import  { useState, useEffect }  from 'react';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';
{/* */}
{/* key: 1d859fa6 */}
//calling API
const API_URL = 'http://www.omdbapi.com?apikey=1d859fa6';

const App = () => {
  //useState, default value of Array
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  //async = asynchronous data (takes time to fetch this data)
  //accepts movie title to search by
  const searchMovies = async (title) => {
    // (``) = template string (backticks)
    // (`${}`) = dynamically specify API_URL & title
    // this will call the API
    const response = await fetch(`${API_URL}&s=${title}`);
    //retrieve data 
    const data = await response.json();
    setMovies(data.Search);
  }
  useEffect(() => {
    //call function which will fetch movies
    searchMovies('The Dark Knight');
  }, []);

  return (
    //begin JSX code for App, className in jsx, class in html
    <div className="app">
      <h1>MovieMania</h1>

      <div className="search">  
        <input 
          placeholder="Search for movies"
          //dynamic search
          value={searchTerm}
          //e = event, onChange allows a search word to be typed in search box
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img 
          src={SearchIcon}
          //every image needs alt tag for screen readers
          alt="search"
          //dynamically re-render our search of movies
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0
        ? (
          <div className="container">
            {/* dynamically mapping over movie array which is fetched using API 
               then taking each individual movie and dynamically passing it as a prop
               to MovieCard */} 
            {movies.map((movie) => (
              <MovieCard movie={movie}/>
            ))}
          </div>
        ) : (
          <div className="empty"> 
            <h2>No movies found</h2>
          </div>
        )}
    </div>
  );
}

//export every component to be able to call it
export default App;
