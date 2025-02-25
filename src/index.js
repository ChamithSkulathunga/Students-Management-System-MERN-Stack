import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Students from './Students';
import StudentView from './StudentView';
import GoalsObjectives from './GoalsObjectives'
import About from './About'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/Students' element={<Students/>} />
      <Route path='/StudentView' element={<StudentView/>} />
      <Route path='/GoalsObjectives' element={<GoalsObjectives/>} />
      <Route path='/About' element={<About/>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
