import React, { useEffect, useMemo,  useState } from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import { AuthContext } from './components/context';
import Navbar from './components/Navbar/Navbar';
import AppRouter from './components/UI/AppRouter';
import About from './pages/About';
import Error from './pages/Error';
import Posts from './pages/Posts';
import './styles/App.css'


function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    if( localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setLoading(false);
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth, 
      setIsAuth,
      setLoading
    }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
