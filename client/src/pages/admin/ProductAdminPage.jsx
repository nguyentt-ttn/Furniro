import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Skeleton, Table, Image, Button, message, Popconfirm } from "antd";
import { Link } from "react-router-dom";
import api from "../../axios";

const ProductAdminPage = () => {
    const queryClient = useQueryClient();
    const { data, isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const response = await api.get(`/products`);
            return response.data.map(( product) => ({
                key: product._id,
                ...product,
            }));
        },
    });
    const {mutate} = useMutation({
        mutationFn: async (id) => {
            await api.delete(`/products/${id}`);
    
        },
        onSuccess: () => {
            message.success("Xoá sản phẩm thành công");
            queryClient.invalidateQueries({
                queryKey: ["products"],
            })
        }
      })
    const columns = [
        {
            title: "#",
            dataIndex: "index",
            key: "index",
            render: (text, item, index) => index + 1,
        },
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "Images",
            key: "images",
            dataIndex: "images",
            render: (_, item) => {
                return (
                    <div style={{ display: 'flex', gap: '8px' }}>
                        {item.images && item.images.length > 0 ? (
                            item.images.map((image, index) => (
                                <Image
                                    key={index}
                                    width={80}
                                    src={image}
                                    alt={`Image ${index + 1}`}
                                />
                            ))
                        ) : (
                            <span className="text-danger">Chưa có hình ảnh!</span>
                        )}
                    </div>
                );
            },
        },
        
        {
            title: "Price ",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "Tình trạng",
            dataIndex: "available",
            key: "available",
            render: (available) => {
              return available ? "Còn hàng" : "Hết hàng";
            }
          },
        {
            title: "Danh mục",
            dataIndex: "category",
            key: "category",
            render: (category) => {
              return category ==="danhmuc1" ? "Danh mục 1" : "Danh mục 2";
            }
          },
          {
            title: "Loại hàng",
            dataIndex: "type",
            key: "type",
            render: (type) => {
              return type === "type1" ? "Hàng cũ" : "Hàng mới";
            }
          },
        {
          title: "",
          render: (_, products) => (
            <div className=" flex space-x-2">
             <Popconfirm
                        title="Xóa sản phẩm"
                        description="Bạn có chắc chắn xóa product này không?"
                        onConfirm={() => mutate(products._id)}
                        okText="Đồng ý"
                        cancelText="Huỷ"
                    >
                        <Button danger>Remove</Button>
                    </Popconfirm>
              <Link to={`/admin/products/${products._id}`}>
                  <Button type="primary">Update</Button>
              </Link>
              </div>
          ),
      },
        
    ];
    return (
        <div>
            <h1 className="text-3xl mb-4">Quản lý sản phẩm</h1>
            <Skeleton loading={isLoading} active>
                <Link to="/admin/products/add"><button className="btn btn-success p-2 mb-3">Add new product</button></Link>
                <Table dataSource={data} columns={columns} />
            </Skeleton>
        </div>
    );
};


export default ProductAdminPage;