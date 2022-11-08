import React, { useEffect, useState } from 'react';


const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allReviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews])

    return (
        <div>
            <h1>This is from reviews {reviews.length}</h1>
        </div>
    );
};

export default Reviews;