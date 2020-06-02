import React from 'react';
import { MenuOutlined } from '@ant-design/icons';
import styles from './Header.module.css';

import usePikachu from "../../hooks/usePikachu";

const Header = () => {

    const { toggleLeftMenu } = usePikachu()

    return (
        <div className={styles.header}>
            <span className={styles.hemburger}>
                <MenuOutlined onClick={() => toggleLeftMenu()}/>
            </span>
        </div>
    );
};

export default Header;