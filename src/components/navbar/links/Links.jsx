import React from 'react'
import Link from 'next/link'
import "./links.module.css"
import NavLink from './navLink/navLink';

const Links = () => {

    const links = [
        {
            title: "Homepage",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "Blog",
            path: "/blog",
        },
    ];

    const session = true;
    const isAdmin = true;

  return (
    <div className='styles.links'>
       {links.map((link => (
        <NavLink item={link} key={link}/>
       )))} {
        session ? () : {
            <NavLink item={{title: "login", path: "/login"}} />
        }
       }
    </div>
  )
}

export default Links