import MovieDetails from "./components/MovieDetails";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { useState,useEffect } from "react";

function App() {

  const [movies, setMovies] = useState([])

    useEffect(()=>{
      const fetchMovies = async () => {
        try {
          const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
          if (!response.ok) {
            console.log('Error-Unable to fetch movies');
          } else {
            const json = await response.json();
            setMovies(json);
          }
        } catch (error) {
          console.error('Error fetching movies:', error);
        }
      }
        fetchMovies()
    },[])

  return (
    <div className="App">
      <Router>
        <Navbar/>
          <div className="pages">
            <Routes>
              <Route 
                path='/'
                element={<Home movies={movies}/>}
              />
              <Route 
                path='/:id'
                element={<MovieDetails movies={movies}/>}
              />
            </Routes>
          </div>
      </Router>
    </div>
  );
}

export default App;
