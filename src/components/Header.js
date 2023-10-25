import React from 'react';
import { Link } from 'react-scroll';
//imports
import Logo from '../assets/logoAO.svg';

const Header = () => {
  return (
    <header className="py-8">
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* logo */}
        < a href="#">
          <img src={Logo} alt="" />
        </a>
        {/* button */}
        <button className="btn btn-sm"><a href="#contact">Work with me</a></button>
      </div>
    </div>

  </header>
  )
};

export default Header;
