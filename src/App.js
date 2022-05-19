import './App.css';
import './Navbar.css';
import './Header.css';
import './AboutMe.css';
import './MyTools.css'
import './MyExperience.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar.js";
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import MyTools from './components/MyTools';
import MyExperience from './components/MyExperience';
import React  from 'react';

function App() {
  return (
    <div>
      <div><Navbar /></div>
      <div><Header /></div>
      <div className="main-body-info">
        <div><AboutMe /></div>
        <div><MyTools /></div>
        <div><MyExperience /></div>
      </div>
    </div>
  );
}

export default App;
