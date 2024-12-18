
import { onAuthenticateUser } from '@/actions/user'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'


const AuthCallbackPage = async() => {
 
  const auth = await onAuthenticateUser() 

  if(auth.status === 200 || auth.status === 201){
      return redirect(`/dashboard/${auth.user?.workspace[0].id}`)
  }

  if(auth.status === 404 || auth.status === 400 || auth.status === 500){
return redirect(`/auth/sign-in`)
  }
  
}

export default AuthCallbackPage