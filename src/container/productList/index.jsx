import React, {useState} from 'react';
import styles from "./ProductList.module.css";
import { Select, Table, Button, Input } from 'antd';
import ProductTable from "./ProductTable";
import { SettingOutlined } from '@ant-design/icons';
import {routeRules} from "../../routes/routeRules";

const ProductList = (props) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);


    const setSelectedRow = (selectedKeys) => {
        setSelectedRowKeys(selectedKeys)
    }

    const handleSelectAction = (selectedAction) => {
        console.log("selectedAction ==>", selectedAction);
    }

    return (
        <div className={styles.productListWrapper}>
            <div className="d-flex justify-content-between mb-2">
                <div className={styles.header}>
                    Manage Inventory
                </div>
                <div>

                    <Input.Search
                        className="mr-3"
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                        style={{ width: 200 }}
                    />
                    <Button type="primary" onClick={() => props.history.push(routeRules.addProduct)}>Add Product</Button>
                </div>
            </div>

            <div className={styles.inventoryHeader}>
                <div className="m-3">
                    Inventory List
                </div>
                <div className={styles.inventoryHeaderRight}>
                    <div className="mr-1">
                        <SettingOutlined />
                    </div>
                    <div className="mr-2 mt-1">
                        Columns
                    </div>
                    <div className="mr-2 mt-1">
                        Product Status:
                    </div>
                    <Select
                        placeholder="Select"
                        className=""
                        style={{width: '200px'}}
                        onChange={handleSelectAction}
                    >
                        <Select.Option value="delete">delete</Select.Option>
                    </Select>
                </div>
            </div>
            <div className="d-flex justify-content-between mb-4">
                <div/>
                <div>
                    <span className="mr-3">
                        {selectedRowKeys.length} Item Selected
                    </span>
                    <Select
                        placeholder="Action"
                        style={{width: '120px'}}
                        onChange={handleSelectAction}
                    >
                        <Select.Option value="delete">delete</Select.Option>
                    </Select>

                </div>
            </div>

            <ProductTable setSelectedRow={setSelectedRow}/>
        </div>
    );
};

export default ProductList;