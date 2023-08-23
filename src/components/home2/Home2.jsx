import React, { useEffect, useState } from "react";
import "./home2.scss";
import logo from "../../assests/logo.png";
import chats from "../../assests/chats.png";
import corazon from "../../assests/corazon.png";
import imgenCentral from "../../assests/JENNIE.png";
import fotoRedonda from "../../assests/fotoRedonda.png";
import enviarPost from "../../assests/enviarPost.png";
import comentario from "../../assests/comentario.png";
import guardar from "../../assests/guardarPost.png";

import footer from "../details/assestsDetails/footer.png";
import circulo from "../details/assestsDetails/circulo.png";
import fotoPersona from "../details/assestsDetails/fotoMujer.jpg";
import casa from "../../assests/casa.png";
import lupa from "../../assests/lupa.png";
import campana from "../../assests/campana.png";
import mas from "../../assests/mas.png";

import FormNewPost from "../formNewPost/formNewPost";
import { useNavigate } from "react-router-dom";
import { actualizarLikes, traerPosts, traerUsers } from "../../service/peticiones/peticiones";

const Home2 = () => {
  const [modal, setModal] = useState(false);
  const [imagenesPost, setImagenesPost] = useState([]);
  const [imagenesUsers, setImagenesUsers] = useState([]);
  const [idUsuario, setIdUsuario] = useState({});
  const [likes, setLikes] = useState([])


  const loginEmail = localStorage.getItem("userEmail")
let idUsuarioLogin = 0
imagenesUsers.forEach((dato, index) => {
  if (loginEmail === dato.email) {
    // console.log("Correo encontrado en el índice:", index);
    idUsuarioLogin = index 
  }
 
});

const actualizarUsuario = (id) => {
  const usuario = imagenesUsers[id];
  setIdUsuario(usuario);
};

useEffect(() => {
  actualizarUsuario(idUsuarioLogin)
}, [actualizarUsuario]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataPost = await traerPosts();
        const dataUsers = await traerUsers();
        setImagenesPost(dataPost);
        setImagenesUsers(dataUsers);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);
 

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const navigate = useNavigate();


  const handlePerfilClick = (userData) => {
    navigate(`/profile/${userData.username}`, {state: userData});
  };

  const uniqueUserImages = {};
  const uniqueUserId = {};
  
    imagenesPost.forEach((post) => {
      if (!uniqueUserImages[post.userId]) {
        uniqueUserImages[post.userId] = post.url;
        uniqueUserId[post.userId] = post.id;
      }
  });
 
  // estadoNuevo = estadoNuevo.push(estadoNuevo = estadoNuevo +1)
  let estadoNuevo = 0; 
  
  const handleLikes = async (idPost, estadoNuevo) => {
    estadoNuevo = estadoNuevo +3 ; 
    await actualizarLikes(idPost, estadoNuevo)
    
  }


  
  return (
    <article className="container__padre">
      <figure className="container__figure">
        <img src={logo} alt="logo" />
        <div className="header__logos">
          <img src={corazon} alt="corazon" />
          <img src={chats} alt="chats" />
        </div>
      </figure>

      <figure className="container__estados">
        <div className="container__circulares">
          <img src={fotoRedonda} alt="Estado +" className="estados__circular" />
          <span>nombre 1</span>
        </div>
        <div className="container__circulares">
          <img src={fotoRedonda} alt="Estado +" className="estados__circular" />
          <span>nombre 2</span>
        </div>
        <div className="container__circulares">
          <img src={fotoRedonda} alt="Estado +" className="estados__circular" />
          <span>nombre 3</span>
        </div>
        <div className="container__circulares">
          <img src={fotoRedonda} alt="Estado +" className="estados__circular" />
          <span>nombre 4</span>
        </div>
        <div className="container__circulares">
          <img src={fotoRedonda} alt="Estado +" className="estados__circular" />
          <span>nombre 5</span>
        </div>
      </figure>
      
      {imagenesUsers.map((userData) => {
      const userImage = uniqueUserImages[userData.id];

      return (
        <section className="container__ventana" key={userData.id}>
    
            <div className="ventana__datos">
              <img src={userData.avatar} alt="" />
              <h3>
                {userData.name}
              </h3> 
            </div>
            
            <img src={userImage} alt="" className="imagenPrincipal" />
            
            <div className="ventana__iconos">
              <div className="iconos">
                
                {/* AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII */}
                <img src={corazon} alt="" onClick={() => {handleLikes(uniqueUserId[userData.id], estadoNuevo)}}/>
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
              <img src={guardar} alt="" className="iconoGuardar" />
            </div>
            <div className="ventana__comentario">
            <p>
              <strong>{userData.name}</strong>
              {imagenesPost.filter((image) => image.id === userData.id)
                .map((image) => (
                  <p >{image.description}</p>
                ))}
            </p>
            </div>
         
        </section>
      );
    })}
      

      <div className="footerA">
        <article className="footerA__iconosA">
          <img className="footerA__casaA" src={casa} alt="casa" />
          <img className="footerA__lupaA" src={lupa} alt="lupa" />
          <img
            className="footerA__masA"
            src={mas}
            alt="lupa"
            onClick={openModal}
          />
          <img className="footerA__campanaA" src={campana} alt="campana" />
        </article>

        <img
          className="footerA__circuloA"
          src={circulo}
          alt=""
          onClick={openModal}
        />

        <img className="footerA__fig__imgA" src={fotoPersona} alt="" />

        <img className="footerA__imgA" src={footer} alt="" />
        <FormNewPost isOpen={modal} onRequestCloset={closeModal} />
      </div>
    </article>
  );
};

export default Home2;
