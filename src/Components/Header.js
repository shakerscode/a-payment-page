import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {AiOutlineSearch} from 'react-icons/ai'
import {MdOutlineShoppingCart} from 'react-icons/md'
import {RiUserLine} from 'react-icons/ri'
import auth from '../firebase.init';

const Header = () => {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <p>Loading...</p>;
      }
      
    return (
        <header className='flex justify-between items-center px-10 py-8 shadow '>
            <div>
                <h1 className='text-2xl font-bold'><span className='text-orange-500'>E-</span>Shop</h1>
            </div>
            <div>
                <ul className='flex text-lg'>
                    <li className='ml-20'>Men</li>
                    <li className='ml-20'>Women</li>
                    <li className='ml-20'>Kids</li> 
                </ul>
            </div>
            <div className='flex justify-center items-center text-2xl'>
                <AiOutlineSearch className='ml-5'/>
                <MdOutlineShoppingCart className='ml-5'/>
                {user ? <img className='w-10 h-10 ml-4 rounded-full' src={user?.photoURL} alt="" /> :<RiUserLine  className='ml-5'/>}
            </div>
            
        </header>
    );
};

export default Header;