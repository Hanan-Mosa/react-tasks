import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-secondary ">
            <div className="container-fluid">
                <Link className="navbar-brand mx" to="/">Navy</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto  mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/users">Users</Link>
                        </li>    
                    </ul>

                </div>
            </div>
        </nav>
    );
}
export default NavBar;