import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvailaAppointment = ({date}) => {
    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div>
            <h4 className='text-xl text-primary text-center'>Available Appointments on {format(date, 'pp')}</h4>

            <div>
                
            </div>
        </div>
    );
};

export default AvailaAppointment;