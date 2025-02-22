'use server'

//import {redirect} from 'next/navigation';
import axios from "axios";
import { cookies } from 'next/headers';
//import Cookies from 'universal-cookie';



export async function registerEmployee(prevState: unknown, formData: FormData){


  try{   
    console.log('register look')   
    const data = await fetch('http://localhost:8000/api/register', {
      headers: {
        Accept: 'application/json'
      },
        method: "POST",
      // body: JSON.stringify(formData),
        body: formData,
      });
     
      const posts = await data.json()
      console.log(posts)



      return posts
      

    }catch(err){
      console.log(err);
  }
}


export async function loginEmployee(prevState: unknown, formData: FormData){
 // const cookieStore = await cookies();
 // const cookieStore2 = await cookies();
  try{      

     /* await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
        withCredentials: true,
      })
      .then(async (response) => {
        const cook = response.headers['set-cookie'];
        if(cook !== undefined){
        
          const words = cook[0].split(';');
          const keyValue = words[0].split('=');
          const [taf] = keyValue[1].split('%')
          //console.log(words)
          cookieStore.set({
            name: keyValue[0],
            value: taf + '=' ,
          // httpOnly: true,
          maxAge: 7200,
          path: '/',
          sameSite: 'lax'
      
          });

          const words2 = cook[1].split(';');
          const keyValue2 = words2[0].split('=');
          const [taf2] = keyValue2[1].split('%')
          //console.log(words)
          cookieStore.set({
            name: keyValue2[0],
            value: taf2 + '=',
            httpOnly: true,
            maxAge: 7200,
            path: '/',
            sameSite: 'lax'
          });      
        }
      });*/


    


    /*  const resp = await fetch('http://localhost:8000/sanctum/csrf-cookie', {
          method: "GET",
        //  body: formData,
        //  body: formData,
         credentials: 'include'
        });
        
        if (resp.ok) {
          if(resp.headers !== undefined){
         const cook = resp.headers.getSetCookie();
          console.log(cook[0])
          

        
          const words = cook[0].split(';');
          const keyValue = words[0].split('=');
          const [taf] = keyValue[1].split('%')
          //console.log(words)
          cookieStore.set({
            name: keyValue[0],
            value: taf + '=' ,
          // httpOnly: true,
          maxAge: 7200,
          path: '/',
          sameSite: 'lax'
      
          });

          const words2 = cook[1].split(';');
          const keyValue2 = words2[0].split('=');
          const [taf2] = keyValue2[1].split('%')
          //console.log(words)
          cookieStore.set({
            name: keyValue2[0],
            value: taf2 + '=',
            httpOnly: true,
            maxAge: 7200,
            path: '/',
            sameSite: 'lax'
          });      
          
        }
      }*/
     
      /*
      const poho = cookieStore.get('XSRF-TOKEN')
      const poho2 = cookieStore.get('app_session')
      console.log(poho)
    const data = await fetch('http://localhost:8000/api/login', {
      headers: {
       
      
      //  Authorization: `Bearer ${'eyJpdiI6ImlQSGFnLzFBMmllUS94UTBDbzBWb2c9PSIsInZhbHVlIjoibDRaRFNqMVhnR1hjRkpkNXBpMytIVnkvSVRiT0wvblY2NGxtUUd5eG1iYnpXL2ZtYWp6UW0wS0QxUmVUbXFXNDA3Zi9TUnZweStOWEY3dTZ5OS9IMU10QjBZVUppbGNsbTRCVFJVTjJoV3ljM0RlWThzR2hNSG1YTEtlZEIwS1IiLCJtYWMiOiJiZjE4ZTNjZTQ5OTExZjZjNThlYjYxOGRiNDdmYWQ0ODIxN2FlNjc5MGFlZjQwZWFlZDUyM2I5YTU2MDIwOGRiIiwidGFnIjoiIn0'}`,
        Accept: 'application/json',
        'X-XSRF-TOKEN': poho !== undefined ? poho.value : '',
        'app_session': poho2 !== undefined ? poho2.value : '',
        },
        method: "POST",
        body: formData,
      //  body: formData,
       credentials: 'include'
      });

      const posts = await data.json();
      console.log(posts)
      if(posts.token !== undefined && posts.token?.plainTextToken !== undefined){
        cookieStore.set({
          name: posts.token.accessToken.name,
          value: posts.token.plainTextToken,
          httpOnly: true,
          path: '/',
        });
      }
    //  console.log(posts);

      return posts;*/


    // console.log(posts)  
   //  console.log(posts.token.plainTextToken)  
     //console.log(posts.accessToken)  
     // return data
  //  });
      

    }catch(err){
      console.log(err);
  }
}


export async function logoutEmployee(prevState: unknown, formData: FormData){
  const cookieStore = await cookies();
// const myCookie = '',
//  myCookie = (await cookies()).get('admin-token')

    const oho = cookieStore.get('admin-token')
    if(oho !== undefined){
     // console.log(oho.value)

      const data = await fetch('http://localhost:8000/logout', {
        headers: {
            Authorization: `Bearer ${oho.value}`,
            Accept: 'application/json',
          },
          method: "POST",
          body: formData,
        //  body: formData,
         credentials: 'include'
        });

        const posts = await data.json();
        if(posts.token === 1){
          (await cookies()).delete('admin-token')
        }
       // console.log(posts);

    }
}


