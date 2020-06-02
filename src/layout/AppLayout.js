import React from 'react';
import Header from "../components/header";
import LeftMenu from "../components/leftMenu";
import styles from './AppLayout.module.css';

const AppLayout = (props) => {
    return (
        <>
            <div className="d-flex">
                <LeftMenu isMenuOpen={true}/>
                <div className={styles.appLayout}>
                    <Header/>
                    <div className={styles.pageBackground}>
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppLayout;