import { createBrowserRouter } from "react-router-dom";
import Main from "./MainComponent";
import DetailInfo from "./Components/Detail-Info/Detail-info";
import Login from "./Components/Login/login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />
    },
    {
        path: "/detail/:characterId",
        element: <DetailInfo />
    }
])