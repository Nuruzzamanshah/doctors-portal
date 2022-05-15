import React from 'react';

import auth from './../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';
const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);
      const navigate = useNavigate();

      let signInError;
    //   true ||
      if( loading || gLoading || updating){
          return <Loading></Loading>
      }

      if(error || gError || UpdateError){
          signInError= <p className='text-red-500'><small>{error?.message || gError?.message || updating?.message}</small></p>
      }
    
    if(user || gUser){
        console.log(user, gUser);
    }

    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name })
        console.log('update done');
        navigate('/appointment');
    };
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl text-bold">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                    <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Name</span>
                    </label>
                    <input type="text"
                     placeholder="Enter Your Name"
                    class="input input-bordered w-full max-w-xs"
                    {...register("name", {
                        required:{
                            value: true,
                            message: 'name Is Required'
                        }
                      })}
                     />
                    <label class="label">
                         {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                    </div>

                    <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input type="email"
                     placeholder="Enter Your Email"
                    class="input input-bordered w-full max-w-xs"
                    {...register("email", {
                        required:{
                            value: true,
                            message: 'Email Is Required'
                        },
                        pattern: {
                          value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                          message: 'provide Your Valid Email'
                        }
                      })}
                     />
                    <label class="label">
                         {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                         {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                        
                    </label>
                    </div>

                    <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Password</span>
                    </label>
                    <input type="password"
                     placeholder="Enter Your Password"
                    class="input input-bordered w-full max-w-xs"
                    {...register("password", {
                        required:{
                            value: true,
                            message: 'Password Is Required'
                        },
                        minLength: {
                          value: 6,
                          message: 'Must Be 6 Characters Or Longer'
                        }
                      })}
                     />
                    <label class="label">
                         {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                         {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                        
                    </label>
                    </div>

                    {signInError}
                    <input className='btn w-full max-w-xs text-white' type="Submit" value='Sign Up' />
                    </form>
                    <p>Alreday Have an account? <Link className='text-primary' to='/login'>Please Login</Link></p>
                    <div className="divider">OR</div>
                    <button
                    onClick={() => signInWithGoogle()}
                     className="btn btn-outline btn-info">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;