import React from 'react'
import '../styles/Sidebar.css'
import JarvisLogo from '../assets/jarvis.png'
import { FaThList, FaSistrix, FaUserPlus, FaFileAlt } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Sidebar = ({ children }) => {
  const menuItem = [
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: <FaThList />
    },
    {
      path: '/search',
      name: 'Search',
      icon: <FaSistrix />
    },
    {
      path: '/addDetails',
      name: 'Add Details',
      icon: <FaUserPlus />
    },
    {
      path: '/docs',
      name: 'Docs',
      icon: <FaFileAlt />
    }
  ]
  return (
    <div className='container'>
      <div className='sidebar'>
        <div className='top_section'>
          <h1 className='logo'>
            <img className='logo' src={JarvisLogo} alt='Jarvis LOGO!' />
          </h1>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className='link'
            activeclassname='active'
          >
            <div className='icon'>{item.icon}</div>
            <div className='link_text'>{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  )
}

export default Sidebar
