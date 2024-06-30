'use server'

import { redirect } from "next/navigation";


 
 
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

  return redirect('/')
}