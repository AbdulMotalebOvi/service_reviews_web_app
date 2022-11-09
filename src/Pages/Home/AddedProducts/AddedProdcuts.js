import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { AuthUseContext } from '../../../Shared/Context/UseAuthContext';

const AddedProdcuts = () => {
    const { user } = useContext(AuthUseContext)
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/addedProducts')
            .then(res => res.json())
            .then(data => setData(data))
    }, [data])
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
                settings: { slidesToShow: 3, slidesToScroll: 3, infinite: false }
            }
        ],


    }
    return (
        <>
            {
                user?.email ?
                    <div className='max-w-screen-xl mx-auto my-20'>
                        <h1 className='text-3xl font-bold my-3 text-[#444444d9] '>My Products</h1>
                        <div className=''>
                            {
                                data.length >= 3 &&
                                <>
                                    <Slider {...settings}>
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
                                    </Slider>
                                </>
                            }
                        </div>
                    </div>
                    :
                    <div className='max-w-screen-xl mx-auto text-center space-y-5'>
                        <p className='text-2xl font-semibold text-[#444444d9]'>You're Not Logged In ,Please!</p>
                        <button className="text-center btn btn-outline btn-error"><Link to='/login'>Log In Now </Link></button>
                    </div>
            }
        </>
    );
};

export default AddedProdcuts;