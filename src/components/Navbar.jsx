import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';



const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    <nav
       className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-blue`}
    >
      <div className='w-full flex justify-between items-center max-w-7x1 mx-auto'>
        <Link 
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0)
          }}
        >
          <p className='text-white text-[18px] font-bold cursor-pointer'>Kiné Ostéo Labenne</p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === "text-white"
              } hover:text-decoration-underline text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={() => setToggle(!toggle)}
          />
        <div className={`${!toggle ? 'hidden':'flex'} p-6 bg-white absolute top-[3rem] rigth-0 mx-0 min-w[160px] z-10 rounded-x1`}>
          <ul className='list-none flex justify-end items-start flex-col gap-6'>
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-blue" : "text-secondary"
                } font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar