import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id,name,email,website} =user
    return (
        <div className='border border-red-400 border-solid rounded-lg p-4'>
            <h4 className='text-4xl'> {name}</h4>
            <h4> Email: {email}</h4>
        <Link to={`/user/${id}`}><button class="text-white bg-blue-600 p-2 rounded-lg">Show details</button></Link>
            
        </div>
    );
};

export default User;