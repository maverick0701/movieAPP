import React from 'react';
import {handleMovieSearch,handleAddMovie} from '../actions'
import {StoreContext,connect} from '../index';
class Navbar extends React.Component{

    constructor(props)
    {
        super(props)
        this.state={
            showSearchResult:false,
            searchText:''
        }
    }
    handleSearch=()=>
    {
        const {searchText}=this.state;
        // const {store}=this.props;
        // store.subscribe(()=>
        // {
        //     const {search}=store.getState();
        //     const {result}=search;
        //     const movie=result;
        //     this.setState({
        //         showSearchResult:true,
        //         searchMovie:movie
        //     })
        // // this.forceUpdate();
        // })
        console.log(this.props.dispatch(handleMovieSearch(searchText)));
        const {search}=this.props;
        const {result}=search;
        const movie=result;
        if(movie)
        {
        this.setState({
                    showSearchResult:true,
                    searchMovie:movie
                })}
    }
    handleChange=(e)=>
    {
        
        this.setState({
            searchText:e.target.value
        })
    }
    handleAddMovieToList=(movie)=>
    {
        // const {store}=this.props;
        // store.subscribe(()=>
        // {
        //     this.setState({
        //         showSearchResult:false
        //     })
        // // this.forceUpdate();
        // })
        
        this.props.dispatch(handleAddMovie(movie));
        this.setState({
                    showSearchResult:false
                })
    }
    render()
    {
        const movie=this.props.search.result;
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
                    <button className='favourite-btn' id='addBtn' onClick={()=>this.handleAddMovieToList(movie)}>Add Movie</button>
                </div>
                
                
            </div>
    }
            </div>
    )};
}

// class NavBarWrapper extends React.Component
// {
//     render()
//     {
//         return(
//             <StoreContext.Consumer>
//                 {(store) => <Navbar  dispatch={this.props.dispatch}/>}
//             </StoreContext.Consumer>
//         )
//     }
// }
function callback(state)
{
  return {
    search:state.search
  }
}
const ConnectedNavComponent=connect(callback)(Navbar);
export default ConnectedNavComponent;


// export default ConnectedNavComponent;