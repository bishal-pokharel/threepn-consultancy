import React from 'react'
import '../styles/body.styles.scss'
import homepageimg from '../images/welcome.jpg'

const AboutUS = (() => {
    return(
        <div className='about_us'>
            <div className='about_div'>
                <div className='about_img'>
                    <img className='homepage_img' src={homepageimg} alt="Welcome Images" />
                </div>
                <div className='aboutus_description'>
                    <p>
                    It is our pleasure to welcome you to Chiba Education Center (CEC). The language program is intended for student who wants basic growth of language skill for communicating with Japanese speaker on the areas of purpose. Expanding business, knowing all culture ties, studying and working in Japan as well as making tour etc. Nepal and Japan share a lot of similarities in terms of culture, religion, and even in terms of sentiment. The Traditional culture of Nepal and Japan are closely linked together
                    </p>
                </div>
            </div>

        </div>
    )
});

export default AboutUS