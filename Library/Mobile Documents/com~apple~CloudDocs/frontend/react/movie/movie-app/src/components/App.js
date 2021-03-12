import React from 'react';
import '../App.css';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {addMovies,setShowFavourites} from '../actions/index';
import {StoreContext,connect} from '../index';
class App extends React.Component {
  componentDidMount()
  {
    // const {store}=this.props;
    // store.subscribe(()=>
    // {
    // this.forceUpdate();
    // })
     this.props.dispatch(addMovies(data));   
  }
  isFavourite=(movie)=>
  {
    // const {store}=this.props;
    const {movies}=this.props;
    var index=movies.favourites.indexOf(movie);
    
    if(index!==-1)
    {
      return true;
    }
    return false; 

  }
  onChangeTab(val)
  {
    this.props.dispatch(setShowFavourites(val));
  }
   render(){
    const {movies}=this.props;
    const {list,showFavourites,favourites}=movies;
    
    const displayMovie=showFavourites?favourites:list;
    console.log(movies,'this is props');
  return (
    <div className="App">
      <Navbar 
      dispatch={this.props.dispatch}
      store={this.props.store}
      />
      <div className='main'>
        <div className='tabs'>
          <div className={`tab ${showFavourites?'':'active-tabs'}`} onClick={()=>this.onChangeTab(false)}>Movies</div>
          <div className={`tab ${showFavourites?'active-tabs':''}`}onClick={()=>this.onChangeTab(true)}>Favourites</div>
        </div>
        <div className='list'>
          {displayMovie.map((movie,index)=>(
            <MovieCard movie={movie} key={`movies-${index}`}  
            dispatch={this.props.dispatch}
            isFavourite={this.isFavourite(movie)}
            />
          ))}
        </div>
        {displayMovie.length===0 ? <div className='no-movies'>No movie to display!!</div>:null}
      </div>
    </div>
  );}
}
// class AppWrapper extends React.Component{
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store)=><App store={store}/>};
//       </StoreContext.Consumer>
//     );
//   }
// }
// class AppWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => <App store={store} />}
//       </StoreContext.Consumer>
//     );
//   }
// }


function callback(state)
{
  return {
    movies:state.movies,
    search:state.search
  }
}
const ConnectedAppComponent=connect(callback)(App);
export default ConnectedAppComponent;
