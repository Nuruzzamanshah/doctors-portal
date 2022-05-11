import React from 'react';

const From = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <h3>Contact Us</h3>
                    <h2>Stay connected with us</h2>
                    <div class="form-control">
                    <input type="text" placeholder="Enter Your Email" class="input input-bordered" />
                    </div>

                    <div class="form-control">
                    <input type="text" placeholder="Subject" class="input input-bordered" />
                    </div>
                    <div class="form-control ">
                    <input type="text" placeholder="Your message" class="input input-bordered" />
                    </div>
                    
                    <div class="form-control mt-6">
                    <button class="btn btn-primary">Submit</button>
                    </div>
                </div>
                </div>
            </div>
</div>
    );
};

export default From;