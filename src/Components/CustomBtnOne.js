import React from 'react';

const CustomBtnOne = ({children}) => {
    return (
       <button className='border bg-green-600 px-10 py-2 uppercase font-semibold rounded-full text-white'>{children}</button>
    );
};

export default CustomBtnOne;