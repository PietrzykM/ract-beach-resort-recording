import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import RoomContainer from '../components/RoomContainer'

export const Rooms = () => {
    return (
    <>
    <Hero hero="roomsHero">
        <Banner title="Kursy">
            <Link to="/" className="btn-primary">
                Strona główna
            </Link>
        </Banner>
    </Hero>
    <RoomContainer />
    </>    
    )
}

export default Rooms;