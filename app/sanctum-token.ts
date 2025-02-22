//'use server'

import { redirect } from 'next/navigation';
import axios from "axios";
//import Cookies from 'universal-cookie';
//import { cookies } from 'next/headers'

export async function sanctumCheckToken(){

 //   const cookies = new Cookies(null, { path: '/' });
  //const cookieStore = await cookies()

 // const theme = cookieStore.get('XSRF-TOKEN')
  //if(cookies.get('XSRF-TOKEN') !== undefined){

  const {data} = await axios.get('http://localhost:8000/web-token', {
    headers: {
    //  'X-XSRF-TOKEN': cookies.get('XSRF-TOKEN'),
      Accept: 'application/json',
    },
    withCredentials: true,
  })
  //console.log(data)
  if(data && data.status === 403){
    redirect('/login');
 }else{
  return data;
 }

  
  
//}
}

