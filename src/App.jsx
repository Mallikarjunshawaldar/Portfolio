import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Pages from './Pages/Pages';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Pages/>
    </div>
  );
}

export default App;
