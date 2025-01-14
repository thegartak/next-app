'use client';

import {useState, useEffect, useActionState} from 'react';
import Link from 'next/link';
import Form from 'next/form';
import {loginEmployee} from '@/app/actions';
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

export function LoginField(){
 
  const [postdata, action, isPending] = useActionState(loginEmployee, undefined);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [emailo, setEmailo] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [cook, setCook] =useState('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [data, setData] = useState([{
    id: 0,
    name: '',
    job: ''
  }]);



  /*const logiknFnc = () => {   
    setData([...data, {firstName, lastName, email}])
  }*/


    async function login() {
    //  const cookies = new Cookies(null, { path: '/', httpOnly: true });
    //  console.log(cookies.get('XSRF-TOKEN')); // Pacman
  


        const {data} = await axios.post('http://localhost:8000/api/login', {
          email: emailo,
          password: password
        }, {
          headers: {
          //  'X-XSRF-TOKEN': cookies.get('XSRF-TOKEN'),
          //  'app_session': `${poho2.value}`,
            Accept: 'application/json',
          },
          withCredentials: true,
        })
        console.log(data)
        if(data.token && data.token.plainTextToken){
              sanctum();

       //   cookies.set('admin-token', data.token.plainTextToken);
          redirect('/')
        }
       /*  const data = await fetch('http://localhost:8000/api/login', {
            headers: {
            //    Authorization: `Bearer ${oho.value}`,
                Accept: 'application/json',
              },
              method: "POST",
              body: JSON.stringify({
                email: 'g.artak@yahoo.com',
                password: 'aaaaaaa'
              }),
            //  body: formData,
             credentials: 'include'
            });
    
            const posts = await data.json();*/
        
      //  

    }

  useEffect(() => {


  },[]);

  return(
    <>
   {/* <Form action={action}>
    

    <input onChange={(e) => setEmail(e.target.value)} className="border-blue-800 border-2 rounded-md" type="text"  placeholder='Email' name="email" />
    <input onChange={(e) => setPassword(e.target.value)} className="border-blue-800 border-2 rounded-md" type="text" placeholder='Passord' name="password" />
    
    <button type="submit" className="w-40 border-blue-800 border-2 rounded-md bg-gray-800 text-white">Login</button>
    </Form>*/}




    <h1 className="text-blue-700">User Login</h1>

    <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmailo(e.target.value)} className="border-blue-800 border-2 rounded-md" type="text"  placeholder='Email' name="email" />
    <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} className="border-blue-800 border-2 rounded-md" type="text" placeholder='Passord' name="password" />
    
    <button className="w-40 border-blue-800 border-2 rounded-md bg-gray-800 text-white" onClick={login}>Login</button>
  
    <div>
      <Link href="/admin/login">go to Admin</Link>
    </div>
    {JSON.stringify(postdata)}
    {/*JSON.stringify(data)*/}    
    <ul>
    {data.map((dat) => {
      return(
        <li key={dat.id}>{dat.name} - <span className="text-red-600">{dat.job}</span></li>
      )
    })}
    </ul>
  </>
  )
}