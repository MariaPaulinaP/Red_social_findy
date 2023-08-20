import React from 'react'
import './home2.scss'
import logo from "../../assests/logo.png"
import chats from "../../assests/chats.png"
import corazon from "../../assests/corazon.png"
import imgenCentral from "../../assests/JENNIE.png"
import fotoRedonda from "../../assests/fotoRedonda.png"
import enviarPost from "../../assests/enviarPost.png"
import comentario from "../../assests/comentario.png"
import guardar from "../../assests/guardarPost.png"

const Home2 = () => {
  return (
    <article className='container__padre'>

    
        <figure className='container__figure'>
            <img src={logo} alt="logo" />
            <div className='header__logos'>
                <img src={corazon} alt="corazon" />
                <img src={chats} alt="chats" />
            </div>
        </figure>

        <figure className="container__estados">
            <div className='container__circulares'>
                <img src={fotoRedonda} alt="Estado +" className='estados__circular'/>
                <span>nombre 1</span>
            </div>
            <div className='container__circulares'>
                <img src={fotoRedonda} alt="Estado +" className='estados__circular'/>
                <span>nombre 2</span>
            </div>
            <div className='container__circulares'>
                <img src={fotoRedonda} alt="Estado +" className='estados__circular'/>
                <span>nombre 3</span>
            </div>
            <div className='container__circulares'>
                <img src={fotoRedonda} alt="Estado +" className='estados__circular'/>
                <span>nombre 4</span>
            </div>
            <div className='container__circulares'>
                <img src={fotoRedonda} alt="Estado +" className='estados__circular'/>
                <span>nombre 5</span>
            </div>
        </figure>

        <section className='container__ventana'>
            <div className='ventana__datos'>
                <img src={fotoRedonda} alt="" />
                <h3>
                    Jennie kim
                </h3>
            </div>

            <img src={imgenCentral} alt="" className='imagenPrincipal'/>

            <div className='ventana__iconos'>
                <div className="iconos">
                    <img src={corazon} alt="" />
                    <span>50k</span>
                </div>
                <div className="iconos">
                    <img src={enviarPost} alt="" />
                    <span>50k</span>
                </div>
                <div className="iconos">
                    <img src={comentario} alt="" />
                    <span>50k</span>
                </div>
                <img src={guardar} alt="" className='iconoGuardar' />
            </div>

            <div className='ventana__comentario'>
                <p><strong>Lorem ipsum</strong> consectetur adipisicing elit. Quaerat nemo voluptatem sunt praesentium totam maxime saepe, repellat omnis cupiditate. Vero sit, deleniti ea expedita voluptas quo, quasi consequatur consectetur, repudiandae necessitatibus recusandae nostrum dignissimos repellat maxime sequi error ab beatae.</p>
            </div>

        </section>

    <div className="footer">
    <svg xmlns="http://www.w3.org/2000/svg" width="428" height="57" viewBox="0 0 428 57" fill="none">
        <path d="M0 0C0 0 90 0 132.5 0C186.239 0 170.5 45.5 214 45.5C257.5 45.5 240.261 -1.66825e-05 294 0C333.5 1.22622e-05 428 0 428 0V57H0V0Z" fill="#FF7674"/>
    </svg>
    </div>

    </article>
  )
}

export default Home2