import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { FaFacebook } from "react-icons/fa"

const SocialMedia = () => {
  return (
    <div className = "app__social">
      <a href="https://www.linkedin.com/in/vaibhav-saraf-07" target="_blank">
        <div>
          <BsLinkedin />
        </div>        
      </a>
      <a href="https://github.com/vaibhav0704" target="_blank">
        <div>
          <BsGithub />
        </div>
      </a>
      <a href="https://www.instagram.com/_vaibhav_0704/" target="_blank">
        <div>
          <BsInstagram />
        </div>
      </a>
    </div>
  )
}

export default SocialMedia