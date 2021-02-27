import {ADD_MOVIES,REM_FAVOURITE,SET_SHOW_FAVOURITES} from '../actions/index'
import {ADD_FAVOURITE} from '../actions/index';
const initialMovieState={
    list:[],
    favourites:[],
    showFavourites:false
}


export default function movies(state=initialMovieState,action)
{
    switch(action.type){
        case ADD_MOVIES:
        return {
            ...state,
            list:action.movies
        }
        case ADD_FAVOURITE:
           
            return{
                ...state,
                favourites:[action.movie,...state.favourites]
            }
        case REM_FAVOURITE:
            const filteredArray=state.favourites.filter(movie=>
                movie.Title!==action.movie.Title
                );
            return{
                ...state,
                favourites:filteredArray
            }
        case SET_SHOW_FAVOURITES:
            return{
                ...state,
                showFavourites:action.val
            }

        default:
            return state;
    }

    
}