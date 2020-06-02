import React, {useState} from 'react';
import {Collapse, Input, Select, Form, Button, message} from 'antd';
import styles from './AddProduct.module.css';
import BreadcrumbCustom from "../../components/breadcrum";
import ProductSpecification from "./ProductSpecification";
import StockInformation from "./StockInformation";
import ProductPrice from "./ProductPrice";
import ProductGenral from "./ProductGenral";
import usePikachu from "../../hooks/usePikachu";
import shortid from 'shortid';


const AddProduct = (props) => {

    const { productList, addProductList} = usePikachu()

    const [images, setImages] = useState([])
    const { Panel } = Collapse;

    const setImageList = (img) => {
        setImages(img)

    }

    const [form] = Form.useForm();

    React.useEffect(() => {
        form.setFieldsValue({
            quantityInStock: 'Bamboo',
        });
    }, []);

    const addProduct = (FormValue) => {
        if (images.length < 1){
            message.error('Please Add Atleast one Image')
        } else {
            FormValue['id'] = shortid.generate()
            FormValue['images'] = images
            addProductList(FormValue)
            message.success('Product Added successfully')
        }

    }

    return (
        <div className={styles.addProductWrapper}>
            <div className={styles.header}>
                Add Product
            </div>
            <BreadcrumbCustom/>

            <Form name="basic" form={form} onFinish={addProduct}>
                <div className={styles.collapse}>
                    <Collapse bordered={false} defaultActiveKey={['productGenral']}>
                        <Panel header="Product Genral" key="productGenral" className={styles.panel}>
                            <ProductGenral form={form} setImageList={setImageList}/>
                        </Panel>
                        <Panel header="Product Specification" key="productSpecification" className={styles.panel}>
                            <ProductSpecification form={form}/>
                        </Panel>
                        <Panel header="Product Price" key="productPrice" className={styles.panel}>
                            <ProductPrice form={form}/>
                        </Panel>
                        <Panel header="Stock Information" key="stockInformation" className={styles.panel}>
                            <StockInformation form={form}/>
                        </Panel>
                    </Collapse>
                </div>

                <div className="float-right">
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </div>
    );
};

export default AddProduct;