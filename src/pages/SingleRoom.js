import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../contex';
import StyledHero from '../components/StyledHero';


export default class SingleRoom extends Component {
    constructor(props){
        super(props)
        // console.log(this.props)
        this.state = {
            slug:this.props.match.params.slug,
            defaultBcg
        }
    }
    static contextType = RoomContext;
    // componentDidMount(){}
    render() {
        const{getRoom} = this.context;
        const room = getRoom(this.state.slug);
        if(!room){
            return <div className="error">
                <h3>nie znaleziono kursu</h3>
                <Link to='/rooms' className="btn-primary">
                    Kursy
                </Link>
            </div>
        }
        const {
            name,
            description,
            capacity,
            size,
            price,
            extras,
            pair,
            solo,
            images
        } = room;
        const [mainImg,...defaultImg] = images;
        return (
        <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
            <Banner title={`${name} room`}>
                <Link to='/rooms' className='btn-primary'>
                    Powrót do kursów
                </Link>
            </Banner>
        </StyledHero>
        <section className="single-room">
            <div className="single-room-images">
                {defaultImg.map((item,index)=>{
                    return <img key={index} src={item} alt={name}/>
                })}
            </div>
            <div className="single-room-info">
                <article className="desc">
                    <h3>Szczegóły</h3>
                    <p>{description}</p>
                </article>
                <article className="info">
                    <h3>Informacje</h3>
                    <h6>Cena : {price}zł</h6>
                    <h6>Wielkość sali : {size} metrów kw.</h6>
                    <h6>
                        Dzień tygodnia  : {" "}
                            {capacity}
                        
                    </h6>
                    <h6>{solo? "Kurs solo": ""}</h6>
                     <h6>{pair? "Kurs w parach":""}</h6>
                </article>
            </div>
        </section>
        <section className="room-extras">
            <h6>Dodatkowe informacje</h6>
            <ul className="extras">
                {extras.map((item,index)=>{
                    return <li key={index}>- {item}</li>
                })}
            </ul>
        </section>
        </>
        )}
}
