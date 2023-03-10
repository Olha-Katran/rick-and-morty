import './App.css';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import Main from "./MainComponent";
import DetailInfo from "./Components/Detail-info";
import {router} from "./router";


function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App;
