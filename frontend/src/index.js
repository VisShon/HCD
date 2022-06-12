import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Landing from './pages/Landing';
import CommingSoon from './pages/Commingsoon';
import NotFound from './pages/Notfound';
import Faculty from './pages/Faculty';
import Academics from './pages/Academics';
import Research from './pages/ResearchLabs';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/CommingSoon" element={<CommingSoon/>}/>
      <Route path="/Faculty" element={<Faculty/>}/>
      <Route path="/Research" element={<Research/>}/>
      <Route path="/Academics" element={<Academics/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Routes>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>
);

