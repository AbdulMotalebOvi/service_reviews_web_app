import React, { useContext, useState } from 'react';
import animate from "../../animations/72874-user-profile-v2.json"
import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthUseContext } from '../Context/UseAuthContext';
import toast from 'react-hot-toast';
import useTitle from '../../Hooks/useTitle';

const Login = () => {
    const { signIn } = useContext(AuthUseContext);

    const [password, setErrorpassword] = useState('')
    useTitle('Login')

    const navigate = useNavigate()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const logIn = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        signIn(email, password)
            .then(result => {
                const user = result.user
                const currentUser = {
                    email: user.email
                }
                toast.success('Login Successful')
                form.reset()
                fetch('https://service-reviews.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('token', data.token)
                        navigate(from, { replace: true });
                    })

            })
            .catch(error => {
                const errorMessage = error.message;
                setErrorpassword(errorMessage);
            })
    }
    return (
        <div className='max-w-screen-xl mx-auto flex lg:flex-row  flex-col items-center justify-center'>
            <Lottie className='w-1/3' animationData={animate} loop={true} />
            <div className="px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg">
                    <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                        Please Log In Now!
                    </h1>

                    <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                        You can force everyone in your organization to sign in or just specific users
                    </p>

                    <form onSubmit={logIn} className="mt-6 mb-0 space-y-4 rounded-lg p-8 border">
                        <p className="text-lg font-medium">Sign in to your account</p>

                        <div>
                            <label for="email" className="text-sm font-medium">Email</label>

                            <div className="relative mt-1">
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter email"
                                />

                                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div>
                            <label for="password" className="text-sm font-medium">Password</label>

                            <div className="relative mt-1">
                                <input
                                    type="password"
                                    name="password"
                                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                    placeholder="Enter password"
                                />

                                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <p className='text-red-500 font-bold'>{password}</p>
                        <button
                            type="submit"
                            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                        >
                            Sign in
                        </button>

                        <p className="text-center text-sm text-gray-500">
                            No account?
                            <Link className="underline text-blue-600 font-bold" to="/register">Sign up</Link>
                        </p>
                    </form>
                </div>
            </div>

        </div>

    );
};

export default Login;