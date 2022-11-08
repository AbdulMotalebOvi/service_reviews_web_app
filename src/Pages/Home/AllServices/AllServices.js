import React, { useEffect, useState } from 'react';

const AllServices = () => {
    const [allServices, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='max-w-screen-xl mx-auto my-20'>
            {
                allServices.map(services => {
                    return (
                        <div key={services._id} className="card lg:card-side w-3/4 m-auto my-5 h-[300px] bg-base-100 border">
                            <figure><img src={services.strMealThumb} className='w-[400px]' alt="Album" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">New album is released!</h2>
                                <p>Click the button to listen on Spotiwhy app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Listen</button>
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