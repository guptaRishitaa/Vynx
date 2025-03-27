import React from 'react'
import LandingPageNavBar from './_components/navbar'
import Footer from './_components/footer'


type Props = {children : React.ReactNode}

const layout = ({children}: Props) => {
  return (
    <div className='flex flex-col bg-gradient-to-b from-background to-accent/20 pt-10'>
        <LandingPageNavBar/>
        {children}
        {/* <Footer/> */}
    </div>
  )
}

export default layout