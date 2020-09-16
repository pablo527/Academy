import React, {Fragment} from 'react';
// Images
import nosotros from '../img/nosotros.jpg';
import icono_seguridad from '../img/icono_seguridad.svg';
import icono_destinos from '../img/icono_destinos.svg';
import icono_precios from '../img/icono_precios.svg'

function Nosotros (){
    return(
        <Fragment>
         <main className="container mt-5">
            <div className="row">
                <div className="col-md-5">
                <img alt="imagen de nosotros" className="img-fluid" src={nosotros} />
                </div>
                <div className="col-md-7">
            
                <blockquote>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis natus quibusdam aut! Recusandae cupiditate vitae voluptas odio natus illo! Ut.
                </blockquote>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum accusamus distinctio exercitationem eos modi maiores assumenda ea! Error assumenda perferendis voluptas rerum saepe neque, cumque nisi dolore eveniet, excepturi minus possimus soluta commodi. Eveniet perspiciatis error illum ipsa tempore nihil?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, similique illo. Excepturi amet nisi nobis, suscipit deleniti cumque saepe. Sapiente provident iste repudiandae repellat animi ad beatae quidem doloremque possimus!
                </p>
                </div>
            </div>
            </main>
            <div className="listado-iconos">
            <div className="container mt-5 py-5 text-center">
                <div className="row">
                <div className="col-md-4">
                    <img alt="icono_nosotros" className="img-fluid mb-4" src={icono_seguridad} />
                    <h2>Seguridad</h2>
                    <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et sunt amet impedit, earum obcaecati placeat eius odio possimus laboriosam voluptatem!
                    </p>
                </div>
                <div className="col-md-4">
                    <img alt="icono_cursos" className="img-fluid mb-4" src={icono_destinos} />
                    <h2>Mejores Destinos</h2>
                    <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et sunt amet impedit, earum obcaecati placeat eius odio possimus laboriosam voluptatem!
                    </p>
                </div>
                <div className="col-md-4">
                    <img alt="icono_precios" className="img-fluid mb-4" src={icono_precios} />
                    <h2>Mejores Precios</h2>
                    <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et sunt amet impedit, earum obcaecati placeat eius odio possimus laboriosam voluptatem!
                    </p>
                </div>
                </div>
            </div>
            </div>
        </Fragment>
    )
    
}

export default Nosotros;