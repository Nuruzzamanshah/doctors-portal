import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import SubBanner from './SubBanner';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <SubBanner></SubBanner>
        </div>
    );
};

export default Home;