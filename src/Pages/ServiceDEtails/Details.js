import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthUseContext } from '../../Shared/Context/UseAuthContext';
import Reviews from './Reviews';
// import { addToDb, getProductId } from '../../FakeDB/fakedb';

const Details = () => {
    const loader = useLoaderData()
    const { user } = useContext(AuthUseContext)
    const navigate = useNavigate()

    const { strMealThumb, strMeal, price, strInstructions, _id } = loader
    const handlerToSubmit = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const email = form.email.value
        const number = form.phone.value
        const photoURL = form.photoURL.value
        const message = form.message.value
        const time = form.time.value
        const reviewto = {
            service: _id,
            serviceName: strMeal,
            price,
            photo: photoURL,
            customer: name,
            email,
            number,
            time,
            message
        }
        if (number.length < 11) {
            toast.error('Phone Number Should Be Minimum 11 Characters')
        }
        else {
            fetch('http://localhost:5000/reviews', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(reviewto)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.success('Your Comment is successful')
                        form.reset()
                        navigate('/serviceALl')
                    }
                })
                .catch(err => console.log(err))
        }

    }

    return (
        <div className='max-w-screen-xl mx-auto my-20'>
            <h1 className="text-2xl text-center my-6 font-bold">Service Details & Reviews</h1>
            <div className="relative ">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="bg-gray-50 py-12 md:py-24">
                        <div className="mx-auto max-w-lg px-4 lg:px-8">
                            <div className="flex items-center">
                                <span className="h-10 w-10 rounded-full bg-blue-900"></span>

                                <h2 className="ml-4 font-medium">{strMeal}</h2>
                            </div>

                            <div className="mt-8 my-4">
                                <p className='text-xl text-red-600 '>${price}</p>
                                <p className="mt-1 text-sm text-gray-500">For the purchase of</p>
                            </div>

                            <div className="m-auto  card  bg-base-100 shadow-xl">
                                <figure><img className=' m-4 rounded-xl w-[400px]' src={strMealThumb} alt="Album" /></figure>
                                <div className="card-body ">
                                    <h2 className="card-title">{strMeal}</h2>

                                    <p>{strInstructions}</p>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white py-12 md:py-24 ">
                        <div className="mx-auto max-w-lg px-4 lg:px-8 sticky top-5">
                            {/* form start */}
                            {
                                user?.email &&
                                <>
                                    <form onSubmit={handlerToSubmit} className="grid grid-cols-6 gap-4">

                                        <div className="col-span-6">
                                            <label className="mb-1 block text-sm text-gray-600" for="first_name">
                                                Name
                                            </label>

                                            <input
                                                className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                                                type="text"
                                                name="name"
                                                required
                                            />
                                        </div>
                                        <div className="col-span-6">
                                            <label className="mb-1 block text-sm text-gray-600" for="first_name">
                                                Photo Url
                                            </label>

                                            <input
                                                className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                                                type="text"
                                                name="photoURL"
                                                required
                                            />
                                        </div>


                                        <div className="col-span-6">
                                            <label className="mb-1 block text-sm text-gray-600" for="email">
                                                Email
                                            </label>

                                            <input
                                                className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                                                type="email"
                                                name="email"
                                                defaultValue={user?.email}
                                                readOnly
                                            />
                                        </div>

                                        <div className="col-span-6">
                                            <label className="mb-1 block text-sm text-gray-600" for="phone">
                                                Phone
                                            </label>

                                            <input
                                                className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                                                type="tel"
                                                name="phone"
                                                required
                                            />
                                        </div>
                                        <div className='col-span-6 border py-2'>

                                            <input type="datetime-local" id="meeting-time"
                                                name="time"
                                                min="2022-06-07T00:00" max="2023-06-14T00:00"></input>
                                        </div>

                                        <div className="col-span-6">
                                            <label className="mb-1 block text-sm w-full text-gray-600" for="phone">
                                                Your Comment
                                            </label>

                                            <input className="textarea border w-full" type="text" name="message" id="" />
                                        </div>

                                        <div className="col-span-6">
                                            <button

                                                className="block w-full rounded-lg bg-black p-2.5 text-sm text-white"
                                                type="submit"
                                            >
                                                Comment
                                            </button>
                                        </div>
                                    </form>
                                </>

                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* reviews */}
            <div>
                <Reviews></Reviews>
            </div>
        </div>
    );
};

export default Details;