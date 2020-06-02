import React, {useState} from 'react';
import {Select, Table} from "antd";
import styles from './ProductList.module.css';
import usePikachu from "../../hooks/usePikachu";

const ProductTable = (props) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const {productList} = usePikachu()
    const onSelectChange = selectedRowKeys => {
        setSelectedRowKeys(selectedRowKeys)
        props.setSelectedRow(selectedRowKeys)
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const dataSource = productList;

    const columns = [
        {
            title: 'Product ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Thumbnails',
            dataIndex: 'images',
            key: 'images',
            render: (images) => (
                <>
                    <img
                        src={images[0].response.url}
                        alt="img"
                        width="25"
                        height="25"
                    />
                </>
            )
        },
        {
            title: 'Product Name',
            dataIndex: 'productName',
            key: 'productName',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'SKU',
            dataIndex: 'sku',
            key: 'sku',
        },
        {
            title: 'Manufacturer',
            dataIndex: 'manufacturer',
            key: 'manufacturer',
        },
        {
            title: 'In Stock',
            dataIndex: 'quantityInStock',
            key: 'quantityInStock',
        },
        {
            title: 'Qty',
            dataIndex: 'quantityInStock',
            key: 'quantityInStock',
        },
        {
            title: 'Model No',
            dataIndex: 'modelNo',
            key: 'modelNo',
        },
        {
            title: 'Promotion',
            dataIndex: 'address',
            key: 'address',
            render: () => (
                <span>New</span>
            )
        },
        {
            title: 'Status',
            dataIndex: 'enableProduct',
            key: 'enableProduct',
            render: (enableProduct) => (
                <>
                    <span>
                        {enableProduct ? 'Yes' : 'No'}
                    </span>
                </>
            )
        },
        {
            title: 'Action',
            dataIndex: 'Action',
            key: 'Action',
            render: () => (
                <>
                    <Select placeholder="Action">
                        <Select.Option value="delete">Delete</Select.Option>
                        <Select.Option value="edit">Edit</Select.Option>
                    </Select>
                </>
            )
        },
    ];


    return (
        <div className={styles.productTable}>
            <Table rowSelection={rowSelection} dataSource={dataSource} columns={columns} />
        </div>
    );
};

export default ProductTable;