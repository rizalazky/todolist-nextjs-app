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
      method : 'GET',
      cache : "no-store"
    })
    // console.log(apiGetList)
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
      method : 'GET',
      cache : "no-store"
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
      // console.log(response)
      if(response.status == 'FAIL'){
        return false;
      }

      
    } catch (error) {
      // console.log(error)
      return error;
    }
    revalidatePath('/')
    permanentRedirect('/');
  }

  export async function updateList(formData:FormData){
    try {
      const sessionData = await getSessionData();
      const token = await sessionData.token
      const apiAddUpdateList = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/list/${formData.get('id')}`,{
        headers : {
          'Content-Type' : 'application/json',
          "Authorization" : `Bearer ${token}`
        },
        method : 'PUT',
        body:JSON.stringify({
          listDesc : formData.get('list_desc'),
        })
      })
     
      if(!apiAddUpdateList.ok){
        return false;
      }
      const response = await apiAddUpdateList.json()
      console.log(response)
      if(response.status == 'FAIL'){
        return false;
      }
    } catch (error) {
      console.log(error)
      return error;
    }
    revalidatePath('/')
    permanentRedirect(`/list/${formData.get('id')}`);
  }

  export async function addTask(formData:FormData){
    let idList = formData.get('list_id');
    if(!idList){
      console.log('ID LIST', idList);
      return false;
      const formData = new FormData();
      formData.append('list_desc','Untitle List');
      const addNewList = await addList(formData);
      // const response = await addNewList.json()
      // idList = response.data.id
    }

    try {
      const sessionData = await getSessionData();
      const token = await sessionData.token
      const apiAddNewTask = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${idList}/items`,{
        headers : {
          'Content-Type' : 'application/json',
          "Authorization" : `Bearer ${token}`
        },
        method : 'POST',
        body:JSON.stringify({
          itemDesc : formData.get('list_desc')
        })
      })
     
      if(!apiAddNewTask.ok){
        return false;
      }
      const response = await apiAddNewTask.json()
      console.log('resp',response)
      if(response.status == 'FAIL'){
        return false;
      }

      
    } catch (error) {
      console.log('err',error)
      return error;
    }

    // revalidatePath(`/`)
    redirect(`/list/${idList}`);
  }

  export async function getTaskDetail(idList:string,id:string){
    try {
      const sessionData = await getSessionData();
      const token = await sessionData.token
      const apiGetTaskDetail = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${idList}/items/${id}`,{
        headers : {
          'Content-Type' : 'application/json',
          "Authorization" : `Bearer ${token}`
        },
        method : 'GET',
      })
     
      if(!apiGetTaskDetail.ok){
        return false;
      }
      const response = await apiGetTaskDetail.json()
      
      if(response.status == 'FAIL'){
        return false;
      }

      return response;
    } catch (error) {
      console.log('err',error)
      return error;
    }
  }

  export async function updateTask(idList :number,id:number,formData:FormData){
    console.log('completed fire : ==> id',id)
    console.log('FORM DATA',formData)
    let data : any = {}
    formData.forEach((value,key)=> {data[key] = value} )
    console.log(data);
    // return false;
    try {
      const sessionData = await getSessionData();
      const token = await sessionData.token
      const apiMarkAsCompleted = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${idList}/items/${id}`,{
        headers : {
          'Content-Type' : 'application/json',
          "Authorization" : `Bearer ${token}`
        },
        method : 'PUT',
        body:JSON.stringify(data)
      })
     
      if(!apiMarkAsCompleted.ok){
        return false;
      }
      const response = await apiMarkAsCompleted.json()
      console.log('resp',response)
      if(response.status == 'FAIL'){
        return false;
      }

      
    } catch (error) {
      console.log('err',error)
      return error;
    }

    // revalidatePath(`/`)
    redirect(`/list/${idList}`);
    return false;
  }

  export async function deleteTask(idList:string,id:string){
    try {
      const sessionData = await getSessionData();
      const token = await sessionData.token
      const apiMarkAsCompleted = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${idList}/items/${id}`,{
        headers : {
          'Content-Type' : 'application/json',
          "Authorization" : `Bearer ${token}`
        },
        method : 'DELETE',
      })
     
      if(!apiMarkAsCompleted.ok){
        return false;
      }
      const response = await apiMarkAsCompleted.json()
      console.log('resp',response)
      if(response.status == 'FAIL'){
        return false;
      }
    } catch (error) {
      console.log('err',error)
      return error;
    }

    permanentRedirect(`/list/${idList}`);
  }
 
export async function authenticate(_currentState: unknown,formData: FormData) {
  
 
  return await signIn(_currentState,formData)
}

