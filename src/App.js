import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

// components
import Header from './components/Header/Header';
import About from './components/About/About';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/footer';
import { Route } from 'react-router-dom';

// styling
import './App.css';

library.add(fab);

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Route path='/' exact component={About} />
        <Route path='/about' component={About} />
        <Route path='/work' component={Work} />
        <Route path='/contact' component={Contact} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
