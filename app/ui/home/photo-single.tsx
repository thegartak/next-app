'use client';

import {useState, useEffect} from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { sanctumCheckToken } from '@/app/sanctum-token';



export function PhotoSingle(){

  const [guard, setGuard] = useState(false); 
  const params = useParams();


  /*const logiknFnc = () => {   
    setData([...data, {firstName, lastName, email}])
  }*/




  useEffect(() => {

    try{
      // if(cookies.get('XSRF-TOKEN') !== undefined){
           const res = sanctumCheckToken();
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




  },[]);

  return(
    <>
    {guard &&
    <>
      <h1>Photo {params.id}</h1>

      
        <Image 
          alt={`orders.co${params.id}.jpeg`}
          src={`/assets/images/orders.co${params.id}.jpeg`}
          width={300}
          height={100}
          
          />
   


      </>
    }
    </>
  )
}