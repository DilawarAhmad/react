import React , {useState} from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { RoutesComp } from './components/RoutesComp';


const App = () => {
  const [darkTheme , setDarkTheme] =  useState(false);


  return (
    <div className={darkTheme ? 'dark' : ''}>
        <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          <RoutesComp />
          <Footer />
        </div>
    </div>
    
  );
}

export default App;