import React from 'react'
import './profile.scss'
import puntos from '../../assests/Group 13.png'
import circular from '../../assests/Group 12.png'
import atras from '../../assests/Vector.png'
import principal from '../../assests/PRINCIPAL.png'
import foto1 from '../../assests/foto1.png'
import foto2 from '../../assests/foto2.png'
import foto3 from '../../assests/foto3.png'
import foto4 from '../../assests/foto4.png'

const Profile = () => {
  return (
    <>
      <figure className='container__figure'>
        <img src={atras} alt="principal" className='atras' />
        <img src={principal} alt="principal" className='principal'/>
        <img src={puntos} alt="puntos" className='puntos'/>
      </figure>

      <section className='container__info'>
        <img src={circular} alt="" className="circular" />
        <span className='info__followers'>10.7 M <br /> Followers</span>
        <div className='info__personal'>
          <h3>Jennie Kim</h3>
          <span className='info__personal-span'>J. Hello guys <br /> Follow me and like my post</span>
        </div>
        <span className='info__likes'>108.3 M <br /> Likes</span>
        <div className='info__botones'> 
          <button className='info__btn'>Follow</button>
          <button className='info__btn'>Messages</button>
        </div>
      </section>


        <section className="container__fotos">
          <div className='categorias'>
            <span>Fotos</span>
            <span>Videos</span>
            <span>Album</span>
            <span>Tag</span>
          </div>
          <div className='fotos'>
            <img src={foto1} alt="foto1" className='imagenes'/>
            <img src={foto2} alt="foto2" className='imagenes'/>
            <img src={foto3} alt="foto3" className='imagenes'/>
            <img src={foto4} alt="foto4" className='imagenes'/>
          </div>
        </section>

       
          <div className='form__publicacion'>
            <h2>Descripcion</h2>
            <textarea name="" id="" cols="20" rows="8"></textarea>
           <hr />
            <h2>Imagen</h2>
            <img src="" alt="" placeholder='Poner aqui la ruta de la imagen por favor'/>
          </div>
    </>
  )
}

export default Profile