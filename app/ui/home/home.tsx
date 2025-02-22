'use client';

import {useState, useEffect, useActionState, useLayoutEffect} from 'react';
import Link from 'next/link';
import Image from "next/image";
import Form from 'next/form';


import {useAppDispatch, useAppSelector} from '@/app/hooks';




import {increment} from '@/app/features/counter/counter-slice';
import { useFetchBreedsQuery } from '@/app/features/dogs/dogs-api-slice';

import {loginEmployee} from '@/app/actions';


import axios from "axios";
import Cookies from 'universal-cookie';
import { redirect } from 'next/navigation';
import { sanctumCheckToken } from '@/app/sanctum-token';
import { LogoutField } from "@/app/ui/login/logout-field";
import { PostField} from "@/app/ui/post/post-field";

import  styles  from '@/app/global-css/loading.module.css';
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
 
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const {data, isFetching, } = useFetchBreedsQuery();

  const cookies = new Cookies(null, { path: '/' });
  const [guard, setGuard] = useState(false); 

  const [postdata, action, isPending] = useActionState(loginEmployee, undefined);

  

  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [emailo, setEmailo] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [cook, setCook] =useState('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  /*const [data, setData] = useState([{
    id: 0,
    name: '',
    job: ''
  }]);*/
  const photos: number[] = [1, 2, 3, 4];


  /*const logiknFnc = () => {   
    setData([...data, {firstName, lastName, email}])
  }*/

  const incr = () => {
    dispatch(increment());
  }


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

/*
    try{
 
        const res = sanctumCheckToken();
          res.then((data: any) => {
            console.log(data);
           // if(data && data.user_id){
              setGuard(true);
           // }
           
           if(data && data.status === 403){
              redirect('/login');
           }
          }).catch(err => {
            redirect('/login');
          })
          
           //console.log(some)
          // redirect('/login');
       
     }catch(err){
      
       console.log(err)
       redirect('/login');
     }
  //  

     console.log('what?')
  //view();


*/

  },[]);

  return(

 

  <>
{(data !== undefined &&  data?.length > 0) ?
 
<div>

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       NextJs Main page 
       </main>   



      <h1>data length: {data?.length}</h1>



       <div  className="text-center">
        {photos.map((data, key) => {
          return(
            <Link key={key} href={`/photo`} ><span className="p-4">{data}</span></Link>
          )
        })
        }
      </div> 



    <h1 className="text-blue-700">Home</h1>
    
    <LogoutField />
    <span>look: </span>
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
          Go to nextjs.org → {count} <button onClick={incr}>Increment</button>
        </span>
      </footer>
    </div>

:
<button type="button" className={styles.animatet} disabled>  
  <svg className="mr-3 size-5 animate-spin" viewBox="0 0 24 24"></svg>  
  Processing…
</button>

}


</>
    
  )
}