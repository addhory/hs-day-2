import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
  return (
    <nav className='h-16 bg-slate-400 px-4 items-center'>
      <ul className='flex gap-4 items-center h-full font-medium'>
        <li className='hover:cursor-pointer active:text-red-400 '>
          <NavLink
            to={'/'}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li className='hover:cursor-pointer'>
          <NavLink
            to={'/product'}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            Product
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
