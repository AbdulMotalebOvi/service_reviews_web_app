import React from 'react';
import useTitle from '../../Hooks/useTitle';
import Services from '../Services/Services';
import Banner from './Banner/Banner';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;