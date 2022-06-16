import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Landing from './pages/Landing';
import ComingSoon from './pages/Comingsoon';
import NotFound from './pages/Notfound';
import Faculty from './pages/Faculty';
import Academics from './pages/Academics';
import Research from './pages/ResearchLabs';
import Teaching from './pages/TeachingLabs';
import ResearchProj from './pages/ResearchProj';
import ResearchPub from './pages/ResearchPub';
import Contact from './pages/Contactus';
import StudentConduct from './pages/studentConductPolicy';
import Student from './pages/students';
import PHD from './pages/phd';
import Staff from './pages/Staff'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/ComingSoon" element={<ComingSoon/>}/>
      <Route path="/People" element={<Student/>}/>


      <Route path="/Faculty" element={<Faculty/>}/>
      <Route path="/Staff" element={<Staff/>}/>
      <Route path="/Students" element={<ComingSoon/>}/>


      <Route path="/ResearchLabs" element={<Research/>}/>
      <Route path="/TeachingLabs" element={<Teaching/>}/>
      <Route path="/ResearchProjects" element={<ResearchProj/>}/>
      <Route path="/ResearchPublication" element={<ResearchPub/>}/>


      <Route path="/Academics" element={<Academics/>}/>
      <Route path="/PHD" element={<PHD/>}/>
      <Route path="/StudentConduct" element={<StudentConduct/>}/>

      <Route path="/Contactus" element={<Contact/>}/>

      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>
);

