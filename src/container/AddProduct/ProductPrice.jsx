import React from 'react';
import {Form, Input} from "antd";
import styles from "./AddProduct.module.css";

const ProductPrice = () => {
    return (
        <>
            <div className="row">
                <div className={`col-4 ${styles.labelOnBorder}`}>
                    <label htmlFor="">Product Cost ($)</label>
                    <Form.Item
                        label=""
                        name="productCost"
                        rules={[{required: true, message: 'Please input Product Cost!'}]}
                    >
                        <Input placeholder="Product Cost" type="number" />
                    </Form.Item>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <label htmlFor="">Selling Price ($)</label>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <Form.Item
                        label=""
                        name="spManufacturer"
                        rules={[{required: true, message: 'Please input Selling Price!'}]}
                    >
                        <Input placeholder="Selling Price ($)" type="number" />
                    </Form.Item>
                </div>
                <div className="col-4">
                    <Form.Item
                        label=""
                        name="spResidential"
                        rules={[{required: true, message: 'Please input Residential!'}]}
                    >
                        <Input placeholder="Residential"/>
                    </Form.Item>
                </div>
                <div className="col-4">
                    <Form.Item
                        label=""
                        name="spCommercial"
                        rules={[{required: true, message: 'Please input Commercial!'}]}
                    >
                        <Input placeholder="Commercial"/>
                    </Form.Item>
                </div>
            </div>
        </>
    );
};

export default ProductPrice;