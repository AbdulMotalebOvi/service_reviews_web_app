import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Services from "../../Pages/Services/Services";
import Main from "../Layout/Main";

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>,
            }
        ]
    }
])