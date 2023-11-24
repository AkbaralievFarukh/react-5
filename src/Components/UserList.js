import React, { useState } from 'react';

const UserList = ({users}) => {
    return (
        <>
            {
                users.map(user => 
                    <div key={user.id} className='col-4'>
                        <div className='box'>
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww" alt="" />
                            <h4>{user.name}</h4>
                            <p>{user.username}</p>
                        </div>
                    </div>
                    )
            }
        </>
    );
}

export default UserList;
