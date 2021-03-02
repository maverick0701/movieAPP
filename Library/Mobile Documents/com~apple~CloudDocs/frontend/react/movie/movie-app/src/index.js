import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './reducers'
import App from './components/App';

const store=createStore(rootReducer);

ReactDOM.render(
    <App store={store}/>,
  document.getElementById('root')
);


// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'SuperMan'}]
// })
// console.log(store.getState())
// console.log(store.getState());


