import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import { AuthUseContext } from '../../../Shared/Context/UseAuthContext';

const AllServices = () => {
    const [allServices, setServices] = useState([])

    useEffect(() => {
        fetch('https://service-reviews.vercel.app/allServices')
            .then(res =>
                res.json()
            )
            .then(data => setServices(data))
    }, [])

    return (
        <div className='max-w-screen-xl mx-auto my-20'>
            {
                allServices?.map(services => {
                    return (
                        <div key={services._id} className="card lg:card-side  w-3/4 m-auto my-5 h-auto sm:h-[300px] bg-base-100 border">
                            <figure><img src={services.strMealThumb} className='w-[600px] sm:w-[400px] ' alt="Album" /></figure>
                            <div className="card-body">
                                <div className='flex justify-between items-center'>
                                    <h2 className="card-title">{services.strMeal}</h2>
                                    <h1 className='text-3xl text-red-700'>${services.price}</h1>
                                </div>

                                <div className='flex justify-between items-center'>
                                    <p className='text-[14px]'>{services.strInstructions.slice(0, 100) + '...'}.</p>
                                    <span className='text-2xl text-yellow-400 flex items-center'> <FaStar />
                                        <FaStar />
                                        <FaStar />

                                    </span>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary"><Link className='flex items-center ' to={`/serviceDetails/${services._id}`}>Show More<span className='mx-2'><FaArrowRight /></span></Link></button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    );
};

export default AllServices;