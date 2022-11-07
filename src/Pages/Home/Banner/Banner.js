import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import banner from '../../../assests/banner/banner.jpg'

const Banner = () => {
    const myStyle = {
        backgroundImage:
            `url(${banner})`,
        height: '412px',
        width: '100%',
        fontSize: '50px',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div style={myStyle}>
            <div className='max-w-screen-xl mx-auto '>
                <div className='flex flex-col items-center justify-center text-[#444444d9]'>
                    <h2 className='mt-28 font-bold text-center'>Aahana Kitchen's Menu List </h2>
                    <p className='text-[17px] flex items-center '>Home <span className='mx-2'><FaArrowRight /></span> <Link>Menu List View</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Banner;