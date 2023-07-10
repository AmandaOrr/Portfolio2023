import React from 'react';
//imports
import Logo from '../assets/logo.svg';

const Header = () => {
  return <header className="py-8">
    <div className='container mx-auto'>
      <div>
        {/* logo */}
        < a href="#">
          <img src={Logo} alt="" />
        </a>
        {/* button */}
        <button className="btn btn-sm">Work with me</button>
      </div>
    </div>

  </header>;
};

export default Header;
