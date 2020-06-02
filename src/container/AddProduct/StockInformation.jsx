import React from 'react';
import {Form, Input, Select} from "antd";
import { DownOutlined, UserOutlined } from '@ant-design/icons';


const StockInformation = ({form}) => {
    const {Option } = Select;

    const handlerIcons = () => {
        return (
            <span className="d-flex mr-2">
                <span>
                    <DownOutlined />
                </span> &nbsp;
                <span>
                    <UserOutlined />
                </span>
            </span>
        )
    }


    return (
        <div className="row">
            <div className="col-4">
                <Form.Item
                    label=""
                    name="usageUnit"
                    rules={[{required: true, message: 'Please select usage Unit!'}]}
                >
                    <Select placeholder="usage Unit">
                        <Option value="usageUnit1">usage Unit1</Option>
                        <Option value="usageUnit2">usage Unit2</Option>
                        <Option value="usageUnit3">usage Unit3</Option>
                        <Option value="usageUnit4">usage Unit4</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label=""
                    name="qtyOrdered"
                    rules={[{required: true,message: 'Please input Qty Ordered!'}]}
                >
                    <Input placeholder="Qty Ordered" type="number" />
                </Form.Item>
            </div>
            <div className="col-4">
                <Form.Item
                    label=""
                    name="quantityInStock"
                    rules={[{required: true,message: 'Please input Quantity In Stock!'}]}
                >
                    <Input placeholder="Quantity in stock" type="number" />
                </Form.Item>
                <Form.Item
                    label=""
                    name="reorderLevel"
                    rules={[{required: true, message: 'Please input Reorder Level!'}]}
                >
                    <Input placeholder="Reorder Level" />
                </Form.Item>
            </div>
            <div className="col-4">
                <Form.Item
                    label=""
                    name="handler"
                    rules={[{required: true, message: 'Please select Handler!'}]}
                >
                    <Select
                        placeholder="Handler"
                        suffixIcon={handlerIcons}>
                        <Option value="handler1">Handler 1</Option>
                        <Option value="handler2">Handler 2</Option>
                        <Option value="handler3">Handler 3</Option>
                        <Option value="handler4">Handler 4</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label=""
                    name="quantityInDemand"
                    rules={[{required: true, message: 'Please input Quantity in Demand!'}]}
                >
                    <Input placeholder="Quantity in Demand" type="number" />
                </Form.Item>
            </div>
        </div>
    );
};

export default StockInformation;