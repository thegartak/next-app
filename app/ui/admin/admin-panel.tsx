'use client';

import {useState, useEffect, useActionState} from 'react';
import Link from 'next/link';
import Form from 'next/form';
import {loginEmployee} from '@/app/actions';
import axios from "axios";
import Cookies from 'universal-cookie';
import { redirect } from 'next/navigation';
//import { cookies } from 'next/headers';
/*interface DataType {
  id: number,
  name: string,
  job: string
}*/



export function AdminPanel(){
 


  useEffect(() => {
    

  },[]);

  return(



    <h1>Admin Panel</h1>

    
  )
}