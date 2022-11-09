import React, { useContext, useState } from 'react';
import { AuthUseContext } from '../../Shared/Context/UseAuthContext';

const ReviewUpdate = () => {
    const { user } = useContext(AuthUseContext)


    return (
        <div className='max-w-screen-xl mx-auto my-20'>
            <h1 className="text-2xl text-center my-6 font-bold">Service Details & Reviews</h1>
            <div className="bg-slate-100 py-12 md:py-24 ">
                <div className="mx-auto max-w-lg px-4 lg:px-8 sticky top-5">
                    {/* {
                        user?.email &&
                        <>
                            <form className="grid grid-cols-6 gap-4">

                                <div className="col-span-6">
                                    <label className="mb-1 block text-sm text-gray-600" for="first_name">
                                        Name
                                    </label>

                                    <input
                                        className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                                        type="text"
                                        name="name"


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
                                        Update
                                    </button>
                                </div>
                            </form>
                        </>
                    } */}

                </div>
            </div>
        </div>
    );
};

export default ReviewUpdate;