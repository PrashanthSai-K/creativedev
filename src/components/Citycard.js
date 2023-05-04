import React from 'react'
import "../css/citycard.css";

const Citycard = () => {
  return (
    <div>
      <div className='card-main-container' >
        <div className='overall-card' >
            <img className='card-image' src='./images/img1.jpg'/>
            <h1>CITIZEN CORNER</h1>
            <ul className='unorder-list' >
                <li className='list-items' >Online Services - Land</li>
                <li className='list-items'>RTI</li>
                <li className='list-items'>Citizen Charter</li>
                <li className='list-items'>Grievance Redressal</li>
            </ul>
        </div>

        <div className='overall-card' >
            <img className='card-image' src='./images/img1.jpg'/>
            <h1>QUICK LINKS</h1>
            <ul className='unorder-list' >
                <li className='list-items' >Who's Who</li>
                <li className='list-items'>CMA</li>
                <li className='list-items'>Contact Directory</li>
                <li className='list-items'>Elected Representatives</li>
            </ul>
        </div>

        <div className='overall-card' >
            <img className='card-image' src='./images/img1.jpg'/>
            <h1>PLACES OF INTEREST</h1>
            <ul className='unorder-list' >
                <li className='list-items' >How to Reach?</li>
                <li className='list-items'>Tourist Places </li>
                <li className='list-items'>Tourist Information</li>
                <li className='list-items'>Events and Festivals</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Citycard