import React from 'react';

function Navbar() {
    return (
        <div>
            <nav>
                <ul class='flex justify-end space-x-4 p-4 '>
                    <li><a href="/#create">Create</a></li>
                    <li><a href="/#login">Login</a></li>
                    <li><a href="/#signup">Sign Up</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;