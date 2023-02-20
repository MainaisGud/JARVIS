import { Fragment, useEffect, useState } from 'react'
import '../styles/Login.css'
import JarvisLogo from '../assets/jarvis.png'
import EmailIcon from '../assets/email_icon.png'
import PasswordIcon from '../assets/password_icon.png'
import Granim from 'granim'
import Home from './Home'
const Login = ({ handleClick }) => {
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

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleEmailChange = event => {
    setEmail(event.target.value)
  }
  const handlePasswordChange = event => {
    setPassword(event.target.value)
  }
  const goToSignup = event => {
    window.location.href = '/signup'
  }
  const handleSubmit = async event => {
    event.preventDefault()
    const submitData = {
      email: email,
      password: password
    }
    console.log(submitData)
    let response = await fetch('http://127.0.0.1:3001/user/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(submitData)
    })
    console.log(response)
    if (response.status === 200) {
      console.log('Logged In')
      window.location.href = '/dashboard'
    } else {
      console.log('Login Failed')
    }
  }

  return (
    <Fragment>
      <div className='bloc-logo'>
        <canvas id='logo-canvas' />
      </div>
      <img className='jarvislogo' src={JarvisLogo} alt='JARVIS LOGO!' />
      <div className='welcometxt'>Welcome Back!</div>
      <img className='emailicon' src={EmailIcon} alt='Email Icon!' />
      <div className='emailtxt'>Email</div>
      <img className='passwordicon' src={PasswordIcon} alt='Password Icon!' />
      <div className='passwordtxt'>Password</div>
      <form onSubmit={handleSubmit}>
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
          Login
        </button>
      </form>
      <div className='promptText'>Don't have an account yet?</div>
      <div className='txtbutton' onClick={goToSignup}>
        SignUp
      </div>

    </Fragment>
  )
}
export default Login
