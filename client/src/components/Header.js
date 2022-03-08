import React from 'react';
import '../styles/nav.css';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';

// const styles = {
//     navbar: {
//         background: 'orange',
//         textDecoration: 'none',
//     }
// };

const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
    return (
        <header>
            <div>
                <div>
                    <Link to="/">
                        <h1>Quizzle</h1>
                    </Link>
                    <p id='title'>Let's make a quiz!</p>
                </div>
                <div>
                    {Auth.loggedIn() ? (
                        <>
                            <Link className="btn btn-lg btn-info m-2" to="/create">
                                Create
                            </Link>
                            <button className="btn btn-lg btn-light m-2" onClick={logout}>
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link className="btn btn-lg btn-info m-2" to="/login">
                                Login
                            </Link>
                            <Link className="btn btn-lg btn-light m-2" to="/signup">
                                Signup
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;