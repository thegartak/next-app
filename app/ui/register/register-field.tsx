'use client';

import {useState, useEffect, useActionState} from 'react';
import Link from 'next/link';
import Form from 'next/form';
import {registerEmployee} from '@/app/actions';

/*interface DataType {
  id: number,
  name: string,
  job: string
}*/

export function RegisterField(){

  const [postdata, action, isPending] = useActionState(registerEmployee, undefined);
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [data, setData] = useState([{
    id: 0,
    name: '',
    job: ''
  }]);

  /*const logiknFnc = () => {   
    setData([...data, {firstName, lastName, email}])
  }*/
/*
  useEffect(() => {
    const employee  = async () => {
      const data = await fetch('http://localhost:8000/emp');
      const posts = await data.json();
      setData(posts)
    }
    employee()
  },[]);*/

  return(
    <>
    <Form action={action}>
    
    <input onChange={(e) => setFirstName(e.target.value)} className="border-blue-800 border-2 rounded-md" type="text" placeholder='Name' name="name"  />
    <input onChange={(e) => setEmail(e.target.value)} className="border-blue-800 border-2 rounded-md" type="text"  placeholder='Email' name="email" />
    <input onChange={(e) => setPassword(e.target.value)} className="border-blue-800 border-2 rounded-md" type="text" placeholder='Passord' name="password" />
    <input onChange={(e) => setPasswordConfirm(e.target.value)} className="border-blue-800 border-2 rounded-md" placeholder='Passord Confirm' type="text" name="password_confirmation" />
    <button type="submit" className="w-40 border-blue-800 border-2 rounded-md bg-gray-800 text-white">Register</button>
    </Form>

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