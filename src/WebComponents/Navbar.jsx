import React from "react";
import { Container } from "react-bootstrap";
import './navbarCss.css'
import ytlogo from '../assets/youtube.png'
import fblogo from '../assets/facebook.png'

export default function WebNavbar(){

    const logo='https://images.squarespace-cdn.com/content/v1/5493706de4b0ecaa4047b871/1505287015976-IJDJGSWFVL6V8JR6SRLF/Freechildrenstories.com-logo-white+logo-min.png?format=500w'
    
    return(
        <>
        <div className="nav-bar">
            <div className="nav-left">
            <a href="#"><img src={logo} alt="logo" /></a>
            </div>
            <div className="nav-centre">
            <a href="#"><p>HOME</p></a>
            <a href="#"><p>KIDS STORIES</p></a>
            <a href="#"><p>ABOUT</p></a>
            <a href="#"><p>CONTACT</p></a>
            </div>
            <div className="nav-right">
            <a href=""><img src={ytlogo} alt="ytlogo" /></a>
            <a href=""><img src={fblogo} alt="fblogo" /></a>
            </div>
        </div>
        </>
    )
}