import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import allReducer from './reducers';
import {Provider} from 'react-redux';
//import counterReducer from './reducers/counter';
const store =createStore(allReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // multple reducer
// const store =createStore(counterReducer);  one reducer


ReactDOM.render(
  <Provider store={store}>
      <App />
      </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


/*


//store-> global store
//action -> increment
const increment = ()=>{
return {
type: 'INCREMENT'
};
};
const decrement = ()=>{
  return {
  type: 'DECREMENT'
  };
  };
//reducer-> action transform one state to next state
const counter= (state=0, action)=>{
  switch(action.type){
    case 'INCREMENT':
    return state +1;
    case 'DECREMENT':
    return state -1;
  }
};
let store= createStore(counter);

//display in console
store.subscribe(()=> console.log(store.getState()));
// dispatch
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
*/