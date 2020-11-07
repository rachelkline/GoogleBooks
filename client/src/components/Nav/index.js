import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function Nav() {
    return (


        <nav className="nav-wrap">
            
                <div className="row">
                <Link className="navbar-brand" to="/">Google Books</Link>
                <ul className="nav">
                    <li className="nav-item">
                        <Link
                            to="/search"
                            className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
                        > search</Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/saved"
                            className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                        >saved</Link>
                    </li>
                </ul>
          
            </div>
        </nav>

    );
}

export default Nav;