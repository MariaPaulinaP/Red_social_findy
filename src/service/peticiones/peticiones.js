import axios from "axios"

const URL_BACK = 'https://red-social-findy-back.onrender.com'

const endpoits = {
    users : `${URL_BACK}/users`, 
    posts : `${URL_BACK}/posts`, 
    comments : `${URL_BACK}/comments`, 
}

export const traerUsers = async () => {
    try {
        const {data} = await axios.get(endpoits.users)
        return data
        
    } catch (error) {
        return []
    }
}
export const traerPosts = async () => {
    try {
        const {data} = await axios.get(endpoits.posts)
        return data
        
    } catch (error) {
        console.log(error);
        return []
    }
}
export const traerComments = async () => {
    try {
        const {data} = await axios.get(endpoits.comments)
        return data
        
    } catch (error) {
        return []
    }
}


export const savePost = async (user) => {
    try {
        const {data} = await axios.post(endpoits.posts, {...user})
        return data;
    } catch (error) {
        console.log(error);
        return null
    }
   
}