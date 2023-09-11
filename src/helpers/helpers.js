import axios from  'axios';
//Make api Requiest 


export async function register(name){
try{
return await axios.post('/auth/register',{name})

}catch (error){
 
    return {error:"user name dosent exist"}

}

}