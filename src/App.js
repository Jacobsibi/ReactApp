import  { useEffect }  from 'react';
{/* key: 1d859fa6 */}

//calling API
const API_URL = 'http://www.omdbapi.com?apikey=1d859fa6';

const App = () => {

  //async = asyncronous data (takes time to fetch this data)
  //accepts movie title to search by
  const searchMovies = async (title) => {
    // (``) = template string (backticks)
    // (`${}`) = dynamically specify API_URL & title
    // this will call the API
    const response = await fetch(`${API_URL}&s=${title}`);
    //retrieve data 
    const data = await response.json();
    console.log(data.Search);
  }
  useEffect(() => {
    //call function which will fetch movies
    searchMovies('The Dark Knight');
  }, []);

  return (
    <h1>App</h1>
  );
}

//export every component to be able to call it
export default App;
