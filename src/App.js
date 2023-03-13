import './App.css';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import {router} from "./router";
import Login from "./login";


function App() {
  return (
      <GoogleOAuthProvider clientId="694375466945-jj2vrrreu1t4o3esl51oekia58npf47a.apps.googleusercontent.com">
        <React.StrictMode>
          <Login />
        </React.StrictMode>
      </GoogleOAuthProvider>

    /*<RouterProvider router={router}/>*/

  )
}

export default App;
