import React, { useEffect, useReducer, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { initialUser, userReducer } from "../service/admiReducer/admiReducer";
import { createContext } from "react";
import Form from '../components/form/Form'
import { getSession } from "../service/sessionService/sessionService";
import Profile from "../components/profile/Profile";
import FormNewPost from "../components/formNewPost/formNewPost";
import Details from "../components/details/details";
import Home2 from "../components/home2/Home2";
import EditProfile from "../components/editProfile/editProfile";

export const AppContext = createContext({});

const Router = () => {
    const [likes, setLikes] = useState({})
    const [nameUser, setNameUser] = useState([]);
    const [imagenesPost, setImagenesPost] = useState([]);
    
  useEffect(() => {
    const user = getSession();
    if (user?.name) {
      userDispatch({
        type: "login",
        payload: {
          isAutenticated: true,
          user: user,
        },
      });
    }
  }, []);

    const [userLogin, userDispatch] = useReducer(userReducer, initialUser);
    const globalState = {
        user: {
        userLogin,
        userDispatch,
        },
        likes, 
        setLikes, 
        imagenesPost, 
        setImagenesPost
    };

  
  return (
    <AppContext.Provider value={globalState}>
        <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Form/>}/>
                    <Route path='/home' element={<Home2/>}/>
                    <Route path='/formNewPost' element={<FormNewPost/>}/>
                    <Route path='/profile/:name' element={<Profile/>}/>
                    <Route path='/details/:id' element={<Details/>}/>
                    <Route path='/editProfile' element={<EditProfile/>}/>
                </Routes>
        </BrowserRouter>
   </AppContext.Provider>
  )
}

export default Router

