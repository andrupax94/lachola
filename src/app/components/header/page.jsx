import React from 'react';
import Link from 'next/link';
import './header.css'
const Header = () => {
  return (
    <header>
      <nav className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
          <li className='menu_icons' ><Link href="/">Home</Link></li>
          <li className='menu_icons' ><Link href="/pages/festivales">Festivales</Link></li>
          <li className='menu_icons' ><Link href="/pages/buscar">Buscar</Link></li>
          <li className='menu_icons' ><Link href="/pages/anadir">Añadir Festival</Link></li>
          <li className='menu_icons' ><Link href="/pages/subvenciones">Subvenciones</Link></li>
      </nav>
      </header>
  );
};

export default Header;
