import { cookies } from "next/headers";
import { redirect } from "next/navigation";


async function setSession(data:any){
    const datToString = JSON.stringify(data)
    cookies().set('session',datToString,{
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // One week
        path: '/',
    })
}

export async function getSessionData() {
    const encryptedSessionData = cookies().get('session')?.value
    return encryptedSessionData ? JSON.parse(encryptedSessionData) : null
}

export const signIn = async (_currentState: unknown,formData:FormData)=>{
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

    await setSession({token: responseAPI?.data.token,refreshToken:responseAPI.data.refreshToken})

    return redirect('/')
}

export const knock = async (token:string)=>{
    
    const apiPost = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/knock`,{
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        },
    });

    return apiPost.status;
}