import React from 'react';
import {handleMovieSearch,handleAddMovie} from '../actions'
class Navbar extends React.Component{

    constructor(props)
    {
        super(props)
        this.state={
            showSearchResult:true,
            searchText:''
        }
    }
    handleSearch=()=>
    {
        const {searchText}=this.state;
        this.props.dispatch(handleMovieSearch(searchText));
        const {store}=this.props;
        console.log(store.getState().search.result)
    }
    handleChange=(e)=>
    {
        
        this.setState({
            searchText:e.target.value
        })
    }
    handleAddMovieToList=()=>
    {
        const movie=
            {
                "Title": "Mission: Impossible",
                "Year": "1996",
                "Rated": "PG-13",
                "Released": "22 May 1996",
                "Runtime": "110 min",
                "Genre": "Action, Adventure, Thriller",
                "Director": "Brian De Palma",
                "Writer": "Bruce Geller (television series), David Koepp (story), Steven Zaillian (story), David Koepp (screenplay), Robert Towne (screenplay)",
                "Actors": "Tom Cruise, Jon Voight, Emmanuelle Béart, Henry Czerny",
                "Plot": "An American agent, under false suspicion of disloyalty, must discover and expose the real spy without the help of his organization.",
                "Language": "English, French, Czech",
                "Country": "USA",
                "Awards": "3 wins & 17 nominations.",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTc3NjI2MjU0Nl5BMl5BanBnXkFtZTgwNDk3ODYxMTE@._V1_SX300.jpg",
                "Ratings": [
                    {
                        "Source": "Internet Movie Database",
                        "Value": "7.1/10"
                    },
                    {
                        "Source": "Rotten Tomatoes",
                        "Value": "64%"
                    },
                    {
                        "Source": "Metacritic",
                        "Value": "59/100"
                    }
                ],
                "Metascore": "59",
                "imdbRating": "7.1",
                "imdbVotes": "388,929",
                "imdbID": "tt0117060",
                "Type": "movie",
                "DVD": "01 Aug 2013",
                "BoxOffice": "$180,981,856",
                "Production": "Paramount Pictures, Cruise-Wagner Productions",
                "Website": "N/A",
                "Response": "True"
            };
        this.props.dispatch(handleAddMovie(movie));
        this.setState({
            showSearchResult:false
        })
    }
    render()
    {
        const searchResult=this.props.store.getState().search.result;
        const showSearchResult=this.state.showSearchResult;
        return(
            <div className='nav'>
                <div className='search-container'>
                    <input onChange={this.handleChange}/>
                    <button id='search-btn' onClick={this.handleSearch}>Search</button>
                </div>
                {showSearchResult&&
                <div className='movie-card' id='searchRes'>
                <div className='left'>
                    <img alt='movieimg' src='https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg' id='sImg' />
                </div>
                <div className='right'>
                    <div className='title'>Avenger</div>
                    <div className='plot'></div>
                    <div className='footer'>
                        <div className='rating'></div>
                    </div>
                    <button className='favourite-btn' id='addBtn' onClick={this.handleAddMovieToList}>Add Movie</button>
                </div>
                
                
            </div>
    }
            </div>
    )};
}

export default Navbar;