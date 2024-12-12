import React from "react";
import './footerCss.css'

function WebFooter(){
    return(
        <>
        <div className="footer-main">
            <p>Copyright © 2007-2024, Freechildrenstories.com, Daniel Errico, Soaring Ship, LLC. All Rights Reserved.</p>
            <div className="link-section">
                <a href="#">Bedtime Stories</a>
                 <a href="#">Stories For Kids Age 3-5</a> 
                 <a href="#">Stories For Kids Age 5-8</a>
                  <a href="#">Stories For Kids Age 8-10</a>
                   <a href="#">Stories For Kids Age 10+</a>
            </div>
            <div className="link-section">
            <a href="#">Middle Grade Novels</a>
            <a href="#">Rhyming Stories</a> 
            <a href="#">Non-Rhyming Stories</a>
             <a href="#">Cookies Policy</a>
              <a href="#">Privacy Policy</a>
               <a href="#">User Agreement</a>
            </div>
        </div>
        </>
    )
}
export default WebFooter;