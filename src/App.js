import React from 'react';
import './App.css';

// page sections
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/footer';


function App() {
  return (
    <div className="App">
      <div className="backgroundBlock">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
