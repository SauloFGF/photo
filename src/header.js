import React, { Fragment } from "react";
import './assets/css/index.css'
import group14 from "./assets/image/group14.svg"
import frame3 from './assets/image/frame3.svg'
import settings from './assets/image/settings.svg'
import user from './assets/image/user.svg'


const Header = () => {
    return(
        <Fragment>
            <header>
                <div>
                    <img src={group14} alt=''/>
                </div>
                <div className="settings">
                    <img src={settings} alt=''/>
                    <img src={user} alt=''/>
                    <img src={frame3} alt=''/>
                </div>
            </header>
        </Fragment>
    )
}


export default Header