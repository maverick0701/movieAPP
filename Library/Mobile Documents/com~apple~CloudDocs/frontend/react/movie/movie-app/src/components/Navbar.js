import React from 'react';
import {handleMovieSearch,handleAddMovie} from '../actions'
class Navbar extends React.Component{

    constructor(props)
    {
        super(props)
        this.state={
            showSearchResult:false,
            searchText:'',
            searchMovie:{}
        }
    }
    handleSearch=()=>
    {
        const {searchText}=this.state;
        const {store}=this.props;
        store.subscribe(()=>
        {
            const {search}=store.getState();
            const {result}=search;
            const movie=result;
            this.setState({
                showSearchResult:true,
                searchMovie:movie
            })
        // this.forceUpdate();
        })
        this.props.dispatch(handleMovieSearch(searchText));
    }
    handleChange=(e)=>
    {
        
        this.setState({
            searchText:e.target.value
        })
    }
    handleAddMovieToList=()=>
    {
        const {store}=this.props;
        store.subscribe(()=>
        {
            this.setState({
                showSearchResult:false
            })
        // this.forceUpdate();
        })
        
        this.props.dispatch(handleAddMovie(this.state.searchMovie));
    }
    render()
    {
        const movie=this.state.searchMovie;
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
                    <img alt='movieimg' src={movie.Poster} id='sImg' />
                </div>
                <div className='right'>
                    <div className='title'>{movie.Title}</div>
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