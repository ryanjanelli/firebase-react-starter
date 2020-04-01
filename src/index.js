import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

let firebaseConfig = {

  apiKey: "AIzaSyD2dp1wG_IapcpmWrU6q3FBBmYvZ456CBs",
  authDomain: "fir-react-starter2020.firebaseapp.com",
  databaseURL: "https://fir-react-starter2020.firebaseio.com",
  projectId: "fir-react-starter2020",
  storageBucket: "fir-react-starter2020.appspot.com",
  messagingSenderId: "613077107897",
  appId: "1:613077107897:web:9c92a1ff80d59108854768",
  measurementId: "G-S5T4RNXVSF"

}

firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
