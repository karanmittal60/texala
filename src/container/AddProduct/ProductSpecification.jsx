import React from 'react';
import {Button, Form, Input, Select, Space} from "antd";
import { DeleteOutlined, PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';

const ProductSpecification = () => {
    const { Option } = Select;

    return (
        <div>
            <div className="row mb-2">
                <div className="col-3">
                    Measurement Variable
                </div>
                <div className="col-3">
                    Type
                </div>
                <div className="col-3">
                    Value
                </div>
                <div className="col-3">
                    Action
                </div>
            </div>

            <>
                <Form.List name="productSpecification" >
                    {(fields, { add, remove }) => {
                        return (
                            <div>
                                {fields.map(field => (
                                    <div className="row" key={field.key}>
                                        <div className="col-3">
                                            <Form.Item
                                                {...field}
                                                name={[field.name, 'measurementValue']}
                                                fieldKey={[field.fieldKey, 'measurementValue']}
                                                rules={[{required: true, message: 'Please input Measurement Value!'}]}
                                            >
                                                <Input placeholder="Measurement Value" />
                                            </Form.Item>
                                        </div>
                                        <div className="col-3">
                                            <Form.Item
                                                {...field}
                                                name={[field.name, 'type']}
                                                fieldKey={[field.fieldKey, 'type']}
                                                rules={[{required: true, message: 'Please select type!'}]}
                                            >
                                                <Select placeholder="Type"
                                                        style={{ width: '100%' }}>
                                                    <Option value="sqFeet">Sq Feet</Option>
                                                    <Option value="pounds">Pounds</Option>
                                                    <Option value="color">color</Option>
                                                </Select>
                                            </Form.Item>
                                        </div>
                                        <div className="col-3">
                                            <Form.Item
                                                {...field}
                                                name={[field.name, 'value']}
                                                fieldKey={[field.fieldKey, 'value']}
                                                rules={[{required: true, message: 'Please input Value!'}]}
                                            >
                                                <Input placeholder="Value" />
                                            </Form.Item>
                                        </div>
                                        <div className="col-3">
                                            <DeleteOutlined
                                                onClick={() => {
                                                    remove(field.name);
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}

                                <Form.Item>
                                    <Button
                                        type="dashed"
                                        onClick={() =>add()}
                                        block
                                    >
                                        Add Specification
                                    </Button>
                                </Form.Item>
                            </div>
                        );
                    }}
                </Form.List>
            </>
        </div>
    );
};

export default ProductSpecification;