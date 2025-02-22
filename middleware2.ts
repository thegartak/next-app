
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { sanctumCheckToken } from '@/app/sanctum-token';
import axios from "axios";
import { cookies } from 'next/headers'

export async function middleware(request: NextRequest) {
  const a: string = '5'

  const cookieStore = await cookies()
  const theme = cookieStore.get('XSRF-TOKEN')
  
  

  if(theme && theme.value !== undefined){
    console.log(theme.value)
  const {data} = await axios.get('http://localhost:8000/api/check-token', {
    headers: {
      'X-XSRF-TOKEN': theme.value,
      Accept: 'application/json',
    },
    withCredentials: true,
  })
  console.log(data)
  
  return NextResponse.redirect(new URL('/login', request.url))
  //return data;
  }


  if(a === '4'){
    return NextResponse.redirect(new URL('/login', request.url))
  }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/',
}
