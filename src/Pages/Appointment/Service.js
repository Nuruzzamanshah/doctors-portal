import React from 'react';

const Service = ({service, setTreatment}) => {
    const {name , slots} = service;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body text-center">
                <h2 class="text-secondary text-xl font-bold">{name}</h2>
                <p>
                    {
                        slots.length >0
                        ?<span>{slots[0]}</span>
                        :<span className='text-red-500'>No Slots Available. Try another Date</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div class="card-actions justify-center">
                <label for="booking-modal" 
                disabled={slots.length === 0} 
                onClick={ ()=> setTreatment(service)}
                class="btn btn-primary text-white uppercase">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;