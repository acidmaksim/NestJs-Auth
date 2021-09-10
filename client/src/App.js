import React, { useEffect, useMemo,  useState } from 'react'
import {BrowserRouter} from 'react-router-dom'
import Posts from './pages/Posts';
import './styles/App.css'


function App() {


  return (
    <BrowserRouter>
    <Posts />
    </BrowserRouter>
  );
}

export default App;
