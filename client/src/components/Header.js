import React from 'react';
import '../styles/nav.css';

// const styles = {
//     navbar: {
//         background: 'orange',
//         textDecoration: 'none',
//     }
// };


function Navbar() {
    return (
        <div>
            <nav className='nav'>
                <ul className='nav-links'>
                    <li><a href="/create">Create</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/signup">Sign Up</a></li>
                    <li id='quiz'><a href='/#'>Quizzle</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;