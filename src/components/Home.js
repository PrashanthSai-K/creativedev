import React from 'react';
import '../css/home.css'

const Home = () => {

    return (
        <>
            <div className='home' style={{ background: 'url(./images/bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', width: '100vw' }}>
                <div className='homeContent'>
                    <center><h1>Welcome to Town Vegas!!</h1> </center>
                    <center><h2>Have a great experience while you are here!!!</h2> </center>
                </div>
            </div>

        </>
    )
}

export default Home;