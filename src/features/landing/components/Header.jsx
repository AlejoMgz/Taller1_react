import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <header>
            <nav className="navbar sm:navbar-expand bg-1 fg-2">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">MotoApp</a>
                    <button className="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" aria-hidden="true"></span>
                    </button>
                    <dialog className="drawer drawer-end" tabIndex="-1" id="navbarNav" aria-labelledby="navbarNavLabel">
                        <div className="drawer-header">
                            <h5 className="drawer-title" id="navbarNavLabel">Menu</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
                        </div>
                        <div className="drawer-body">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/login" className="nav-link">Login</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/register" className="nav-link">Register</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/forgot" className="nav-link">Forgot</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/rickandmorty" className="nav-link">API</NavLink>
                                </li>
                            </ul>
                        </div>
                    </dialog>
                </div>
            </nav>
        </header>
    )
}