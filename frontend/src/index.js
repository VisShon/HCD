import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));

const cardContent = {
  heading: "Advancing Human Creativity",
  description: "We at HCD@IIITD, focus on finding innovative solutions to challenges one faces every time a new technology is adopted by the masses. ",
  buttonText: "Read News"
}
const cardContentT = {
  heading: "The Team",
  description: "This website was Developed by Ambuj Bhaskar Tiwari and Vishnu Shon, Designed by Eshang Shah, Prashasti Singh, Syed Arslan Hasan and Vishnu Shon. ",
  buttonText: "Read News"
}
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App cardContent={cardContent}/>} />
      <Route path="team" element={<App cardContent={cardContentT}/>} />
    </Routes>
  </BrowserRouter>

);

