import React from 'react'
import ReactDOM from 'react-dom';
import '../styles/body.styles.scss'
// import homepageimg from '../images/welcome.jpg'
import Button from '@mui/material/Button';

const Maps = (() => {
    return(
        <div className='contact_div'>
        <div className='contact_box'>
            <div className='contact_text'>
                <h3>Any Question</h3>
                <span className='border-line'></span>
                <p>Want to know more about our services and studies in Japan?</p>
                <Button variant="contained" color="success">
                Contact Us
                </Button>
            </div>
        </div>
        </div>
    )
})

export default Maps