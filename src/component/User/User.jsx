import React from 'react';

const User = ({user}) => {
    const {name,email,} =user
    return (
        <div>
            <h4>{name}</h4>
            <h4>{email}</h4>
            
        </div>
    );
};

export default User;