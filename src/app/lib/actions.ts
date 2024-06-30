'use server'

import { getSessionData, signIn } from "@/auth";
import { cookies } from "next/headers";


 

  export async function getList(){
    const sessionData = await getSessionData();
    const token = await sessionData.token
    const apiGetList = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/list`,{
      headers : {
        'Content-Type' : 'application/json',
        "Authorization" : `Bearer ${token}`
      },
      method : 'GET'
    })
    console.log(apiGetList)
    if(!apiGetList.ok){
      return false;
    }
    const response = await apiGetList.json()
    

    return response;
  }
 
export async function authenticate(_currentState: unknown,formData: FormData) {
  
 
  return await signIn(_currentState,formData)
}

