import React, { useEffect, useState } from "react";
import "./details.scss";

import barraCel from "../details//assestsDetails/barraBlanca.png";
import flechaLeft from "../details/assestsDetails/flechaLeftBlanca.png";
import fotoPersona from "../details/assestsDetails/fotoMujer.jpg";
import puntos from "../../assests/puntos.png";
import corazon from "../../assests/corazon.png";
import comentario from "../../assests/comentario.png";
import enviarPost from "../../assests/enviarPost.png";
import enviarRigth from "../../assests/enviarRigth.png";
import footer from '../details/assestsDetails/footer.png'; 
import circulo from '../details/assestsDetails/circulo.png'; 
import casa from "../../assests/casa.png";
import lupa from "../../assests/lupa.png";
import campana from "../../assests/campana.png";
import mas from "../../assests/mas.png";
import FormNewPost from "../formNewPost/formNewPost";
import { useLocation, useParams } from "react-router-dom";


function Details() {
  const [modal, setModal] = useState(false);
  const [info, setInfo] = useState({});
  const location = useLocation();
 
  useEffect(()=> {
    if(location.state.id) {
        setInfo(location.state)
    } 
}, [])

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <section className="details">

      <figure className="details__barra">
        <img className="details__barra__img" src={barraCel} alt="Barra" />
      </figure>
      <figure className="details__iconos">
        <img className="details__iconos__fecha" src={flechaLeft} alt="Fecha" />
        <img className="details__iconos__puntos" src={puntos} alt="Puntos" />
      </figure>
      <figure className="details__foto">
        <img className="details__foto__img" src={info.url} alt="Foto" />
      </figure>

      <div className="datos">
        <figure className="datos__figPerfil">
          <img
            className="datos__figPerfil__imgPerfil"
            src={fotoPersona}
            alt="Foto"
          />
        </figure>
        <span className="datos__span">Jennie Kim</span>
        <article className="datos__article">
          <img  className="datos__article__img" src={corazon} alt="" />
          <span>108K</span>
        </article>
        <article className="datos__article">
          <img className="datos__article__img" src={comentario} alt="" />
          <span>108K</span>
        </article>
        <article className="datos__article">
          <img className="datos__article__img" src={enviarPost} alt="" />
          <span>108K</span>
        </article>
      </div>

      <div className="comentario">
        <p className="comentario__parrafo">{info.description}</p>
      </div>

      <div className="input">
      <figure className="input__fig">
          <img className="input__fig__img" src={fotoPersona} alt="" />
      </figure>

      <input className="input__escribir" type="text" placeholder="Write comment as username...."/>
      <img className="input__icono" src={enviarRigth} alt="" />
      </div>



      <div className="footer">
     
   
        <article className="footer__iconos">
        <img className="footer__casa"  src={casa} alt="casa"  />
        <img className="footer__lupa"  src={lupa} alt="lupa"  />
        <img className="footer__mas"  src={mas} alt="lupa"  onClick={openModal}/>
        <img className="footer__campana"  src={campana} alt="campana"  />
        </article>

    
        <img className="footer__circulo"  src={circulo} alt="" onClick={openModal}/>
        
        <img className="footer__fig__img" src={fotoPersona} alt="" />

        <img  className="footer__img" src={footer} alt=""/>
        <FormNewPost isOpen={modal} onRequestCloset={closeModal} />
        
      </div>

     
    </section>
  );
}

export default Details;
