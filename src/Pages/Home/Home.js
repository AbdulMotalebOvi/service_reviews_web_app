import React from 'react';
import useTitle from '../../Hooks/useTitle';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import Kitchens from './Kitchens/Kitchens';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Kitchens></Kitchens>
        </div>
    );
};

export default Home;