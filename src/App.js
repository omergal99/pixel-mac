import React from 'react';
import './assets/css/App.scss';

//CMPS
import Header from './cmps/Header';
import Desktop from './cmps/Desktop';
import Dock from './cmps/Dock';

function App() {
  return (
    <div className="App">
      <Header />
      <Desktop />
      <Dock />
    </div>
  );
}

export default App;
