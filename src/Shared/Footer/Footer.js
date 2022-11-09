import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assests/logo/logo.png'

const Footer = () => {
    return (

        <footer aria-label="Site Footer" className="bg-gray-50">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">

                <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4  lg:text-left sm:text-center">
                    <div className='mt-5'>
                        <img className='sm:w-[70px] lg:w-auto' src={logo} alt="" />
                    </div>

                    <div>
                        <p className="font-medium">Services</p>

                        <nav
                            aria-label="Footer Services Nav"
                            className="mt-4 flex flex-col space-y-2 text-sm text-gray-500"
                        >
                            <Link className="hover:opacity-75" to=""> Home Made Food</Link>
                            <Link className="hover:opacity-75" to=""> Free Delivery</Link>
                            <Link className="hover:opacity-75" to=""> Happy Review</Link>

                        </nav>
                    </div>

                    <div>
                        <p className="font-medium">Helpful Links</p>

                        <nav
                            aria-label="Footer Helpful Nav"
                            className="mt-4 flex flex-col space-y-2 text-sm text-gray-500"
                        >
                            <Link className="hover:opacity-75" to=""> Contact</Link>
                            <Link className="hover:opacity-75" to=""> FAQs</Link>
                            <Link className="hover:opacity-75" to=""> Live Chat</Link>
                        </nav>
                    </div>

                    <div>
                        <p className="font-medium">Legal</p>

                        <nav
                            aria-label="Footer Legal Nav"
                            className="mt-4 flex flex-col space-y-2 text-sm text-gray-500"
                        >
                            <Link className="hover:opacity-75" to=""> Privacy Policy</Link>
                            <Link className="hover:opacity-75" to=""> Terms & Conditions</Link>
                            <Link className="hover:opacity-75" to=""> Returns Policy</Link>
                            <Link className="hover:opacity-75" to=""> Accessibility</Link>
                        </nav>
                    </div>
                </div>

                <div
                    className="mt-8 border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between"
                >
                    <p className="text-xs text-gray-500">&copy; 2022 Aahana Kitchen's</p>
                </div>
            </div>
        </footer>


    );
};

export default Footer;