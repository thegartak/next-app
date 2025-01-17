'use client';

import {useState, useEffect, useActionState, useLayoutEffect} from 'react';
import Link from 'next/link';
import Image from "next/image";
import Form from 'next/form';
import {loginEmployee} from '@/app/actions';

import axios from "axios";
import Cookies from 'universal-cookie';
import { redirect } from 'next/navigation';
import { sanctum, sanctumCheckToken } from '@/app/sanctum';
import { LogoutField } from "@/app/ui/login/logout-field";
import { Trying } from "@/app/ui/trying/trying";
import { PostField} from "@/app/ui/post/post-field";
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

export function Home(){
 
  const cookies = new Cookies(null, { path: '/' });
  const [guard, setGuard] = useState(false); 

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

async function view(){
  const {data} = await axios.get('http://localhost:8000/api/users', {
    headers: {
      'X-XSRF-TOKEN': cookies.get('XSRF-TOKEN'),
      Accept: 'application/json',
    },
    withCredentials: true,
  })
  console.log(data)
  return data;
}


  useEffect(() => {

    try{
      // if(cookies.get('XSRF-TOKEN') !== undefined){
           const res = sanctumCheckToken(cookies.get('XSRF-TOKEN'));
          res.then((data: any) => {
            if(data && data.user_id){
              setGuard(true);
            }
           console.log(data);
           if(data.status === 403){
             redirect('/login');
           }
          })
          
           //console.log(some)
          // redirect('/login');
       //}
     }catch(err){
      
       console.log(err)
       redirect('/login');
     }
  //  

     console.log('what?')
  //view();




  },[]);

  return(

 
    <>
  
{guard &&

<div>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       NextJs Main page 
       </main>      
    <h1 className="text-blue-700">Home</h1>
    
    <LogoutField />
    <span>look: </span>
    <Trying />
    <PostField />

    <div>
        <Link href="/login">go to user</Link>
      </div>
            </div>


            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <span className="flex items-center gap-2 hover:underline hover:underline-offset-4">
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </span>
        <span className="flex items-center gap-2 hover:underline hover:underline-offset-4">
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </span>
        <span className="flex items-center gap-2 hover:underline hover:underline-offset-4">
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </span>
      </footer>
    </div>
}


  </>
    
  )
}