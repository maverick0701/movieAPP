import React from 'react';
import {addFavourite,remFavourite} from '../actions/index';
class MovieCard extends React.Component{
    handleFavouriteClick=()=>
        {
           
            const {movie}=this.props;
            this.props.dispatch(addFavourite(movie));
            
        }
    handleUnFavouriteClick=()=>
    {
        const {movie}=this.props;
        this.props.dispatch(remFavourite(movie));
    }
    render()
    {
        
        const {movie,isFavourite}=this.props;
        
        return(
            <div className='movie-card'>
                <div className='left'>
                    <img alt='movieimg' src={movie.Poster} />
                </div>
                <div className='right'>
                    <div className='title'>{movie.Title}</div>
                    <div className='plot'>{movie.plot}</div>
                    <div className='footer'>
                        <div className='rating'>{movie.imdbRating}</div>
                        {!isFavourite &&  <button className='favourite-btn' onClick={this.handleFavouriteClick}>Favourite</button>}
                        {isFavourite &&  <button className='unfavourite-btn' onClick={this.handleUnFavouriteClick}>Remove</button>}
            
                    </div>
                </div>
                
            </div>
    )};
}

export default MovieCard;