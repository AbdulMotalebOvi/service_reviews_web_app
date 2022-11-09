import React from 'react';
import useTitle from '../../Hooks/useTitle';
import Services from '../Services/Services';
import AddedProdcuts from './AddedProducts/AddedProdcuts';
import Banner from './Banner/Banner';
import AllDate from './ALlDates/Date';
import Kitchens from './Kitchens/Kitchens';
import ServiceReviews from './ServiceReviews/ServiceReviews';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <AddedProdcuts></AddedProdcuts>
            <Kitchens></Kitchens>
            <ServiceReviews></ServiceReviews>
        </div>
    );
};

export default Home;