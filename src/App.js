import React from 'react';
import './App.css';

// page sections
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
