import React from 'react';
import '../App.css';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {addMovies,setShowFavourites} from '../actions/index'
class App extends React.Component {
  componentDidMount()
  {
   
    const {store}=this.props;
    store.subscribe(()=>
    {
      this.forceUpdate();
    })
    store.dispatch(addMovies(data));
    console.log('update',this.props.store.getState());
  
  }
  isFavourite=(movie)=>
  {
    const {store}=this.props;
    const {favourites}=store.getState();
    var index=favourites.indexOf(movie);
    
    if(index!==-1)
    {
      return true;
    }
    return false;

  }
  onChangeTab(val)
  {
    this.props.store.dispatch(setShowFavourites(val));
  }
   render(){
    const {list,showFavourites,favourites}=this.props.store.getState();
    const displayMovie=showFavourites?favourites:list;
  
  return (
    <div className="App">
      <Navbar />
      <div className='main'>
        <div className='tabs'>
          <div className={`tab ${showFavourites?'':'active-tabs'}`} onClick={()=>this.onChangeTab(false)}>Movies</div>
          <div className={`tab ${showFavourites?'active-tabs':''}`}onClick={()=>this.onChangeTab(true)}>Favourites</div>
        </div>
        <div className='list'>
          {displayMovie.map((movie,index)=>(
            <MovieCard movie={movie} key={`movies-${index}`}  
            dispatch={this.props.store.dispatch}
            isFavourite={this.isFavourite(movie)}
            />
          ))}
        </div>
        {displayMovie.length===0 ? <div className='no-movies'>No movie to display!!</div>:null}
      </div>
    </div>
  );}
}

export default App;
