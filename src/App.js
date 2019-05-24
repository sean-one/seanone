import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// page sections
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/footer';

// styling
import './App.css';

library.add(fab, faEnvelope);

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Main />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
