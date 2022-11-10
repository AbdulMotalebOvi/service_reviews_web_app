import { createBrowserRouter } from "react-router-dom";
import AllServices from "../../Pages/Home/AllServices/AllServices";
import Home from "../../Pages/Home/Home";
import Details from "../../Pages/ServiceDEtails/Details";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import SignUp from "../Register/SignUp";
import AddService from '../../Pages/AddServices/AddService'
import PrivateRoute from '../PrivateROutes/PrivateRoute'
import UserReviews from "../../Pages/UserReviews/UserReviews";
import Blogs from "../../Pages/Blogs/Blogs";

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
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({ params }) => fetch(`https://service-reviews-joyw3uijb-brightslife.vercel.app/allServices/${params.id}`)
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
            },
            {
                path: '/userReviews',
                element: <UserReviews></UserReviews>
            },

            {
                path: '/blog',
                element: <Blogs></Blogs>
            }
        ]
    }
])