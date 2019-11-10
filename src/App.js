import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';


const App = () => {
  return (
    <div className={'wrapper'}>
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
};

export default App;