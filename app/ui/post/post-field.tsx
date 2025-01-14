'use client';

import {useState, useEffect} from 'react';
import Link from 'next/link';
import Form from 'next/form';

import axios from "axios";
import Cookies from 'universal-cookie';
import { redirect } from 'next/navigation';
import { sanctum } from '@/app/sanctum';
//import { cookies } from 'next/headers';
/*interface DataType {
  id: number,
  name: string,
  job: string
}*/

interface LoginForm {
  email: string;
  password: string
}

export function PostField(){ 
  
  const [id, setId] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [bodyText, setBodyText] = useState<string>('');
  const cookies = new Cookies(null, { path: '/' });


    async function postFnc() {
      
    //  console.log(cookies.get('XSRF-TOKEN')); // Pacman
  


        const {data} = await axios.post('http://localhost:8000/api/posts', {
          title: title,
          body: bodyText
        }, {
          headers: {
            'X-XSRF-TOKEN': cookies.get('XSRF-TOKEN'),
          //  'app_session': `${poho2.value}`,
            Accept: 'application/json',
          },
          withCredentials: true,
        })
        console.log(data)
    }

    async function updatePostFnc(){
      const {data} = await axios.put(`http://localhost:8000/api/posts/${id}`, {
        title: title,
        body: bodyText
      }, {
        headers: {
          'X-XSRF-TOKEN': cookies.get('XSRF-TOKEN'),
        //  'app_session': `${poho2.value}`,
          Accept: 'application/json',
        },
        withCredentials: true,
      })
      console.log(data)
    }



  return(
    <>

    <h1 className="text-blue-700">User Login</h1>

    <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setId(e.target.value)} className="border-blue-800 border-2 rounded-md" type="text"  placeholder='ID' name="id" />
    <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} className="border-blue-800 border-2 rounded-md" type="text"  placeholder='Title' name="title" />
    <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBodyText(e.target.value)} className="border-blue-800 border-2 rounded-md" type="text" placeholder='Body' name="bodytext" />
    
    <button className="w-40 border-blue-800 border-2 rounded-md bg-gray-800 text-white" onClick={postFnc}>Post Article</button>
    <button className="w-40 border-blue-800 border-2 rounded-md bg-blue-800 text-white" onClick={updatePostFnc}>Update Post</button>

  </>
  )
}