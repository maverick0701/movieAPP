export const ADD_MOVIES='ADD_MOVIES';//action types
export const ADD_FAVOURITE='ADD_FAVOURITE';
export const REM_FAVOURITE='REM_FAVOURITE';
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