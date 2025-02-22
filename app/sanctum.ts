//'use client'


import axios from "axios";
export async function sanctum(){
  await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
    withCredentials: true,
  })
}





