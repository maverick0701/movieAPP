import React ,{createContext} from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import combineReducers from './reducers';
// import thunk from 'redux-thunk';
import App from './components/App';
const logger=({dispatch,getState})=>(next)=>(action)=>{
    next(action);
}
const thunk=({dispatch,getState})=>(next)=>(action)=>{
  
  if(typeof action=='function')
  {
    action(dispatch);
    return;
  }
  next (action);
}

const store=createStore(combineReducers,applyMiddleware(logger,thunk));

export const StoreContext=createContext();

class Provider extends React.Component{
  render()
  {
    const {store}=this.props;
    return <StoreContext.Provider value={store}>{this.props.children}</StoreContext.Provider>;
  }
}

ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>,
  document.getElementById('root')
);


// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'SuperMan'}]
// })
// console.log(store.getState())
// console.log(store.getState());


