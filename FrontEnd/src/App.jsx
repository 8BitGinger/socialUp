import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <main className="pageContainer">
      <NavBar />
      <Outlet />
    </main>
  );
};

export default App;
