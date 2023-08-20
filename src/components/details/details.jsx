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
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { endpoits } from "../../service/peticiones/peticiones";
import axios from "axios";
import Swal from "sweetalert2";


function Details() {
  const [modal, setModal] = useState(false);
  const [info, setInfo] = useState({});
  const location = useLocation();
 
  const [comentarios, setcomentarios] = useState("")
  const [datos, setDatos] = useState([])

  useEffect(()=> {
    if(location.state.id) {
        setInfo(location.state)
        traerDatosApi(location.state.id)
    } 
}, [])

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const navigate = useNavigate()

  const back  = () => {
    navigate("/profile")
  }

  const home  = () => {
    navigate("/")
  }

  const agregandoComentarios = ({target}) => {
    const valor = target.value;
    setcomentarios(valor)
  }

  const handeClickSend = async() => {
    try {
      const response = await axios.post(`${endpoits.posts}/${info.id}/comments`, {text: comentarios})
      Swal.fire('Comentario enviado exitosamente')
      navigate("/profile")
      return response
      
    } catch (error) {
      console.log(error);
    }
  }

  const traerDatosApi = async(postId) => {
    try {
      const {data} = await axios.get(`${endpoits.posts}/${postId}/comments`)
      setDatos(data)
      return data
      
    } catch (error) {
      return []
    }
  }
  return (
    <section className="details">

      <figure className="details__barra">
        <img className="details__barra__img" src={barraCel} alt="Barra" />
      </figure>
      <figure className="details__iconos">
        <img className="details__iconos__fecha" src={flechaLeft} alt="Fecha" onClick={back} />
        <img className="details__iconos__puntos" src={puntos} alt="Puntos" />
      </figure>
      <figure className="details__foto">
        <img className="details__foto__img" src={info.url} alt="Foto" />
      </figure>

      <div className="datos">
        <figure className="datos__figPerfil">
          <img
            className="datos__figPerfil__imgPerfil"
            src={info.url}
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
            <img className="input__fig__img" src={info.url} alt="" />
        </figure>

        <input className="input__escribir" type="text" placeholder="Write comment as username...."  onChange={agregandoComentarios}/>
        <img className="input__icono" src={enviarRigth} alt="" onClick={handeClickSend}/>
      </div>

      <div className="contenedor__comentarios">
        {datos && datos.map((comment, index) => (
            <div key={index} className="linea__comentarios">{comment.text}</div>
          ))
        }
      </div>

      <div className="footer">
     
   
        <article className="footer__iconos">
        <img className="footer__casa"  src={casa} alt="casa" onClick={home} />
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
