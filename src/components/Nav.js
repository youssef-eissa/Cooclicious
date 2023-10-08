import React, { useEffect, useRef, useState } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import TemporaryDrawer from './MaterialUI/Menu'
function Nav() {
    const [lastscroll, setLastScroll] = useState(0)
    const navRef = useRef()
    function handleScroll() {

        const scroll = window.scrollY
        if (scroll > lastscroll + 100) {
            navRef.current.style.transform = 'translateY(-100%)'
            setLastScroll(scroll)
        } else if (scroll+100 < lastscroll ) {
            navRef.current.style.transform = 'translateY(0)'
            navRef.current.style.color='white'
            navRef.current.style.backgroundColor = '#778899'
            setLastScroll(scroll)
        } else if (scroll === 0) {
            navRef.current.style.backgroundColor = 'transparent'
            navRef.current.style.color = 'white'
            setLastScroll(scroll)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return ()=>window.removeEventListener('scroll',handleScroll)
    })
return (
    <div  className='container-fluid px-5 m-0'>
        <div  className='row '>
            <div ref={navRef} className='col-12 d-flex px-5 py-3 nav'>
                <Link reloadDocument to='/' onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} style={{fontFamily:'Pirata One, cursive',textDecoration:'none',color:'white'}} className='logo col-md-3 col-8 p-0 text-center '>
                Cooclicious
            </Link>
            <nav  style={{fontFamily:'Dancing Script, cursive'}} className='col-9 d-md-flex d-none p-0 justify-content-center align-items-center'>
            <Link reloadDocument to='/' onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}  className='col-1 text-center navLink'>Home</Link>
            <Link reloadDocument to='/about' onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}  className='col-1 text-center navLink'>About</Link>
            <Link reloadDocument to='/menu' onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}  className='col-1 text-center navLink'>Menu</Link>
            <Link reloadDocument to='/gallery' onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}  className='col-1 text-center navLink'>Gallery</Link>
            <Link reloadDocument to='/contact' onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}  className='col-1 text-center navLink'>Contact</Link>
                </nav>
                <div className='col-4 d-md-none d-flex justify-content-end align-items-center'>
                <TemporaryDrawer/>

                </div>
        </div>
        </div>
    </div>
)
}

export default Nav