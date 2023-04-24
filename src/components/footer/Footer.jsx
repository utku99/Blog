import React from "react"
import { AiFillLinkedin } from "react-icons/ai"
import { RiInstagramFill } from "react-icons/ri"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

export const Footer = () => {
  return (
    <>
      <footer className='boxItems'>
        <div className='container flex'>
          <p>All right reserved</p>
          <div className='social'>
            <a href="https://www.instagram.com/utkuaksyy/" target="_blank">
              <RiInstagramFill className='icon' />
            </a>
            <a href="https://www.linkedin.com/in/utku-aksoy-b28b7a232/" target="_blank">
              <AiFillLinkedin className='icon' />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
