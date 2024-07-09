import React, {useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ContextProvider from './context/Context';
// import ScrollToTop from './helpers/scrollToTop';


const App = () => {


  return (
    <ContextProvider>
    <main className="pageContainer">
      
      <NavBar />
      <Outlet />
    </main>
    </ContextProvider>
  );
};

export default App;
