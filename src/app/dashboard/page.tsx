
import { onAuthenticateUser } from '@/actions/user'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {}


const DashboardPage = async(props: Props) => {
 
  // First we willl authenticae the user
  const auth = await onAuthenticateUser() 
  // the dashboard page decides whether we need to create the user or the user is already authenticated and ready to go


  if(auth.status === 200 || auth.status === 201){
    return redirect(`/dashboard/${auth.user?.workspace[0].id}`)
}

  if(auth.status === 404 || auth.status === 400 || auth.status === 500){
return redirect(`/auth/sign-in`)
  }

  // Then we wll check if the user already ahs an account
  // if accounts exists, redirect them to the right page
  // if doessnit exists, create the account in the database
  return (

   
    <div>DashboardPage

    </div>
  )
}

export default DashboardPage