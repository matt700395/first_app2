import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Clock from './clock_proj/clock';
import Comment from './Comment/Comment';
import CommentList from './Comment/CommentList';

const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(()=>{
  root.render(
    <React.StrictMode>
      <CommentList />
    </React.StrictMode>
  );
})









{/*
root.render(
  <React.StrictMode>
    <Library />
  </React.StrictMode>
);

*/}

reportWebVitals();