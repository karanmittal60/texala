import React from 'react';
import Style from "./LeftMenu.module.css"
import usePikachu from "../../hooks/usePikachu";
import { CreditCardOutlined } from '@ant-design/icons';
import {routeRules} from "../../routes/routeRules";
import { withRouter } from "react-router";


const LeftMenu = (props) => {

    const { isLeftMenuVissible} = usePikachu()

    return (
        <div className={`${Style.leftMenu} ${isLeftMenuVissible ? Style.openMenu : Style.CloseMenu }`}>
            <div className={Style.menuItemHead}>
                <span className={Style.menuItemIcon}>
                    <CreditCardOutlined />
                </span>
                Manage Inventory
            </div>
            <div className={Style.subMenu}>
                <span onClick={() => props.history.push(routeRules.productList)}>
                    > Manage Product
                </span>
            </div>
        </div>
    );

}

export default  withRouter(LeftMenu);