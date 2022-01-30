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
                        variant="h1"
                        color="red"
                    >
                        About
                    </Typography>
                </div>                     
            </div>

            <div className='homeHowToSection'>
                <div className='homeHowTo'>
                    How To
                </div>      
                <div className='homeHowToImageSectionContainer'>
                    <div className='homeHowToImageContainer'>
                        <div className='homeHowToImage'></div>
                    </div>                     
                </div>                
            </div>

        </div>

    )
}
export default (Home);