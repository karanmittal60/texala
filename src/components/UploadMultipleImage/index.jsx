import React, {useState} from 'react';
import {  Upload, message  } from 'antd';
import { CloudUploadOutlined } from '@ant-design/icons';

const UploadMultipleImage = (props1) => {

    const {description} = props1;
    const { Dragger } = Upload;

    const [imageList, setImageList] = useState([])

    const props = {
        name: 'file',
        multiple: true,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        disabled: !(imageList.length < 5),
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
                setImageList(info.fileList)
                props1.setImageList(info.fileList)
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    return (
        <div>
            <div className="mb-2">
                <span>{description}</span>
            </div>
            <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                    <CloudUploadOutlined />
                </p>
                <p className="ant-upload-text">Drag and Drop or Browse your file</p>
            </Dragger>
        </div>
    );
};

export default UploadMultipleImage;