import React, { Component } from 'react'
import {FaMoneyBillWave,FaMusic,FaParking,FaCoffee} from 'react-icons/fa'
import Title from './Title'

export default class Services extends Component {
    state ={
        services:[
            {
                icon:<FaMoneyBillWave/>,
                title:"Płatności",
                info: 'Akceptujemy płatności kartą oraz gotówką. Możliwość wejścia dzięki kartą partnerskim.'
            },
            {
            icon:<FaMusic/>,
                title:"Najlepsze nagłośnienie",
                info: 'Korzystamy z najlepszej jakości sprzętu, dzięki czemu muzyka na zajęciach przesiąknie każdego!'
            },
            {
            icon:<FaParking/>,
                title:"Darmowy parking",
                info: 'Na terenie obiektu znajduje się bezpłatny parking dla samochodów osobowych. Pobierz bilet i podbij na recepcji, aby bezpłatnie opuścić posesje.'
            },
            {
            icon:<FaCoffee/>,
                title:"Darmowa kawa",
                info: 'Przy recepcji znajduje się ekspres z najlepszą kawą całkowicie za darmo dla wszystkich naszych kursantów. Naierz energii pomiędzy zajęciami!'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title = 'Tylko u nas'/>
                <div className ="services-center">
                   {this.state.services.map((item,index) =>{
                    return <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                   })} 
                </div>
            </section>
        )
    }
}
