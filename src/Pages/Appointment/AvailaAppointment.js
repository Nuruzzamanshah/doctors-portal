import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailaAppointment = ({date}) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formattedate = format(date, 'pp');

    const {data: services, isLoading, refetch} = useQuery(['available', formattedate], ()=> fetch(`http://localhost:5000/available?date=${formattedate}`)
        .then(res => res.json())
        )
        if(isLoading){
            <Loading></Loading>
        }
    // useEffect( () =>{
    //     fetch(`http://localhost:5000/available?date=${formattedate}`)
    //     .then(res => res.json())
    //     .then(data => setServices(data));
    // },[formattedate])
    return (
        <div>
            <h4 className='text-xl text-primary text-center'>Available Appointments on {format(date, 'pp')}</h4>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                {
                    services?.map(service =><Service
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal 
            date={date}
             treatment={treatment}
             setTreatment={setTreatment}
             refetch={refetch}
             ></BookingModal>}
        </div>
    );
};

export default AvailaAppointment;