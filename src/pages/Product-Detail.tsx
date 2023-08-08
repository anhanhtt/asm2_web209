import { useGetProductByIdQuery} from "@/api/product";
import { Button, Form, Input, Skeleton } from "antd";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


const ProductDetail = () => {
    const { idProduct } = useParams<{ idProduct: string }>();
    const { data: productData, isLoading } = useGetProductByIdQuery(idProduct || "");
    const [form] = Form.useForm();
    const navigate = useNavigate();
 
    useEffect(() => {
        form.setFieldsValue({
            name: productData?.name,
            price: productData?.price,
            description: productData?.description,
        });
    }, [productData]);
   
    type FieldType = {
        name: string;
        price: number;
        description:string;
    };

    return (
        <div className="max-w-4xl mx-auto">
            
            {isLoading ? (
                <Skeleton />
            ) : (
                <Form
                    form={form}
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    
                    autoComplete="off"
                >
                    <Form.Item
                        label="Tên sản phẩm: "
                        name="name"
                       
                    >
                        <input />
                    </Form.Item>

                    <Form.Item  
                        label=" Giá: "
                        name="price">
                    <input />
                    </Form.Item>

                    <Form.Item
                        label="Mô tả: "
                        name="description"
                      
                    >
                       <input />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                       
                        <Button
                            type="primary"
                            danger
                            className="ml-2"
                            onClick={() => navigate("/admin/product")}
                        >
                            Back
                        </Button>
                    </Form.Item>
                </Form>
            )}
        </div>
    );
};
export default ProductDetail;
