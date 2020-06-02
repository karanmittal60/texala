import React from 'react';
import {Breadcrumb} from "antd";
import {routeRules} from "../../routes/routeRules";
import {Link} from "react-router-dom";

const BreadcrumbCustom = () => {
    return (
        <Breadcrumb separator=">">
            <Breadcrumb.Item>Manage Inventory</Breadcrumb.Item>
            <Breadcrumb.Item> <Link to={routeRules.productList}>Manage Product</Link></Breadcrumb.Item>
            <Breadcrumb.Item>Add Product</Breadcrumb.Item>
        </Breadcrumb>
    );
};

export default BreadcrumbCustom;