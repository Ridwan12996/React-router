
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
           <h2 className='text-4xl font-semibold text-center'>Users</h2> 
           <div className='grid grid-cols-3 gap-4 p-3'>
           {
           users.map(user=><User user={user}></User>)
           }

           </div>
        </div>
    );
};

export default Users;