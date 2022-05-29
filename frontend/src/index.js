import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));

const cardContent = {
  heading: "Advancing Human Creativity",
  description: "We at HCD@IIITD, focus on finding innovative solutions to challenges one faces every time a new technology is adopted by the masses. ",
  buttonText: "Read News"
}
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App cardContent={cardContent}/>} />
    </Routes>
  </BrowserRouter>

);

