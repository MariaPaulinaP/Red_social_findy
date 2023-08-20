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
import { traerPosts, traerUsers } from "../../service/peticiones/peticiones";

const Home2 = () => {
  const [modal, setModal] = useState(false);
  const [imagenesPost, setImagenesPost] = useState([]);
  const [imagenesUsers, setImagenesUsers] = useState([]);

  const traerData = async () => {
    try {
      const dataPost = await traerPosts();
      setImagenesPost(dataPost);
      return dataPost;
    } catch (error) {
      return [];
    }
  };

  const traerDataUsers = async () => {
    try {
      const dataUsers = await traerUsers();
      setImagenesUsers(dataUsers);
      return dataUsers;
    } catch (error) {
      return [];
    }
  };

  useEffect(() => {
    traerData();
    traerDataUsers();
  }, []);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const navigate = useNavigate();

  const handlePerfilClick = () => {
    navigate("/profile");
  };

  console.log(imagenesUsers);

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
      
        {
            // imagenesPost.map((user,index)=>(
                imagenesUsers.map((userData, indexData) => (
                    <section className="container__ventana" key={indexData}>
                    <div className="ventana__datos">
                      <img src={userData.avatar} alt="" />
                      <h3 onClick={handlePerfilClick}>
                        {userData.name}
                        {userData.id}
                        {/* {imagenesPost[indexData].userId } */}
                      </h3>
                    </div>

                    {(( ) => {
                        if (imagenesPost[indexData].userId === userData.id) {
                            return (
                            <img src={imagenesPost[indexData].url} alt="" className="imagenPrincipal" />
                            );
                        } else {
                            return null;
                        }
                        })()}


                    
                    <div className="ventana__iconos">
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
                      <img src={guardar} alt="" className="iconoGuardar" />
                    </div>
                    <div className="ventana__comentario">
                      <p>
                        <strong>Lorem ipsum</strong> consectetur adipisicing elit. Quaerat
                        nemo voluptatem sunt praesentium totam maxime saepe, repellat omnis
                        cupiditate. Vero sit, deleniti ea expedita voluptas quo, quasi
                        consequatur consectetur, repudiandae necessitatibus recusandae
                        nostrum dignissimos repellat maxime sequi error ab beatae.
                      </p>
                    </div>
                  </section>
                    
                ))
            // ))
        }
        
     

      <section className="container__ventana">
        <div className="ventana__datos">
          <img src={fotoRedonda} alt="" />
          <h3 onClick={handlePerfilClick}>Jennie kim</h3>
        </div>

        <img src={imgenCentral} alt="" className="imagenPrincipal" />

        <div className="ventana__iconos">
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
          <img src={guardar} alt="" className="iconoGuardar" />
        </div>

        <div className="ventana__comentario">
          <p>
            <strong>Lorem ipsum</strong> consectetur adipisicing elit. Quaerat
            nemo voluptatem sunt praesentium totam maxime saepe, repellat omnis
            cupiditate. Vero sit, deleniti ea expedita voluptas quo, quasi
            consequatur consectetur, repudiandae necessitatibus recusandae
            nostrum dignissimos repellat maxime sequi error ab beatae.
          </p>
        </div>
      </section>

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
