'use client';

import {useState, useEffect, useActionState} from 'react';
import Link from 'next/link';
import Form from 'next/form';
import axios from "axios";
import Cookies from 'universal-cookie';
import { logoutEmployee} from '@/app/actions';
import { LogoutBtn } from "@/app/ui/header/logout-btn";
/*interface DataType {
  id: number,
  name: string,
  job: string
}*/

export function LogoutField(){

  
  const [postdata, action, isPendingout] = useActionState(logoutEmployee, undefined);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [roleId, setRoleId] = useState(null);
  const [data, setData] = useState([{
    id: 0,
    name: '',
    job: ''
  }]);

  /*const logiknFnc = () => {   
    setData([...data, {firstName, lastName, email}])
  }*/

    async function checkToken(){

      const cookies = new Cookies(null, { path: '/', httpOnly: true });
      console.log(cookies.get('XSRF-TOKEN')); // Pacman
    const {data} = await axios.post('http://localhost:8000/api/check', {
    }, {
      headers: {
        'X-XSRF-TOKEN': cookies.get('XSRF-TOKEN'),
      //  'app_session': `${poho2.value}`,
        Accept: 'application/json',
      },
      withCredentials: true,
    })
    console.log(data)
    if(data && data?.role_id){
      setRoleId(data.role_id);
    }
    
  }

  useEffect(() => {

  


 // checkToken();

  },[]);

  return(
    <>
  
    

    {/*roleId === 1 && */
      <LogoutBtn />
    }


  </>
  )
}