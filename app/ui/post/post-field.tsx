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
  const [post, setPost] = useState([]);
  const cookies = new Cookies(null, { path: '/' });

    async function getPostFnc() {
      const {data} = await axios.get('http://localhost:8000/posts', {
        headers: {
          'X-XSRF-TOKEN': cookies.get('XSRF-TOKEN'),
        //  'app_session': `${poho2.value}`,
          Accept: 'application/json',
        },
        withCredentials: true,
      })
      console.log(data)
      setPost(data);
      
    }

    async function getPostByFnc(id: number) {
      const {data} = await axios.get(`http://localhost:8000/posts/${id}`, {
        headers: {
          'X-XSRF-TOKEN': cookies.get('XSRF-TOKEN'),
        //  'app_session': `${poho2.value}`,
          Accept: 'application/json',
        },
        withCredentials: true,
      })
      console.log(data)
    //  setPost(data);
      
    }


    async function postFnc() {
      
    //  console.log(cookies.get('XSRF-TOKEN')); // Pacman
  


        const {data} = await axios.post('http://localhost:8000/posts', {
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
      console.log(cookies.get('XSRF-TOKEN'));
      const {data} = await axios.put(`http://localhost:8000/posts/${id}`, {
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
    <button className="w-40 border-green-800 border-2 rounded-md bg-green-400 text-white" onClick={getPostFnc}>Get Post</button>

    <table>  
      <tbody>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
          <th>User ID</th>
        </tr>
        {post.map((data: any) => 
          <tr key={data.id}>
            <td className="border-blue-800 border-2" onClick={() => getPostByFnc(data.id)}>{data.id}</td>
            <td className="border-blue-800 border-2">{data.title}</td>
            <td className="border-blue-800 border-2">{data.body}</td>
            <td className="border-blue-800 border-2">{data.user_id}</td>
          </tr>
        )}
        </tbody> 
    </table>
  </>
  )
}