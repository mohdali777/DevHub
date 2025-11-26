import React from 'react'
import DevHubLogo from '../assets/1763975559494-removebg-preview (1).png'

interface PropsLogo{
  w:string
  h:string
}
function LogoApp({w,h}:PropsLogo) {
  return (
    <div>
      <img  className={`${w} ${h}`}  src={DevHubLogo}  alt="DevHub" />
    </div>
  )
}

export default LogoApp
