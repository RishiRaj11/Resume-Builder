import React from 'react'
import style from "./Header.module.css";
const Header = () => {
    return (
        <div className={style.container}>
            <p className={style.heading}>
                A   <span>Resume</span> that stand out!
            </p>
            <p className={style.heading}>
                Make your own Resume <span> its free</span>
            </p>
        </div>
    )
}

export default Header;