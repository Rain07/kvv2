import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Ap1 from './components/headbase/Ap1';
import * as serviceWorker from './serviceWorker';

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <App />;
    }
    return <Ap1 />;
  }
  


ReactDOM.render(<Greeting isLoggedIn={false} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
