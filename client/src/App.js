import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from './Components/LandingPage/LandingPage';
import NavBar from './Components/NavBar/NavBar';
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <div style={{ paddingTop: '10rem'}}></div>
    <Routes>
    <Route path ="/" element = {<LandingPage />} />
    </Routes>

    </BrowserRouter>



  );
}
//auth 사용법,.........
export default App;
