import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const cardContent = {
  heading: "Advancing Human Creativity",
  description: "We at HCD@IIITD, focus on finding innovative solutions to challenges one faces every time a new technology is adopted by the masses. ",
  buttonText: "Read News"
}
root.render(
  <App cardContent={cardContent}/>
);

