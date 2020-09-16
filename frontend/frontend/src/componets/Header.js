import React, {Fragment}from 'react';
import logo from '../img/logo.svg';

function Header(){
    return (
        <Fragment>
            <header>
                <div className="navegacion">
                    <div className="container">
                    <div
                        className="row justify-content-center justify-content-md-between align-items-center py-4"
                    >
                        <div className="col-6 col-md-4">
                        <a href="/">
                            <img alt="logo agencia" className="img-fluid" src={logo} />
                        </a>
                        </div>
                        <div className="col-6 col-md-8">
                        <nav className="nav justify-content-center justify-content-md-end">
                            <a className="nav-link" href="/nosotros">Nosotros</a>
                            <a className="nav-link" href="/viajes">Viajes</a>
                            <a className="nav-link" href="/testimoniales">Testimoniales</a>
                        </nav>
                        </div>
                    </div>
                    </div>
                </div>
            </header>
        </Fragment>
    );

}
export default Header