import React, { useEffect, useState } from 'react'
// import { navigate, useNavigate } from 'react-router-dom';
import './formNewPost.scss'
import { useForm } from 'react-hook-form';
import Modal from "react-modal";
import { savePost, traerPosts } from '../../service/peticiones/peticiones';
import { useNavigate } from 'react-router-dom';


function FormNewPost({ isOpen, onRequestCloset }) {

  const {
  register,
  handleSubmit,
  formState: { errors }, 
  
  } = useForm();
  
const navigate = useNavigate();

  const onSubmit = async(data) => {
    console.log(data)
    const response = await savePost(data)

    console.log(response);
    
    if (response) {
       console.log("registrado")
       navigate('/')
    }else {
      console.log('error')
        reset({
            description: '',
            url: '',
        })
    }
  
  };
    

  return (
    <Modal isOpen={isOpen} onRequestCloset={onRequestCloset} className="modal">
    <div className="newPost">
    
    <h1 className="loginAdmi__titulo">New Post</h1>

    <form 
    onSubmit={handleSubmit(onSubmit)} >
      <div>
        <label>
          <span>Description</span>
          <input 
            name="description"
            type="text"
            placeholder="Description"
            {...register("description", { required: true })}
          />
        </label>
      </div>
      <div>
        <label >
          <span >Image</span>
          <input
            name="url"
            type="url"
            placeholder="Post"
            {...register("url", { required: true })}
          />
        </label>
      </div>
      <button  type="submit">Published</button>
      <button  onClick={onRequestCloset}> X</button>

    </form>
  </div>
</Modal>

  )
}

export default FormNewPost