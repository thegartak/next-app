//'use client'

//import {redirect} from 'next/navigation';
import axios from "axios";
//import { cookies } from 'next/headers';
import Cookies from 'universal-cookie';
import { redirect } from 'next/navigation';

interface axiosDataType {
  status: number;
  token: boolean;
}

export async function logoutFunction(){
  const axiosData: axiosDataType = {status: 100, token: false};

  try {
  const cookies = new Cookies(null, { path: '/' });

  console.log(cookies.get('XSRF-TOKEN'))
  
      const {data} = await axios.post('http://localhost:8000/logout', {
        //email: 'g.artak@yahoo.com',
        //password: 'aaaaaaass'
      }, {
        headers: {
          'X-XSRF-TOKEN': cookies.get('XSRF-TOKEN'),
        //  'app_session': `${poho2.value}`,
          Accept: 'application/json',
        },
        withCredentials: true,
      })
      //setPostDat(data);
      console.log(data)
      axiosData.status = data.status;
      axiosData.token = data.token;

    } catch (err) {
      console.log(err);
    }

    if(axiosData.status === 200 && axiosData.token){
      redirect('/login')
    }
}
