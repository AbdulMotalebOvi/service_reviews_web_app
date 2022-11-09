import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthUseContext } from '../../Shared/Context/UseAuthContext';

const User = ({ user, handlerToDelete }) => {
    const { setLoading } = useContext(AuthUseContext)
    const [updates, setUpdate] = useState(user)
    const { customer, _id, number, photo, price, serviceName, message } = updates;
    const [showModal, setShowModal] = React.useState(false);
    const handleUpdate = id => {
        fetch(`https://service-reviews.vercel.app/allReviews/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updates)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Review Updated Successfully')

                }
            })
    }
    const handlerToChange = event => {
        const field = event.target.name
        const value = event.target.value
        const update = { ...updates }
        update[field] = value;
        setLoading(true)
        setUpdate(update)
    }
    return (

        <tr>
            <th>
                <label>
                    <button onClick={() => handlerToDelete(_id)} className="btn btn-square btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-12 h-12">
                            <img src={photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{number}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="text-red-500">${price}</span>
            </td>
            <td>{message}</td>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">

            </div>
            <th>

                <button
                    className="bg-blue-600 py-2 px-5 text-white rounded"
                    type="button"
                    onClick={() => setShowModal(true)}
                >
                    Edit
                </button>
                {showModal ? (
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
                        >
                            <div className="flex flex-col my-10 mx-auto ">

                                <div className="border-0 rounded-lg shadow-lg relative flex  w-full bg-white outline-none focus:outline-none">

                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <form className="grid grid-cols-6 gap-4">

                                            <div className="col-span-6">
                                                <label className="mb-1 block text-sm text-gray-600" for="first_name">
                                                    Name
                                                </label>

                                                <input
                                                    className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
                                                    type="text"
                                                    name="name"
                                                    onChange={handlerToChange}


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
                                                    onChange={handlerToChange}
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
                                                    onChange={handlerToChange}
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

                                                <input className="textarea border border-black w-full" type="text" name="message" id=""
                                                    onChange={handlerToChange}
                                                />
                                            </div>

                                        </form>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowModal(false)}
                                        >
                                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                ×
                                            </span>
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Close
                                        </button>
                                        <button
                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => handleUpdate(_id, setShowModal(false))}
                                        >
                                            Save Changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
            </th>
        </tr>


    );
};

export default User;