
import React from 'react';
import ReactDOM from 'react-dom/client';
// import Home from './Home';
import reportWebVitals from './reportWebVitals'
import Login from './Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Login/>
      {/* <Home/> */}
  </React.StrictMode>
);
reportWebVitals();

