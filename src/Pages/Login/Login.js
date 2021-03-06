import React from 'react';
import auth from './../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      let signInError;

      const navigate = useNavigate();
      const location = useLocation();
      let from = location.state?.from?.pathname || "/";
    //   true ||
      if( loading || gLoading){
          return <Loading></Loading>
      }

      if(error || gError){
          signInError= <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
      }
    
    if(user || gUser){
        // console.log(user, gUser);
        navigate(from, { replace: true });
    }

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    };
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl text-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

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
                    <input className='btn w-full max-w-xs text-white' type="Submit" value='Login' />
                    </form>
                    <p>New To doctors Portal? <Link className='text-primary' to='/signUp'>Create New Account</Link></p>
                    <div className="divider">OR</div>
                    <button
                    onClick={() => signInWithGoogle()}
                     className="btn btn-outline btn-info">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;