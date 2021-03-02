export const ADD_MOVIES='ADD_MOVIES';//action types
export const ADD_FAVOURITE='ADD_FAVOURITE';
export const REM_FAVOURITE='REM_FAVOURITE';
export const  SET_SHOW_FAVOURITES='SET_SHOW_FAVOURITES';
export const  ADD_SEARCH_RESULT='ADD_SEARCH_RESULT';
export function addMovies(movies)//action creators
{
    return {
        type:ADD_MOVIES,
        movies
    }
}


export function addFavourite(movie)//action creators
{
    return {
        type:ADD_FAVOURITE,
        movie
    }
}

export function remFavourite(movie)
{
    return{
        type:REM_FAVOURITE,
        movie
    }
}


export function setShowFavourites(val)
{
    return{
        type:SET_SHOW_FAVOURITES,
        val
    }
}
export function handleSearchResult(movie)
{
    return {
        type:ADD_SEARCH_RESULT,
        movie
    }
}
export function handleMovieSearch(movie)
{
    return function (dispatch){
    const url=`http://www.omdbapi.com/?apiKey=35ac5a60&t=${movie}`;
    fetch(url)
    .then(response=>response.json())
    .then(movie=>{
       dispatch(handleSearchResult(movie));
    })
}
}