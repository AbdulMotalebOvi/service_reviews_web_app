import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

const ServiceReviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allReviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews])
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <>
            {
                reviews.length > 1 &&
                <>
                    <div className='max-w-screen-xl mx-auto my-20'>
                        <h1 className='text-2xl ml-5 text-[#444444d9] font-bold text-left'>My Customer's Reviews</h1>
                        <div>

                            {

                                reviews.sort((dateA, dateB) => dateB.time - dateA.time).length >= 3 &&
                                <>
                                    <Slider {...settings}>
                                        {
                                            reviews.map(sr => {

                                                return (

                                                    <div >
                                                        <div
                                                            class="rounded-2xl 
                                                            m-5
                                                            bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl"
                                                        >
                                                            <div class="block rounded-xl bg-white p-6 sm:p-8" >
                                                                <img src={sr.photo} className='w-[60px] h-[60px] rounded-full' alt="" />
                                                                <p className='mt-2'>{sr.customer}</p>
                                                                <div class="mt-5 sm:pr-8">
                                                                    <h3 class="text-xl font-bold text-gray-900">{sr.serviceName}</h3>
                                                                    <p class="mt-2 text-sm text-gray-500">
                                                                        {sr.message}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                )
                                            })
                                        }
                                    </Slider>

                                </>

                            }
                        </div>
                    </div>
                </>
            }
        </>
    );
};

export default ServiceReviews;