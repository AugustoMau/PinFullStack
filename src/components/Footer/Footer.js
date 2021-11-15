import React from 'react'
import '../../assets/css/styles.css'
import footerLogo from '../../assets/images/footer-logo.png'

export default function Footer() {

    return (

    <footer id="footer">
        <p>2020 © All rights reserved.</p>
        <div>
          <img className="footer_image" src={footerLogo} alt="logo footer"/>
        </div>
    </footer>
    )
}