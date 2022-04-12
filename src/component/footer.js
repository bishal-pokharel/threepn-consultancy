import React from 'react'
import '../styles/footer.styles.scss'
import logo from '../logo_small.png';

function Footer(){
    return(
        <footer>
        <div className="footer_section">
           <div className='footer_fst_sec'>
               <img src={logo} className="footer_logo" />
               <p>Get the best educational consultancy across the world</p>
           </div>
           <div className='footer_sec_sec'>
               <h3>Useful Links</h3>
               <ul>
                   <li>a</li>
                   <li>a</li>
                   <li>a</li>
                   <li>a</li>
                   <li>a</li>
               </ul>
           </div>
           <div className='footer_third_sec'>
               <h3>Get In Touch!</h3>
               <p>9817355558</p>
               <p>Bagbazar, Kathmandu</p>
               <p>Near NCC Bank</p>
               <p>threepneducation2017@gmail.com</p>
           </div>
        </div>
        </footer>   
    )
}

export default Footer;