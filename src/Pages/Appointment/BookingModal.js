import React from 'react';
import { format } from 'date-fns';
import auth from './../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const BookingModal = ({treatment, date, setTreatment, refetch}) => {
    const {_id, name , slots} = treatment;
    const [user, loading, error] = useAuthState(auth);
    const formattedData = format(date, 'pp');
  

    const handleBooking = event =>{
        event.preventDefault();
        const slot = event.target.slot.value;
        const booking = {
            treatmentId: _id,
            treatment:name,
            date:formattedData,
            slot,
            patient:user.email,
            patientName:user.displayName,
            phone: event.target.phone.value
        }
        fetch('http://localhost:5000/booking',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
        console.log(data);
        if(data.success){
            toast(`Appointment Is Set, ${formattedData} at ${slot}`)
        }else{
            toast.error(`Already have an Appointment on ${data.booking?.data} at ${data.booking?.slot}`)
        }
        refetch();
        setTreatment(null);
        })
        
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
                <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 class="font-bold text-lg">Booking for: {name}</h3>
                <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5 justify-items-center mt-2'>
                <input type="text" disabled value={format(date, 'pp')} class="input input-bordered input-primary w-full max-w-xs" />
                <select name='slot' class="select select-bordered w-full max-w-xs">
                {
                    slots.map(slot => <option>{slot}</option>)
                }
                </select>
                <input name='name' type="text" disabled value={user?.displayName || ''} class="input input-bordered input-primary w-full max-w-xs" />
                <input name='email' type="email" disabled value={user?.email || ''} class="input input-bordered input-primary w-full max-w-xs" />
                <input name='phone' type="text" placeholder="Phone Number" class="input input-bordered input-primary w-full max-w-xs" />
                <input type="submit" value="Submit" class="btn btn-primary w-full max-w-xs" />
                </form>
            </div>
            </div>
        </div>
    );
};

export default BookingModal;