import React from 'react'
import '../styles/body.styles.scss'
// import homepageimg from '../images/welcome.jpg'
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';

const Offers = (() => {
    return(
        <div className='offers_div'>
            <div className="offers_title">
                <h2>We offer you</h2>
                <span className='border-line'></span>
                <p>We provide you with quality service and very affordable fee.</p>
            </div>
            <div className='offer_part'>
                <div className='offer_item'>
                    <div className='offer_list'>
                    <GroupsRoundedIcon color="primary" sx={{fontSize: '3rem'}} />
                    </div>
                    <div className='offer_details'>
                        <h2>Free Consultation</h2>
                        <p>Absolutely Transparency and Fair Information with Best Guidance for Career</p>
                    </div>
                </div>
                <div className='offer_item'>
                    <div className='offer_list'>
                        <GroupsRoundedIcon color="primary" sx={{fontSize: '3rem'}} />
                    </div>
                    <div className='offer_details'>
                        <h2>Free Consultation</h2>
                        <p>Absolutely Transparency and Fair with Best Guidance for Career</p>
                    </div>
                </div>
                <div className='offer_item'>
                    <div className='offer_list'>
                        <GroupsRoundedIcon color="primary" sx={{fontSize: '3rem'}} />
                    </div>
                    <div className='offer_details'>
                        <h2>Free Consultation</h2>
                        <p>Absolutely Transparency and Fair Information with Best Guidance for Career</p>
                    </div>
                </div>
                <div className='offer_item'>
                        <div className='offer_list'>
                        <GroupsRoundedIcon color="primary" sx={{fontSize: '3rem'}} />
                        </div>
                        <div className='offer_details'>
                        <h2>Free Consultation</h2>
                        <p>Absolutely Transparency and Fair Information with Best Guidance for Career</p>
                    </div>
                </div>
                <div className='offer_item'>
                    <div className='offer_list'>
                    <GroupsRoundedIcon color="primary" sx={{fontSize: '3rem'}} />
                    </div>
                    <div className='offer_details'>
                        <h2>Free Consultation</h2>
                        <p>Absolutely Transparency and Fair Information with Best Guidance for Career</p>
                    </div>
                </div>
                <div className='offer_item'>
                    <div className='offer_list'>
                    <GroupsRoundedIcon color="primary" sx={{fontSize: '3rem'}} />
                    </div>
                    <div className='offer_details'>
                        <h2>Free Consultation</h2>
                        <p>Absolutely Transparency and Fair Information with Best Guidance for Career</p>
                    </div>
                </div>
               
            </div>
        </div>
    )
});

export default Offers