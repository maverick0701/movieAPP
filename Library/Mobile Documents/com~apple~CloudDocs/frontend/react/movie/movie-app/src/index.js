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



// export function connect(callback)
// {
//   return function(Component)
//   {
//     class ConnectedComponent extends React.Component
//     {
//       constructor(props)
//       {
//         super(props);
//         this.unsubscribe=this.props.store.subscribe(()=>this.forceUpdate());
//       }
//       componentWillUnmount()
//       {
//         this.unsubscribe();
//       }
//       render()
//       {
//         const {store}=this.props;
//         const state=store.getState();
//         const dataToBePassed=callback(state);
//         return(
//           <Component {...dataToBePassed} dispatch={store.dispatch} />
//         )
//       }
//     }

//     class ConnectedComponentWrapper
//     {
//       render()
//       {
//         return(
//           <StoreContext.Consumer>
//             {(store)=><ConnectedComponent store={store}/>}
//           </StoreContext.Consumer>
//         )
//       }
//     }
//   }
// }
export function connect(callback) {
  return function (Component) {
    class ConnectedComponent extends React.Component {
      constructor(props) {
        super(props);
        this.unsubscribe = this.props.store.subscribe(() => {
          this.forceUpdate();
        });
      }

      componentWillUnmount() {
        this.unsubscribe();
      }
      render() {
        const { store } = this.props;
        const state = store.getState();
        const dataToBeSentAsProps = callback(state);
        console.log(dataToBeSentAsProps);
        return <Component dispatch={store.dispatch} {...dataToBeSentAsProps} />;
      }
    }

    class ConnectedComponentWrapper extends React.Component {
      render() {
        return (
          <StoreContext.Consumer>
            {(store) => {
              return <ConnectedComponent store={store} />;
            }}
          </StoreContext.Consumer>
        );
      }
    }
    return ConnectedComponentWrapper;
  };
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


