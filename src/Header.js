import React from 'react'
import './Header.css'

function Header() {
  return (
    <><div className='header'>
          <img className='header__logo' src='https://images.app.goo.gl/kx6gBqvguTYdM8A49' />
          <input className='header__searchInput' type='text' />
          {/* Search bar logo */}
      </div><div className='header__nav'>
              <div className='header__option'>
                  <span className='header_optionLineOne'>Hello guest</span>
                  <span className='header_optionLineTwo'>Sign In</span>
              </div>
              <div className='header__option'>
                  <span className='header_optionLineOne'>Returns</span>
                  <span className='header_optionLineTwo'>Orders</span>
              </div>
              <div className='header__option'>
                  <span className='header_optionLineOne'>Your</span>
                  <span className='header_optionLineTwo'>Prime</span>
              </div>
              <div className='header__option'>

              </div>
          </div></>
  )
}

export default Header