import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Landing from './pages/Landing';
import CommingSoon from './pages/Commingsoon';
import NotFound from './pages/Notfound';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>} />
    </Routes>
    <Routes>
      <Route path="/CommingSoon" element={<CommingSoon/>}/>
    </Routes>
    <Routes>
      <Route path="/NotFound" element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>
);

