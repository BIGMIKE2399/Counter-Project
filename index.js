//1) Import React and ReactDOM Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//2) Get a reference to the div w ID root
const el = document.getElementById('root');

//3) Tell React to take control of specific element
const root = ReactDOM.createRoot(el);


//4) Show the component on the screen
root.render(<App />);