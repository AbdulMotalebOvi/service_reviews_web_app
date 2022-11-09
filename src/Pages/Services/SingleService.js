import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { FaArrowRight } from 'react-icons/fa';
import useTitle from '../../Hooks/useTitle';

const SingleService = ({ services, addToCart }) => {
    useTitle('Services')
    const { strMealThumb, strInstructions, strMeal, price, _id } = services
    return (

        <div>
            <Link href="#" className="block">
                <PhotoProvider>
                    <PhotoView key={_id} src={strMealThumb}>
                        <img
                            alt="Simple Watch"
                            src={strMealThumb}
                            className="aspect-square w-full rounded object-cover"
                        />
                    </PhotoView>
                </PhotoProvider>


                <div className="mt-2">
                    <h3 className="font-medium">{strMeal}</h3>
                    <p className="mt-1 text-sm text-gray-700">${price}</p>

                    {
                        strInstructions.length > 250 &&
                        <>
                            <p > {strInstructions.slice(0, 80) + '...'} </p>
                            <button className='my-3'><Link className='flex items-center' onClick={() => addToCart(services)} to={`serviceDetails/${_id}`}>Read More <span className='mx-2'><FaArrowRight /></span></Link></button>
                        </>
                    }
                </div>
            </Link>
        </div>

    );
};

export default SingleService;