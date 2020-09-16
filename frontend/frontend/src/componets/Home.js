import React, {Fragment} from 'react';


import nosotros from '../img/inicio_nosotros.jpg' 

function Home (){
    return(
        <Fragment>
            <div className="slider">
            <h1>The Future is Now</h1>
            <em>Academy</em>
            </div>
            <main className="container mt-5">
            <h2 className="text-center mb-5">Sobre Nosotros</h2>
            <div className="row mb-5">
                <div className="col-md-6">
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et soluta maiores voluptatem veniam optio ratione ea doloremque ut nostrum dicta natus ad quos quae odio, placeat laudantium quaerat distinctio neque?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae suscipit eveniet minima id aliquid aspernatur excepturi obcaecati beatae in deserunt ipsa quaerat, commodi maxime necessitatibus est incidunt numquam quia nobis fuga labore dignissimos praesentium ratione tempora voluptate? Laboriosam molestiae minima vitae numquam, ipsum assumenda pariatur. Dolore, error laboriosam.
                </p>
                </div>
                <div className="col-md-6">
                <img className="img-fluid" alt="Academy" src={nosotros} />
                </div>
            </div>
            <h2 className="text-center mb-5">Descuentos</h2>
            </main>
            <div className="descuento">
            <div className="container">
                <div className="row">
                <div className="col-md-6">
                    <div className="contenido">
                    <h3>5% de Descuento</h3>
                    <p className="titulo">viaje a Canada</p>
                    <p className="fecha">20 de Noviembre 2020 - 15 de Diciembre 2020</p>
                    <p className="precio">$2.50</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="container">
            </div>
        </Fragment>
        
    )
}

export default Home;