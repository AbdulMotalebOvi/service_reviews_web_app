import React, { useContext, useEffect, useState } from 'react';
import Slider from 'react-slick';
import Lottie from "lottie-react";
import animate from '../../../animations/125886-login-bounce.json'
import { AuthUseContext } from '../../../Shared/Context/UseAuthContext';
import { Link } from 'react-router-dom';

const ServiceReviews = () => {
    const { user, logOut } = useContext(AuthUseContext)
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://service-reviews.vercel.app/allReviews', {
            headers: {
                authorization: `Bareer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json()
            })
            .then(data => setReviews(data))
    }, [reviews])
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        slidesToShow: 3,
        slidesToScroll: 2,
        pauseOnHover: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                }
            },
            {
                breakpoint: 1024,
                settings:
                {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false
                }
            }
        ]


    }
    return (
        <div className='my-20'>
            {
                user?.email ?
                    <>
                        {
                            reviews?.length <= 3 ?
                                <div className='max-w-screen-xl mx-auto my-20'>
                                    <h1 className='text-2xl ml-5 text-[#444444d9] font-bold text-left'>My Customer's Reviews</h1>
                                    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                                        {
                                            reviews?.map(sr => {
                                                return (
                                                    <div key={sr._id}>
                                                        <div
                                                            className="rounded-2xl 
                                            m-5
                                            bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl"
                                                        >
                                                            <div className="block rounded-xl bg-white p-6 sm:p-8" >
                                                                <img src={sr.photo} className='w-[60px] h-[60px] rounded-full' alt="" />
                                                                <p className='mt-2'>{sr.customer}</p>
                                                                <div className="mt-5 sm:pr-8">
                                                                    <h3 className="text-xl font-bold text-gray-900">{sr.serviceName}</h3>
                                                                    <p className="mt-2 text-sm text-gray-500">
                                                                        {sr.message}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                :
                                <>
                                    <div className='max-w-screen-xl mx-auto my-20'>
                                        <h1 className='text-2xl ml-5 text-[#444444d9] font-bold text-left'>My Customer's Reviews</h1>
                                        <div>
                                            <Slider {...settings}>
                                                {
                                                    reviews.map(sr => {

                                                        return (
                                                            <div key={sr._id}>
                                                                <div
                                                                    className="rounded-2xl 
                                            m-5
                                            bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl"
                                                                >
                                                                    <div className="block rounded-xl bg-white p-6 sm:p-8" >
                                                                        <img src={sr.photo} className='w-[60px] h-[60px] rounded-full' alt="" />
                                                                        <p className='mt-2'>{sr.customer}</p>
                                                                        <div className="mt-5 sm:pr-8">
                                                                            <h3 className="text-xl font-bold text-gray-900">{sr.serviceName}</h3>
                                                                            <p className="mt-2 text-sm text-gray-500">
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


                                        </div>
                                    </div>
                                </>
                        }
                    </>
                    :
                    <div className='max-w-screen-xl mx-auto text-center space-y-5'>
                        <Lottie className='w-[130px] m-auto' animationData={animate} loop={true} />
                        <p className='text-2xl font-semibold text-[#444444d9]'>See Your All Reviews ,Please!</p>
                        <button className="text-center btn btn-outline btn-error"><Link to='/login'>Log In Now </Link></button>
                    </div>
            }
        </div>
    );
};

export default ServiceReviews;