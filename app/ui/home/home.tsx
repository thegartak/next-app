'use client';

import {useState, useEffect, useActionState, useLayoutEffect} from 'react';
import Link from 'next/link';
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




  useEffect(() => {
    try{
   // if(cookies.get('XSRF-TOKEN') !== undefined){
        const res = sanctumCheckToken(cookies.get('XSRF-TOKEN'));
       res.then((data: any) => {
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

  },[]);

  return(
    <>
   {/* <Form action={action}>
    

    <input onChange={(e) => setEmail(e.target.value)} className="border-blue-800 border-2 rounded-md" type="text"  placeholder='Email' name="email" />
    <input onChange={(e) => setPassword(e.target.value)} className="border-blue-800 border-2 rounded-md" type="text" placeholder='Passord' name="password" />
    
    <button type="submit" className="w-40 border-blue-800 border-2 rounded-md bg-gray-800 text-white">Login</button>
    </Form>*/}




    <h1 className="text-blue-700">Home</h1>
    {}
    <LogoutField />
    <Trying />
    <PostField />
    <div>
        <Link href="/login">go to user</Link>
      </div>
  </>
  )
}