import React from 'react';

function Footer(){
    return (
        <footer className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <nav className="nav justify-content-center justify-content-md-start">
              <a className="nav-link" href="/nosotros">Nosotros</a>
              <a className="nav-link" href="/viajes">Viajes</a>
              <a className="nav-link" href="/testimoniales">Testimoniales</a>
            </nav>
          </div>
          <div className="col-md-6">
            <p className="copyright text-center text-md-right">
              Todos los derechos reservado /
            </p>
          </div>
        </div>
      </footer>
    )
}

export default Footer;