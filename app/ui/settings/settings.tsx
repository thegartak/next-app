'use client';

import {useState, useEffect} from 'react';

//import axios from "axios";
import Cookies from 'universal-cookie';
import Link from 'next/link';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { sanctumCheckToken } from '@/app/sanctum-token';



export function Settings(){
 



  const wonderImages = [
    {
      id: 1,
      name: 'name 1',
      src: 'orders.co1.jpeg',
      location: 'Yerevan'
    },
    {
      id: 2,
      name: 'name 2',
      src: 'orders.co2.jpeg',
      location: 'Yerevan'
    },
    {
      id: 3,
      name: 'name 3',
      src: 'orders.co3.jpeg',
      location: 'Yerevan'
    },
    {
      id: 4,
      name: 'name 4',
      src: 'orders.co4.jpeg',
      location: 'Yerevan'
    }
  ];
  /*const logiknFnc = () => {   
    setData([...data, {firstName, lastName, email}])
  }*/




  useEffect(() => {

    try{
      // if(cookies.get('XSRF-TOKEN') !== undefined){
         //  const res = sanctumCheckToken(cookies.get('XSRF-TOKEN'));
         const res = sanctumCheckToken();

      console.log(res)

         // res.then((data: any) => {
         //   console.log(data)
         /*   if(data && data.user_id){
              setGuard(true);
            }
           console.log(data);
           if(data.status === 403){
             redirect('/login');
           }*/
      //    })
          
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

    <>
      
      <h1>Some photo </h1>
      {wonderImages.map(({id, src, name}) => (
       <Link href={`/photo/${id}`}  key={id} >
        <Image 
         
          alt={name}
          src={`/assets/images/${src}`}
          width={300}
          height={100}  
          />
          </Link>
   
      ))}
      <p className="text-blue-700">
        <Link href="/photo" >Link for photo</Link>
      </p>
      </>
    
    </>
  )
}