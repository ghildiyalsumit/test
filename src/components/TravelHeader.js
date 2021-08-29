import React from 'react'
import { Link } from 'react-router-dom'

const TravelHeader = () => {
    return (
            <header>
                <Link to="/" className="logo">Travel</Link>
                <div className="group">
                    <ul className="navigation">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/TravelBookings'>Bookings</Link></li>
                    </ul>
                    <ul className="action">
                        <li><a href="#"><ion-icon name="search-outline"></ion-icon></a></li>
                        <li><a href="#"><ion-icon name="person-outline"></ion-icon></a></li>
                        <div className="menuToggle">
                            <ion-icon name="menu-outline"></ion-icon>
                            <ion-icon name="close-outline"></ion-icon>
                        </div>

                    </ul>
                </div>
            </header>
 
    )
}

export default TravelHeader
