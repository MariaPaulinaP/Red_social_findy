import React, { useEffect, useState } from 'react'
import './profile.scss'
import puntos from '../../assests/Group 13.png'
import circular from '../../assests/Group 12.png'
import atras from '../../assests/Vector.png'
import principal from '../../assests/PRINCIPAL.png'
import { traerPosts } from '../../service/peticiones/peticiones'
import { useNavigate, useParams } from 'react-router-dom'


const Profile = () => {

const [imagenesPost, setImagenesPost] = useState([])
const navigate = useNavigate();

const traerData = async() =>{
  try {
    const dataPost = await traerPosts()
    setImagenesPost(dataPost)
    return dataPost
  } catch (error) {
    return []
  }
}

useEffect(() => {
  traerData()
}, [])


  const back  = () => {
    navigate("/")
  }


const cargarDetalles = (user) => {  
  navigate(`/details/${user.id}`, {state: user})
}



  return (
    <>
      <figure className='container__figure'>
        <img src={atras} alt="principal" className='atras' onClick={back} />
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
            {
                imagenesPost.map((user, index) => (
                  <img key={index} src={user.url} className='imagenes' onClick={() => {cargarDetalles(user)}}/> 
                ))
            }
          </div>
        </section>

       
    </>
  )
}

export default Profile