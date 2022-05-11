import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import SubBanner from './SubBanner';
import MakeAppointment from './MakeAppointment';
import Testimonial from './Testimonial';
import Footer from '../Shared/Footer';
import From from './From';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <SubBanner></SubBanner>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <From></From>
            <Footer></Footer>
        </div>
    );
};

export default Home;