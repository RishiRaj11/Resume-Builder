import React from 'react'
import style from "./Header.module.css";
import resumeLogo from "../../assets/resume.svg"
const Header = () => {
    return (
        <div className={style.container}>
            <div className={style.left}>
                <img src={resumeLogo} alt="resume logo" />
            </div>
            <div className={style.right}>
                <p className={style.heading}>
                    A   <span>Resume</span> that stand out!
                </p>
                <p className={style.heading}>
                    Make your own Resume <span> its free</span>
                </p>
            </div>

        </div>

    )
}

export default Header;