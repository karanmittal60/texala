import React from 'react';
import styles from './CustomPanel.module.css';

const CustomPanel = () => {
    return (
        <div className={styles.panel}>
            <button type="button" className={styles.collapsible}>Open Collapsible</button>
            <div className={styles.content}>
                <p>Lorem.,m ererio erlthhre ret ethtret
                    hrelktsdf,mbgdf rkj hdfghd
                    jgh ghgh igh oirthjogjge
                    reherthrerlkt etherthreterrthethterthre ipsum...</p>
            </div>
        </div>
    );
};

export default CustomPanel;