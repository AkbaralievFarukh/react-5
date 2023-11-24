import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
            .then(({data}) => setUsers(data))
            console.log(users)
    }, [])

    return (
        <div className='home-page'>
           <div className='container'>
                <div className='row'>
                {
                users.map(user =>
                    <div key={user.id} className={'col-4'}>
                        <div className='col-4'>
                            <h2>{user.name}</h2>
                        </div>
                    </div>
                )
            }
                </div>
           </div>
        </div>
    );
}

export default HomePage;
