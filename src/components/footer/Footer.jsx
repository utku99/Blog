import React from "react"
import { AiFillLinkedin } from "react-icons/ai"
import { RiInstagramFill } from "react-icons/ri"

export const Footer = () => {
  return (
    <>
      <footer className='boxItems'>
        <div className='container flex'>
          <p>All right reserved</p>
          <div className='social'>
            <RiInstagramFill className='icon' />
            <AiFillLinkedin className='icon' />
          </div>
        </div>
      </footer>
    </>
  )
}
