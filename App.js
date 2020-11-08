import React from 'react';
import axios from 'axios';
import Movies from './Movies.js';
import "./App.css"
 class App extends React.Component{

  state = {
    
    isLoading : true,
    movies : []
    
  };

  gatherMovies = async () => {
    const {data : {data : {movies}}} = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=year');
    this.setState({ movies, isLoading : false });
    
  }

  componentDidMount(){
    this.gatherMovies();
  }

  render(){
    const { isLoading, movies } = this.state;
    return (
            <section className="container"> { isLoading 
            ? ( <div className="loading">
                  <span className="loadingText">Loading...</span>
                </div> ) 
            : ( <div className="movies">
                  {movies.map(movie => (
                    <Movies key={movie.id} id={movie.id} title={movie.title}
                     title_english={movie.title_english} year={movie.year} rating={movie.rating}
                     runtime={movie.runtime} summary={movie.summary} genre={movie.genres} language={movie.language} image={movie.medium_cover_image}/>
                  ))}
                </div>
          )}
      </section>
    );
  }
} 

export default App;