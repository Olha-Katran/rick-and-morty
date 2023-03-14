import './App.css';
import React, {useState} from 'react';
import { RouterProvider, BrowserRouter, Routes, Route} from 'react-router-dom';
import PrivateRoute from "./privateRoute";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from "./Components/Login/login";
import Main from "./MainComponent";
import {router} from "./router";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
    };

  return (
      <GoogleOAuthProvider clientId="694375466945-jj2vrrreu1t4o3esl51oekia58npf47a.apps.googleusercontent.com">
        <React.StrictMode>
            <RouterProvider router={router}/>
            {/*<BrowserRouter>*/}
            {/*    <Routes>*/}
            {/*        <Route exact path="/login" render={() => <Login onLogin={handleLogin} />} />*/}
            {/*        <PrivateRoute exact path="/" component={Main} isAuthenticated={isAuthenticated} />*/}
            {/*    </Routes>*/}
            {/*</BrowserRouter>*/}
        </React.StrictMode>
      </GoogleOAuthProvider>

  )
}

export default App;
