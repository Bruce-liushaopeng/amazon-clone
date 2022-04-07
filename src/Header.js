import React from 'react'
import './Header.css'
function Header() {
  return (
    <div className='header'>
      <img className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />

      <div className='header__search'>
        <input
          className='header__searchInput' type='text' />
      </div>

      <div className="header__nav">
        <div className='header__option'>
          <span
            className='header__optionLineOne'> Hello Guest </span>
          <span
            className='header__optionLineTwo'> Sign In </span>
        </div>
      </div>

      <div className="header__nav">
        <div className='header__option'>
          <div className='header__option'>
            <span
              className='header__optionLineOne'> Hello Guest </span>
            <span
              className='header__optionLineTwo'> Sign In </span>
          </div>
        </div>
      </div>

      <div className="header__nav">
        <div className='header__option'>
          <div className='header__option'>
            <span
              className='header__optionLineOne'> Hello Guest </span>
            <span
              className='header__optionLineTwo'> Sign In </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header