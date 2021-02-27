import {ADD_MOVIES,REM_FAVOURITE} from '../actions/index'
import {ADD_FAVOURITE} from '../actions/index';
const initialMovieState={
    list:[],
    favourites:[]
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

        default:
            return state;
    }

    
}