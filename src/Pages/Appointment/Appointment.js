import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailaAppointment from './AvailaAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner  date={date} setDate={setDate}></AppointmentBanner>
            <AvailaAppointment date={date}></AvailaAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;