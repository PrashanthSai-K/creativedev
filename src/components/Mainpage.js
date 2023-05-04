import React from 'react';
import Citycard from './Citycard';
import Home from './Home';
import Navbar from './Navbar';

const MainPage =() =>{

    return(
        <>  
        <section id='homeSection'>
            <Navbar />
            <Home />
        </section> 
        <Citycard /> 

        </>
    )


}


export default MainPage;