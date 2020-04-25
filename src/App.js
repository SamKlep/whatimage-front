import React from 'react';
import './App.css';
import Classifier from './components/Classifier/Classifier';
import Navigation from './components/Navigation/Navigation'
import ImageList from './components/imageList/ImageList';

function App() {
  return (
    <div className='App'>
      <Navigation />
      {/* <Classifier /> */}
      <ImageList />
    </div>
  );
}

export default App;
