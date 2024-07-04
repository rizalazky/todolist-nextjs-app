'use server'

import { getSessionData, signIn } from "@/auth";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { permanentRedirect, redirect } from "next/navigation";


 

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

  export async function getListDetail(id:string){
    const sessionData = await getSessionData();
    const token = await sessionData.token
    const apiGetList = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${id}/items`,{
      headers : {
        'Content-Type' : 'application/json',
        "Authorization" : `Bearer ${token}`
      },
      method : 'GET'
    })
    
    if(!apiGetList.ok){
      return false;
    }
    const response = await apiGetList.json()

    return response;
  }

  export async function addList(formData:FormData){
    console.log('FORMDATA',formData.get('list_desc'))
    try {
      const sessionData = await getSessionData();
      const token = await sessionData.token
      const apiAddNewList = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/list`,{
        headers : {
          'Content-Type' : 'application/json',
          "Authorization" : `Bearer ${token}`
        },
        method : 'POST',
        body:JSON.stringify({
          listDesc : formData.get('list_desc')
        })
      })
     
      if(!apiAddNewList.ok){
        return false;
      }
      const response = await apiAddNewList.json()
      console.log(response)
      if(response.status == 'FAIL'){
        return false;
      }

      
    } catch (error) {
      console.log(error)
      return error;
    }
    revalidatePath('/')
    permanentRedirect('/');
  }
 
export async function authenticate(_currentState: unknown,formData: FormData) {
  
 
  return await signIn(_currentState,formData)
}

