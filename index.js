import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index6.css';
import App8 from './App8';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-jab01pgsp764f8xp.us.auth0.com"
    clientId="YbqnZnmlYLY7gJpkjZLTEy7V6E4dokhV"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App8 />
    </Auth0Provider>,

  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
