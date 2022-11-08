import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddService = () => {
    const navigate = useNavigate()
    const handlertoAddedProduct = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const price = form.price.value
        const product = {
            name,
            photo,
            price
        }
        fetch('http://localhost:5000/products', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset()
                    toast.success('Product Added Successfully')
                    navigate('/')

                }
            })
    }
    return (
        <div className="mx-auto max-w-screen-xl w-full px-4 py-16 sm:px-6 lg:px-8 my-10">
            <div className="mx-auto  text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">Add Your Beautiful Product!

                </h1>
            </div>

            <form onSubmit={handlertoAddedProduct} className="border p-6 rounded-xl mx-auto w-3/4 mt-8 mb-0 
                 space-y-4">
                <div className=''>
                    <div>
                        <label for="email" className="sr-only">Name Of Products</label>

                        <div className="relative">
                            <input
                                type="text"
                                name="name"
                                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                                placeholder="Name Of Products"
                            />


                        </div>
                    </div>

                </div>
                <div>
                    <label for="Product Photo" className="sr-only">Name Of Products</label>

                    <div className="relative">
                        <input
                            type="text"
                            name="photo"
                            className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                            placeholder="Product Picture (URL)"
                        />


                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Enter amount</span>
                    </label>
                    <label className="input-group">
                        <span>Price</span>
                        <input type="text" placeholder="10"
                            name='price' className="input input-bordered" />
                        <span>USD</span>
                    </label>
                </div>


                <div className="flex items-center justify-between">

                    <button className="btn btn-outline btn-primary">Add Product</button>
                </div>
            </form>
        </div>
    );
};

export default AddService;