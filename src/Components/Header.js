import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='pt-4 pb-4 bg-dark'>
            <div className='container'>
                <div className={'d-flex gap-4 justify-content-between'}>
                    <Link to={'/'} className='btn btn-primary'>Home</Link>
                    <Link to={'/search'} className='btn btn-primary'>Search</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
