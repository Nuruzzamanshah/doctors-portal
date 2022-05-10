import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard clore='bg-accent-content' cardSubTitle='Lorem Ipsum is simply dummy text of the pri' cardTitle='Opening Hours' img={clock}></InfoCard>
            <InfoCard clore='bg-accent-focus' cardSubTitle='Brooklyn, NY 10036, United States' cardTitle='Visit our location' img={marker}></InfoCard>
            <InfoCard clore='bg-success-content' cardSubTitle='01568235234' cardTitle='Contact us now' img={phone}></InfoCard>
        </div>
    );
};

export default Info;