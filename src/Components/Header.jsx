import React, { useState } from 'react'
import '../styles/Header.css'
import offerIcon from '../assets/offer.png'
import createIcon from '../assets/create.png'
import notificationIcon from '../assets/notification.png'
import searchIcon from '../assets/search.png'
import pfpIcon from '../assets/Me 1.png'
import dd_Icon from '../assets/Carret_Down.png'

const Header = () => {
  const [input, setInput] = useState('')

  const onChange = event => {
    setInput(event.target.value)
  }

  const onSearch = SearchTerm => {
    //api to fetch the searched data
    console.log('search', SearchTerm)
  }

  return (
    <div className='container'>
      <div className='header'>
        <input
          className='textbox'
          type='text'
          value={input}
          onChange={onChange}
        />
        <img className='searchIcon' src={searchIcon} alt='SEARCH ICON!' />
        <button className='button' onClick={() => onSearch(input)}>
          Search
        </button>
        <img className='offerIcon' src={offerIcon} alt='OFFER ICON!' />
        <img
          className='notificationIcon'
          src={notificationIcon}
          alt='NOTIFICATION ICON!'
        />
        <img className='createIcon' src={createIcon} alt='CREATE ICON!' />
        <img className='pfpIcon' src={pfpIcon} alt='PROFILE PIC ICON!' />
        <div className='userName'>UsmanMalik</div>
        <img
          className='dd_arrowIcon'
          src={dd_Icon}
          alt='DROPDOWN ARROW ICON!'
        />
      </div>
    </div>
  )
}
export default Header
