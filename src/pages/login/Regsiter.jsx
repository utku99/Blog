import React from "react"
import "./login.css"
import back from "../../assets/images/my-account.jpg"

export const Regsiter = () => {
  return (
    <>
      <section className='login'>
        <div className='container'>
          <div className='backImg'>
            <img src={back} alt='' />
            <div className='text'>
              <h3>Register</h3>
            </div>
          </div>

          <form>
            <span>Email address *</span>
            <input type='text' required />
            <span>Username *</span>
            <input type='text' required />
            <span>Password *</span>
            <input type='password' required />
            <span>Confirm Password *</span>
            <input type='password' required />
            <button className='button'>Register</button>
          </form>
        </div>
      </section>
    </>
  )
}
