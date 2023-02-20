import { Fragment, useEffect, useState } from 'react'
import Granim from 'granim'
import '../styles/Login.css'
import '../styles/Signup.css'
import JarvisLogo from '../assets/jarvis.png'
import NameIcon from '../assets/Name_icon.png'
import EmailIcon from '../assets/email_icon.png'
import PasswordIcon from '../assets/password_icon.png'
const Signup = ({ handleClick }) => {
  useEffect(() => {
    new Granim({
      element: '#logo-canvas',
      direction: 'diagonal',
      opacity: [1, 1],
      states: {
        'default-state': {
          gradients: [
            ['#2958AE', '#FF0091'],
            ['#FB8800', '#FFFF00'],
            ['#FF0091', '#FB8800'],
            ['#FFFF00', '#2958AE']
          ],
          transitionSpeed: 2000
        }
      }
    })
  }, [])

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleNameChange = event => {
    setName(event.target.value)
  }
  const handleEmailChange = event => {
    setEmail(event.target.value)
  }
  const handlePasswordChange = event => {
    setPassword(event.target.value)
  }
  const goToLogin = event => {
    window.location.href = '/login'
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const submitData = {
      name: name,
      email: email,
      password: password
    }
    console.log(submitData)
    let response = await fetch('http://127.0.0.1:3001/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(submitData)
    })
    console.log(response)
    if (response.status === 200) {
      alert('User registered!')
      window.location.href = '/login'
    } else {
      alert('User already exists!')
    }
  }

  return (
    <Fragment>
      <div className='bloc-logo'>
        <canvas id='logo-canvas' />
      </div>
      <img className='jarvislogo1' src={JarvisLogo} alt='JARVIS LOGO!' />
      <div className='signuptxt'>Sign Up</div>
      <img className='nameicon' src={NameIcon} alt='Name Icon!' />
      <div className='nametxt'>Name</div>
      <img className='emailicon' src={EmailIcon} alt='Email Icon!' />
      <div className='emailtxt'>Email</div>
      <img className='passwordicon' src={PasswordIcon} alt='Password Icon!' />
      <div className='passwordtxt'>Password</div>
      <form onSubmit={handleSubmit}>
        <input
          className='nametextbox'
          type='text'
          value={name}
          onChange={handleNameChange}
        />
        <input
          className='emailtextbox'
          type='text'
          value={email}
          onChange={handleEmailChange}
        />
        <input
          className='passwordtextbox'
          type='password'
          value={password}
          onChange={handlePasswordChange}
        />
        <button type='submit' className='loginbutton'>
          Sign Up
        </button>
      </form>
      <div className='promptText'>Already have an account?</div>
      <div className='txtbutton' onClick={goToLogin}>
        Login
      </div>
    </Fragment>
  )
}
export default Signup
