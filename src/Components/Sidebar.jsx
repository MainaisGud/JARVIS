import React from 'react'
import '../styles/Sidebar.css'
import EdithLogo from '../assets/EDITH.png'
import {
  FaTh,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList
} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Sidebar = ({ children }) => {
  const menuItem = [
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: <FaTh />
    },
    {
      path: '/patients',
      name: 'Patients',
      icon: <FaUserAlt />
    },
    {
      path: '/datavisualization',
      name: 'Data Visualization',
      icon: <FaRegChartBar />
    },
    {
      path: '/advancedsearch',
      name: 'Advanced Search',
      icon: <FaCommentAlt />
    },
    {
      path: '/doctors',
      name: 'Doctors',
      icon: <FaShoppingBag />
    },
    {
      path: '/settings',
      name: 'Settings',
      icon: <FaThList />
    }
  ]
  return (
    <div className='container'>
      <div className='sidebar'>
        <div className='top_section'>
          <h1 className='logo'>
            <img className='logo' src={EdithLogo} alt='EDITH LOGO!' />
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
