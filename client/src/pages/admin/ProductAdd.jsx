import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, InputNumber, Radio, Select, Switch, Upload, message } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const { TextArea } = Input;
import api from "../../axios";

const ProductAdd = () => {
    const nav = useNavigate();
    const [form] = Form.useForm()
    const [images, setImages] = useState([]);
    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationFn: async (product) => {
            return await api.post(`/products`, product);
        },

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
            form.resetFields();
            message.success("Thêm sản phẩm thành công");
            nav('/admin/products');
        },
        onError: (error) => {
            console.error('Error adding product:', error);
            message.error("Thêm sản phẩm thất bại");
        }
    });
    
    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    const handleOnChange = (info) => {
        if (info.file.status === "done") {
            console.log('Upload success:', info.file.response);
            setImages((prev) => [...prev, info.file.response.secure_url]);
        } else if (info.file.status === "error") {
            console.error('Upload error:', info.file.response);
        }
    };
    
    const onFinish = (values) => {
        mutate({ ...values, images });
    };
  return (
    <div>
      <h2 className="mb-3 font-bold text-2xl">Create Product</h2>
    <Form
        form={form}
        name="basic"
        labelCol={{
            span: 8,
        }}
        wrapperCol={{
            span: 16,
        }}
        style={{
            maxWidth: 600,
        }}
        onFinish={onFinish}
    >
        <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Bắt buộc nhập tên sản phẩm" }]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            label="Price"
            name="price"
            rules={[
                { required: true, message: "Bắt buộc nhập tên sản phẩm" },
                { type: "number", min: 0, message: "Giá phải nhập > 0" },
            ]}
        >
            <InputNumber />
        </Form.Item>
        <Form.Item label="Tình trạng" name="available" valuePropName="checked">
            <Switch />
        </Form.Item>
        <Form.Item label="Loại hàng" name="type"
        rules={[{required: true, message: "Bắt buộc phải chọn Loại hàng"}]}>
            <Radio.Group>
                <Radio value="type1"> Hàng cũ </Radio>
                <Radio value="type2"> Hàng mới </Radio>
            </Radio.Group>
        </Form.Item>
        <Form.Item label="Danh mục" name="category"
        rules={[{required: true, message: "Bắt buộc phải chọn Danh mục"}]}>
            <Select>
                <Select.Option value="danhmuc1">Danh mục 1</Select.Option>
                <Select.Option value="danhmuc2">Danh mục 2</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item label="Mô tả" name="description">
            <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
                    <Upload
                        multiple={true}
                        action="https://api.cloudinary.com/v1_1/djmnbbsyd/image/upload"
                        listType="picture-card"
                        data={{
                            upload_preset: "img-react-fw2",
                        }}
                        onChange={handleOnChange}
                    >
                        <div>
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </div>
                    </Upload>
                </Form.Item>
        <Form.Item
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
        >
            <Button type="primary" htmlType="submit">
                Add new product
            </Button>
        </Form.Item>
    </Form>
</div>
  );
};

export default ProductAdd;
