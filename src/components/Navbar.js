import React from 'react';
import '../css/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () =>{



    return(
        <>
        <div className='navbar'>
            <div className='heading'>Town Vegas</div>
            <ul>
                <Link to={'/#homeSection'} style={{textDecoration:'none', color:'black'}}><li>Home</li></Link>
                <Link to={'/#homeSection'} style={{textDecoration:'none', color:'black'}}><li>About Us</li></Link>
                <Link to={'/#homeSection'} style={{textDecoration:'none', color:'black'}}><li>Departments</li></Link>
                <Link to={'/#homeSection'} style={{textDecoration:'none', color:'black'}}><li>Contact us</li></Link>
            </ul>
        </div>
        </>
    )
}


export default Navbar;