import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import { ReactComponent as YourSvg } from '../static/bg.svg';

let Home = (props) =>  {
    return(
        <div id='HOME'>
            {/* <YourSvg className="homeBackground"/>     */}
            <div className='homeTitleSection'>
                <div className='homeTitle'>
                    Woof
                </div>      
                <div className='homeTitleImageSectionContainer'>
                    <div className='homeTitleImageContainer'>
                        <div className='homeTitleImage'></div>
                    </div>                     
                </div>                
            </div>

            <div className='homeAboutSection'>
                <div className='homeAboutImageSectionContainer'>
                    <div className='homeAboutImageContainer'>
                        <div className='homeAboutImage'></div>
                    </div>                     
                </div>   
                <div className='homeAbout'>
                    <Typography
                        variant="h4"
                        color='1f9h3fi'
                    >
                        About<br />
                    </Typography><br/>
                    <Typography
                        variant="h6"
                    >
                        As a pet parent, letting your dogs alone can be stressful. <br/>
                        Don't worry, we have you covered! With Woof, you can arrange play dates for your dogs with other registered owners in your area. <br/>
                        And of course... no need to matching! Yay, let's register!
                    </Typography>
                </div>                     
            </div>
        </div>

    )
}
export default (Home);