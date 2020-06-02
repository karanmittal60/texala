import React from 'react';
import {Form, Input, Select, Switch, DatePicker, Checkbox} from "antd";
import styles from './AddProduct.module.css';
import UploadMultipleImage from "../../components/UploadMultipleImage";
const ProductGenral = ({form, setImageList}) => {
    return (
        <div>
            <Form.Item
                label="Enable Product"
                name="enableProduct"
                rules={[{required: false, message: 'Please input Commercial!'}]}
            >
                <Switch/>
            </Form.Item>

            <div className="row">
                <div className="col-4">
                    <div className={styles.labelOnBorder}>
                        <label htmlFor="">Product Name*</label>
                        <Form.Item
                            label=""
                            name="productName"
                            rules={[{required: true, message: 'Please input Product Name!'}]}
                        >
                            <Input placeholder="Product Name"/>
                        </Form.Item>
                    </div>
                    <Form.Item
                        label=""
                        name="modelNo"
                        rules={[{required: true, message: 'Please input Model Number!'}]}
                    >
                        <Input
                            placeholder="model Number"
                            maxLength={10}
                        />
                    </Form.Item>
                </div>
                <div className="col-4">
                    <Form.Item
                        label=""
                        name="category"
                        rules={[{required: true, message: 'Please select Category!'}]}
                    >
                        <Select placeholder="category">
                            <Select.Option value="category1">category1</Select.Option>
                            <Select.Option value="category2">category2</Select.Option>
                            <Select.Option value="category3">category3</Select.Option>
                            <Select.Option value="category4">category4</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label=""
                        name="manufacturerDate"
                        rules={[{required: true, message: 'Please select Manufacturer Date!'}]}
                    >
                        <DatePicker
                            format="YYYY-MM-DD"
                            placeholder="Manufacturer Date"
                        />
                    </Form.Item>
                </div>
                <div className="col-4">
                    <Form.Item
                        label=""
                        name="manufacturer"
                        rules={[{required: true, message: 'Please select Manufacturer!'}]}
                    >
                        <Select placeholder="Manufacturer">
                            <Select.Option value="manufacturer1">manufacturer1</Select.Option>
                            <Select.Option value="manufacturer2">manufacturer2</Select.Option>
                            <Select.Option value="manufacturer3">manufacturer3</Select.Option>
                            <Select.Option value="manufacturer4">manufacturer4</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label=""
                        name="sku"
                        rules={[{required: true, message: 'Please input SKU!'}]}
                    >
                        <Input placeholder="SKU*"/>
                    </Form.Item>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <Form.Item
                        label=""
                        name="attributeSet"
                        rules={[{required: true, message: 'Please select Attribute Set!'}]}
                    >
                        <Select placeholder="Attribute Set"
                                style={{ width: '100%' }}>
                            <Select.Option value="attributeSet1">attributeSet1</Select.Option>
                            <Select.Option value="attributeSet2">attributeSet2</Select.Option>
                            <Select.Option value="attributeSet3">attributeSet3</Select.Option>
                            <Select.Option value="attributeSet4">attributeSet4</Select.Option>
                        </Select>
                    </Form.Item>
                    <label htmlFor="">Set Product As New Form</label>
                    <div className="d-flex">
                        <Form.Item
                            label=""
                            name="productStartDate"
                            rules={[{required: true, message: 'Please input start Date!'}]}
                        >
                            <DatePicker
                                format="YYYY-MM-DD"
                                placeholder="Start Date"
                            />
                        </Form.Item>
                        <span className="ml-2 mr-2">To</span>
                        <Form.Item
                            label=""
                            name="productEndDate"
                            rules={[{required: true, message: 'Please input End Date!'}]}
                        >
                            <DatePicker
                                format="YYYY-MM-DD"
                                placeholder="End Date"
                            />
                        </Form.Item>
                    </div>



                </div>
                <div className="col-8">
                    <Form.Item
                        label=""
                        name="description"
                        rules={[{required: true, message: 'Please input Description!'}]}
                    >
                        <Input.TextArea placeholder="Description"/>
                    </Form.Item>
                </div>
            </div>

            <div className={styles.uploadImage}>
                <UploadMultipleImage
                    description="Upload Product Image (Upload Limit 5 Image)"
                    setImageList={setImageList}
                />
            </div>

            <div className="d-flex mt-3">
                <Form.Item
                    label=""
                    name="productHasWarrenty"
                    rules={[{required: false, message: 'Please input Commercial!'}]}
                >
                    <Checkbox>Product has warrenty</Checkbox>
                </Form.Item>
                <Form.Item
                    label=""
                    name="warrentyType"
                    rules={[{required: false, message: 'Please input Warrenty Type!'}]}
                >
                    <Select placeholder="Warrenty Type">
                        <Select.Option value="1">1 Year</Select.Option>
                        <Select.Option value="2">2 Year</Select.Option>
                        <Select.Option value="3">3 Year</Select.Option>
                        <Select.Option value="4">4 Year</Select.Option>
                    </Select>

                </Form.Item>
            </div>


        </div>
    );
};

export default ProductGenral;