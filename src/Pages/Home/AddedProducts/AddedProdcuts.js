import React, { useEffect, useState } from 'react';

const AddedProdcuts = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/addedProducts')
            .then(res => res.json())
            .then(data => setData(data))
    }, [data])
    return (
        <div className='max-w-screen-xl mx-auto my-20'>
            <h1 className='text-3xl font-bold my-3 text-[#444444d9] '>My Products</h1>
            <div className='grid grid-cols-3 gap-4'>
                {
                    data.map(({ _id, name, photo, price }) => {
                        return (
                            <div key={_id}>
                                <div className="card w-96 bg-base-100 border">
                                    <figure className="px-10 pt-10">
                                        <img src={photo} className="w-[90px] h-[90px] rounded-full" alt="Shoes" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title"> Name: {name}</h2>
                                        <p className='text-red-500 font-bold text-2xl'>Price:${price}</p>

                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default AddedProdcuts;