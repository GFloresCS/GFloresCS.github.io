import './App.css';
import './Navbar.css';
import './Header.css';
import './AboutMe.css';
import './MyTools.css';
import './MyExperience.css';
import './MyProjects.css';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar.js";
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import MyTools from './components/MyTools';
import MyExperience from './components/MyExperience';
import MyProjects from './components/MyProjects';
import Footer from './components/Footer';
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
        <div><MyProjects /></div>
        <div><Footer /></div>
      </div>
    </div>
  );
}

export default App;
