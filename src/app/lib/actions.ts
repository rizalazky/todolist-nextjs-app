'use server'

import { cookies } from "next/headers";
import { redirect } from "next/navigation";


 async function setSession(data:any){
  cookies().set('session',data,{
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // One week
    path: '/',
  })
 }
 
export async function authenticate(_currentState: unknown,formData: FormData) {
  
  let data = {
    email : formData.get('email'),
    password : formData.get('password')
  }

  const apiPost = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`,{
    method : 'POST',
    headers : {
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify(data)
  });

  if(!apiPost.ok){
    return 'Something went wrong.'
  }

  const responseAPI = await apiPost.json();
  console.log('mes',responseAPI.message)
  if(responseAPI.status === 'FAIL'){
    return responseAPI.message
  }

  // console.log(responseAPI);
  // return false;
  await setSession({token: responseAPI?.data.token,refreshToken:responseAPI.data.refreshToken})

  return redirect('/')
}