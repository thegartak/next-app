'use client';

import {useState, useEffect, useActionState} from 'react';
import Link from 'next/link';
import Form from 'next/form';
import { trying} from '@/app/actions';
import { LogoutBtn } from "@/app/ui/header/logout-btn";
import axios from "axios";
import Cookies from 'universal-cookie';
/*interface DataType {
  id: number,
  name: string,
  job: string
}*/

export function Trying(){

  
 // const [postdata, action, isPendingout] = useActionState(trying, undefined);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [postDat, setPostDat] = useState([]);

/*
  async function sanctum(){

    await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
      withCredentials: true,
    })
  }*/

  async function tryingFnc() {

    const cookies = new Cookies(null, { path: '/' });

console.log(cookies.get('XSRF-TOKEN'))

    const {data} = await axios.post('http://localhost:8000/api/trying', {
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
  }



  useEffect(() => {
   // sanctum();

  },[]);

  return(
    <>
    <button className="bg-blue-200 p-2 rounded-md shadow-md hover:bg-sky-700" onClick={tryingFnc}>Trying</button>

    <p>{/*postDat ? postDat.name : ''*/}</p>
    <p>{/*postDat?.title*/}</p>

  </>
  )
}