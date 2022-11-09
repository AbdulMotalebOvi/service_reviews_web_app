import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';
import { Link } from 'react-router-dom';


const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://service-reviews.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='max-w-screen-xl mx-auto my-20 text-[#444444d9]'>
            <h1 className='text-3xl font-bold my-5'>My Services</h1>

            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
                    <div
                        className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch"
                    >
                        <div className="flex items-center rounded bg-gray-100 p-8">
                            <div className="mx-auto text-center lg:text-left">
                                <h2 className="text-2xl font-bold">Services</h2>

                                <p className="mt-4 max-w-[45ch] text-sm text-gray-700">
                                    A kitchen is a room that is used for cooking and for household jobs such as washing dishes. Synonyms: cookhouse, galley, kitchenette, scullery More Synonyms of kitchen. 2. See also soup kitchen.
                                </p>
                                <div>
                                    <Link
                                        to="/serviceALl"
                                        className="mt-6 inline-block rounded bg-black px-6 py-3 text-sm text-white"
                                    >
                                        View All Services
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 lg:col-span-2 lg:grid-cols-3 lg:py-12">
                            {
                                services.map(sr => <SingleService
                                    key={sr._id}
                                    services={sr}

                                ></SingleService>)
                            }
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Services;