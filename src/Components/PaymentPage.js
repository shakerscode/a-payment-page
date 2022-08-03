import React from 'react';
import { BsTruck, BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { MdOutlineShoppingCart } from 'react-icons/md'
import CustomBtnOne from './CustomBtnOne';
import CustomBtnTwo from './CustomBtnTwo';
import discover from '../images/discover.png'
import ideal from '../images/ideal.png'
import mastercard from '../images/mastercard.png'
import paypal from '../images/paypal.png'
import visa from '../images/visa.png'
import inpost from '../images/inpost.png'
import dpd from '../images/dpd.png'
import dhl from '../images/dhl.png'
import fedex from '../images/fedex (1).png'
import auth from '../firebase.init';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';


const PaymentPage = () => {
    const [signInWithGoogle, loginUser, loading, error] = useSignInWithGoogle(auth);
    const [user] = useAuthState(auth);

    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <p>Loading...</p>;
      }

    const handleLogin = ()=>{
        signInWithGoogle()
    }
    const handleSignup = ()=>{
        signInWithGoogle()
    }
    const logOut= () => {
        signOut(auth)
    }
    return (
        <div className='mt-10 px-10 '>
            <div>
                <div className='flex justify-between items-center'>
                    <div>
                        <h1 className='text-xl font-semibold'>Shipping and Payment</h1>
                    </div>
                    <div className='shipping-icon-sec '>
                        <MdOutlineShoppingCart className='cart-icon' />
                        <BsTruck className='truck-icon bg-green-500' />
                    </div>
                </div>
                <div></div>
            </div>
            <div className='grid grid-cols-2 pt-10 gap-8'>
                <div className=''>
                    <div className='flex gap-5'>
                       { user || loginUser ? <button onClick={logOut} className='border bg-green-600 px-10 py-2 uppercase font-semibold rounded-full text-white' >Log Out</button> : <> <button className='border bg-green-600 px-10 py-2 uppercase font-semibold rounded-full text-white' onClick={handleLogin}>Log In</button>
                        <button  className='border border-gray-300 px-10 py-2 uppercase font-semibold rounded-full ' onClick={handleSignup}>Sign up</button></> }
                    </div>
                    <div className='mt-5'>
                        <h2 className='py-6 text-lg font-semibold'>Shipping Information</h2>
                        <div className='grid grid-cols-2 gap-4 '>
                            <input className='py-4 border outline-none rounded-full pl-5 w-full' placeholder='Email' type="text" />
                            <input className='py-4 border outline-none rounded-full pl-5 w-full' placeholder='Address' type="text" />
                            <input className='py-4 border outline-none rounded-full pl-5 w-full' placeholder='First name' type="text" />
                            <input className='py-4 border outline-none rounded-full pl-5 w-full' placeholder='City' type="text" />
                            <input className='py-4 border outline-none rounded-full pl-5 w-full' placeholder='Last name' type="text" />
                            <input className='py-4 border outline-none rounded-full pl-5 w-full' placeholder='Postal Code/Zip' type="text" />
                            <input className='py-4 border outline-none rounded-full pl-5 w-full' placeholder='Phone number' type="text" />
                            <select className='py-4 border outline-none rounded-full px-3 w-full'>
                                <option className='text-gray-200' value="poland">Poland</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between gap-4'>
                    <div>
                        <div>
                            <h3 className='py-3 text-lg font-semibold'>Payment Method</h3>
                            <div className='grid grid-cols-3 gap-4'>
                                <button className='border border-gray-300 px-10 py-2 uppercase font-semibold rounded-full'><img src={paypal} alt="" width={'80px'} /></button>
                                <button className='border border-gray-300 px-10 py-2 uppercase font-semibold rounded-full'><img src={visa} alt="" width={'80px'} /></button>
                                <button className='border border-gray-300 px-10 py-2 uppercase font-semibold rounded-full'><img src={mastercard} alt="" width={'80px'} /></button>
                                <button className='border border-gray-300 px-10 py-2 uppercase font-semibold rounded-full'><img src={mastercard} alt="" width={'80px'} /></button>
                                <button className='border border-gray-300 px-10 py-2 uppercase font-semibold rounded-full'><img src={discover} alt="" width={'80px'} /></button>
                                <button className='border border-gray-300 px-10 py-2 uppercase font-semibold rounded-full'><img src={ideal} alt="" width={'80px'} /></button>
                            </div>
                        </div>
                        <div className='margin-top'>
                            <h3 className='py-3 text-lg font-semibold'>Delivery Method</h3>
                            <div className='grid grid-cols-2 gap-4'>
                                <button className='border border-gray-300 px-10 py-2 uppercase font-semibold rounded-full'><img src={inpost} alt="" width={'60px'} /></button>
                                <button className='border border-gray-300 px-10 py-2 uppercase font-semibold rounded-full'><img src={dpd} alt="" width={'60px'} /></button>
                                <button className='border border-gray-300 px-10 py-2 uppercase font-semibold rounded-full'><img src={dhl} alt="" width={'40px'} /></button>
                                <button className='border border-gray-300 px-10 py-2 uppercase font-semibold rounded-full'><img src={fedex} alt="" width={'40px'} /></button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h5 className='py-3 text-lg font-semibold'>Your Cart</h5>
                        <div className='flex justify-between items-center'>
                            <img className='rounded-full shadow' src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg" alt="" width={'50px'} height={'10px'} />
                            <div>
                                <p>T-Shirt</p>
                                <p>Summer Vibes</p>
                                <p className='text-gray-400'>#23456</p>
                            </div>
                            <p>$89.99</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <img className='rounded-full shadow' src="https://img.freepik.com/premium-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg" alt="" width={'40px'} height={'20px'} />
                            <div>
                                <p>Basic Slim</p>
                                <p>Fit t-shirt</p>
                                <p className='text-gray-400'>#26456</p>
                            </div>
                            <p>$69.99</p>
                        </div>
                        <div className='flex justify-between items-center bg-gray-200 px-4 py-4 mt-4 rounded-full'>
                            <p>Total cost</p>
                            <p>$159.98</p>
                        </div>
                        <div className='mt-14 flex justify-center items-center px-4'>
                            <BsTruck className='mr-4 text-lg' />
                            <p className='text-sm'>You are $30.99 away from the free shipping!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center mt-12 py-4'>
                <div className='flex justify-center items-center gap-5 mt-3'>
                    <BsFillArrowLeftCircleFill />
                    <p>Back</p>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    <CustomBtnTwo>Continue Shopping</CustomBtnTwo>
                    <CustomBtnOne>Proceed To Payment</CustomBtnOne>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;