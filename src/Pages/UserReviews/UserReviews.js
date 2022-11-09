import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../Hooks/useTitle';
import { AuthUseContext } from '../../Shared/Context/UseAuthContext';
import User from './User';

const UserReviews = () => {
    useTitle('User-Reviews')
    const { user } = useContext(AuthUseContext)
    const [userReview, setUserReview] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/allReviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setUserReview(data))
    }, [user?.email])
    const handlerToDelete = id => {
        const confirm = window.confirm("Are You SUre You Want To delete This Review?")
        if (confirm) {
            fetch(`http://localhost:5000/allReviews/${id}`, {
                method: "DELETE"
            })

                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0)
                        toast.success('Items deleted Successfully')
                    const remaining = userReview.filter(odr => odr._id !== id)
                    setUserReview(remaining)
                })
        }
    }

    return (
        <div className='max-w-screen-xl mx-auto my-20'>
            <h1 className='text-2xl font-bold my-5'>User Reviews</h1>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>

                                </th>
                                <th>User Name</th>
                                <th>Service Name</th>
                                <th>Comment</th>
                                <th>Modify</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                userReview.map(re => <User
                                    key={re._id}
                                    user={re}
                                    handlerToDelete={handlerToDelete}

                                ></User>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>



        </div>
    );
};

export default UserReviews;