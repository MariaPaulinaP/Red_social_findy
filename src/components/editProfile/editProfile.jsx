import React from 'react'
import { useForm } from 'react-hook-form';
import Modal from "react-modal";
import { useNavigate } from 'react-router-dom';
import { savePost } from '../../service/peticiones/peticiones';

function EditProfile({ isOpen, onRequestCloset }) {

    const {
        register,
        handleSubmit,
        formState: { errors }, 
        } = useForm();
        
      const navigate = useNavigate();
      
        const onSubmit = async(data) => {
          console.log(data);
          const newPhoto = data.photo; 
          localStorage.setItem("NewPhoto", newPhoto)
          
          const newState = data.state; 
          localStorage.setItem("NewState", newState)

        };

   

     
  return (

    <Modal isOpen={isOpen} onRequestCloset={onRequestCloset} className="modal">
        <button  onClick={onRequestCloset} className='btn__salir' > X</button>

        <div className="newPost">
    
    <h1 className="loginAdmi__titulo">Actualizar Perfil</h1>

    <form 
    onSubmit={handleSubmit(onSubmit)} >
      <div>
        <label>
         Foto de perfil
        </label>
          <input 
            name="photo"
            type="url"
            placeholder="URL foto de perfil"
            {...register("photo", { required: true })}
          />
      </div>
      <div>
        <label >
         Estado
        </label>  
          <input
            name="state"
            type="text"
            placeholder="Estado"
            {...register("state", { required: true })}
          />
      </div>
      <button  type="submit" className='btn__publicar'>Actualizar</button>

    </form>
  </div>
        
          
    </Modal>

  )
}

export default EditProfile