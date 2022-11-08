import { createBrowserRouter } from "react-router-dom";
import AllServices from "../../Pages/Home/AllServices/AllServices";
import Home from "../../Pages/Home/Home";
import Details from "../../Pages/ServiceDEtails/Details";
import Services from "../../Pages/Services/Services";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import SignUp from "../Register/SignUp";
import AddService from '../../Pages/AddServices/AddService'
import PrivateRoute from '../PrivateROutes/PrivateRoute'

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
                element: <PrivateRoute><AllServices></AllServices></PrivateRoute>
            },
            {
                path: '/serviceDetails/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/allServices/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <SignUp></SignUp>
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            }
        ]
    }
])