import React from 'react'

export default function NavBar() {
    return (
        <>
            <div className="logo"><img src="logo192.png" alt='' /></div>
            <nav className='navbar'>
                <div className='links'>Home</div>
                <div className='links'>Places</div>
                <div className='links'>Prices</div>
                <div className='links'>About Us</div>
                <div className='links'>Staff</div>
                <div className='links'>Contact Us</div>
            </nav>
        </>
    )
}
