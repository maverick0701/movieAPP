import {combineReducers} from 'redux';
import {ADD_MOVIES,REM_FAVOURITE,SET_SHOW_FAVOURITES,ADD_SEARCH_RESULT,ADD_MOVIE} from '../actions/index';
import {ADD_FAVOURITE} from '../actions/index';

const initialMovieState={
    list:[],
    favourites:[],
    showFavourites:false
}
const initialSearchResult={
    result:{}
}
export  function search(state=initialSearchResult,action)
{
    switch(action.type)
    {
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                result:action.movie
            }
    }
    return state;
}

export  function movies(state=initialMovieState,action)
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
        case ADD_MOVIE:
            return{
                ...state,
                list:[action.movie,...state.list]
            }
        default:
            return state;
    }

    
}


// const initialState={
    
//         movies:initialMovieState,
//         search:initialSearchResult
    
// }
export default combineReducers({
    movies:movies,
    search:search
});
// export default function rootReducer(state=initialState,action)
// {
//     return{
//         movies:movies(state.movies,action),
//         search:search(state.search,action)
//     }
// }


