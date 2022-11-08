import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const loader = useLoaderData()
    const { strMealThumb, strMeal, price, strInstructions } = loader
    console.log(loader);
    return (
        <div className='max-w-screen-xl mx-auto my-20'>
            <div>

            </div>
            <section>
                <h1 class="sr-only">Checkout</h1>

                <div class="relative ">
                    <div class="grid grid-cols-1 md:grid-cols-2">
                        <div class="bg-gray-50 py-12 md:py-24">
                            <div class="mx-auto max-w-lg px-4 lg:px-8">
                                <div class="flex items-center">
                                    <span class="h-10 w-10 rounded-full bg-blue-900"></span>

                                    <h2 class="ml-4 font-medium">{strMeal}</h2>
                                </div>

                                <div class="mt-8 my-4">
                                    <p className='text-xl text-red-600 '>${price}</p>
                                    <p class="mt-1 text-sm text-gray-500">For the purchase of</p>
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

                        <div class="bg-white py-12 md:py-24 ">
                            <div class="mx-auto max-w-lg px-4 lg:px-8 sticky top-5">
                                <form class="grid grid-cols-6 gap-4">
                                    <div class="col-span-3">
                                        <label class="mb-1 block text-sm text-gray-600" for="first_name">
                                            Name
                                        </label>

                                        <input
                                            class="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                                            type="text"
                                            id="first_name"
                                        />
                                    </div>


                                    <div class="col-span-6">
                                        <label class="mb-1 block text-sm text-gray-600" for="email">
                                            Email
                                        </label>

                                        <input
                                            class="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                                            type="email"
                                            id="email"
                                        />
                                    </div>

                                    <div class="col-span-6">
                                        <label class="mb-1 block text-sm text-gray-600" for="phone">
                                            Phone
                                        </label>

                                        <input
                                            class="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                                            type="tel"
                                            id="phone"
                                        />
                                    </div>

                                    <div class="col-span-6">
                                        <label class="mb-1 block text-sm w-full text-gray-600" for="phone">
                                            Your Comment
                                        </label>

                                        <textarea className="textarea border w-full" placeholder="Bio"></textarea>
                                    </div>

                                    <div class="col-span-6">
                                        <button
                                            class="block w-full rounded-lg bg-black p-2.5 text-sm text-white"
                                            type="submit"
                                        >
                                            Comment
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Details;