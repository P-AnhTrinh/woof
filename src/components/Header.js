

import React, {Fragment} from 'react'
import 'src/App.css';

let Header = (props) =>  {

    return(
        <Fragment>
            <div className="header">
                <div className="logo">
                    Woof
                </div>
                <div className="home-and-signup">
                    {/* <a href="Home.js" className="home">
                        <span>Home</span>
                    </a> */}
                    
                </div>
            </div>
        </Fragment>
    )
}


export default (Header);