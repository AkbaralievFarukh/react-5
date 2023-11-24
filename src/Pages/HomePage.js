import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from '../Components/UserList';

const HomePage = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
            .then(({data}) => setUsers(data))
    }, [])

    return (
        <div className='home-page'>
           <div className='container'>
                <div class="row mt-4">
                    <UserList users={users} />
                </div>
           </div>
        </div>
    );
}

export default HomePage;
