//'use client'

import axios from "axios";

export async function sanctum(){
  await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
    withCredentials: true,
  })
}

export async function sanctumCheckToken(cookie: string){
  const {data} = await axios.get('http://localhost:8000/api/check-token', {
    headers: {
      'X-XSRF-TOKEN': cookie,
      Accept: 'application/json',
    },
    withCredentials: true,
  })
  console.log(data)
  return data;
}
