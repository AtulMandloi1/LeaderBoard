import logo from './logo.svg';
import './App.css';
import React from 'react';
import Headers from './compoment/Headers'
import Name from './compoment/Name';
import Mainbox from './compoment/Mainbox';
import Baner from './compoment/Baner';
import Footer from './compoment/Footer';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div style={{ height: '100vh' }}>
      <Headers />
      <Name />
      <Mainbox />
      <Baner />
      <Footer />
    </div>
  );
}

export default App;
