import React from 'react'
import styles from './Body.module.css';
import { Download } from 'react-feather';
const Body = () => {
    const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
    return (
        <div className={styles.container}>
            <p className={styles.heading}>
                Resume Builder
            </p>
            <div className={styles.toolbar}>
                <div className={styles.colors}>
                    {
                        colors.map((item) => (
                            <span className={styles.color}
                                key={item}
                                style={{ backgroundColor: item }}
                            />
                        ))
                    }
                    <button >Download <Download /></button>
                </div>
            </div>

        </div>
    )
}

export default Body;