import React from 'react'
import ReactDOM from 'react-dom';
import '../styles/body.styles.scss'
// import homepageimg from '../images/welcome.jpg'
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';

const Maps = (() => {
    return(
        <div className='map_div'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0836708277793!2d85.35710111559932!3d27.714702782788905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1bf925952683%3A0x172d083942a3363f!2sChuda%20Mani%20Pokharel!5e0!3m2!1sen!2snp!4v1650129682286!5m2!1sen!2snp" width="80%" height="450" loading="lazy"></iframe>
        </div>
    )
})

export default Maps