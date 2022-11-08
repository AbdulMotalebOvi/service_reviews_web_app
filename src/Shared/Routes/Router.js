import { createBrowserRouter } from "react-router-dom";
import AllServices from "../../Pages/Home/AllServices/AllServices";
import Home from "../../Pages/Home/Home";
import Details from "../../Pages/ServiceDEtails/Details";
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
                path: '/serviceALl',
                element: <AllServices></AllServices>
            },
            {
                path: '/serviceDetails/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`http://localhost:5000/allServices/${params.id}`)
            }
        ]
    }
])