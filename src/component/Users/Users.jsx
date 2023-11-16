
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
           <h2>Users</h2> 
           <div>
           {
           users.map(user=><User user={user}></User>)
           }

           </div>
        </div>
    );
};

export default Users;