import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Clock from './clock_proj/clock';
import Comment from './Comment/Comment';
import CommentList from './Comment/CommentList';
import Library from './fisrt_proj/Library';
//import Counter1 from './usingHooks/onClick';
import { Counter1, Counter2 } from './usingHooks/onClick';
import Clockstate4 from './usingHooks/ClockState4';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Clockstate4 />
  </React.StrictMode>
);



reportWebVitals();