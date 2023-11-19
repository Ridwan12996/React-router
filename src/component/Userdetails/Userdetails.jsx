import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Userdetails = () => {
    const user = useLoaderData()
    const {name, website}=user
    return (
        <div>
            <h3 class="text-lg font-semibold">User name : {name}</h3>
            <p class="text-sm font-medium">Website ~ {website}</p>
        </div>
    );
};

export default Userdetails;