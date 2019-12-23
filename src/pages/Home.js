import React from 'react'
import Hero from "../components/Hero";
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

//"<>" to jest skró od <React.Fragment>
export default function Home() {
    return (
        <> 
    <Hero>
        <Banner title="LofToDance" subtitle="Kursy tańca Latino i innych styli">
           <Link to="/rooms" className="btn-primary">
                Kursy   
            </Link> 
        </Banner>
    </Hero>
    <Services/>
    <FeaturedRooms/>
    </>
);
}
