import { useGetProductsQuery} from "@/api/product";
import { Button, Skeleton, Table } from "antd";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import React from 'react';
import { useNavigate } from "react-router-dom";


const LayoutWebsite: React.FC = () => {
    const { data, error, isLoading } = useGetProductsQuery();
    const navigate = useNavigate();
    if (isLoading) return <Skeleton />;
    if (error) return <div>Error</div>;
    const dataSource = data?.map(({ id, name, price, description }) => {
        return {
            key: id,
            name,
            price,
            description,
        };
    });
    const Card = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "description",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "Action",
            key: "action",
            render: ({ key: id }: any) => {
                return (
                    <>
                    
                        <Button type="primary" danger className="ml-2">
                            <Link to={`/admin/product/${id}/`}>detail</Link>
                        </Button>
                    </>
                );
            },
        },
    ];
   
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="mb-5 ">Trang chủ</h1>
            <Button
                            type="primary"
                            danger
                            className="ml-2"
                            onClick={() => navigate("/admin/product")}
                        >
                            Go to admin
                        </Button>

            <Table dataSource={dataSource} columns={Card} />
        </div>
    );
};


export default LayoutWebsite;