import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Ap1 from './components/headbase/Ap1';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";

import App from "./components/app";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);




function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return (
      <App />,
       <Provider store={createStoreWithMiddleware(reducers)}>
       </Provider>
      );
        
    }
    return <Ap1 />;
  }
  


ReactDOM.render(<Greeting isLoggedIn={false} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
