import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import MainContainer from './components/MainContainer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Navigation />
        <MainContainer />
      </div>
    </div>
  );
}

export default App;