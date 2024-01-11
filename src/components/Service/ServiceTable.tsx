"use client"
import { useGetAllServiceQuery } from '@/redux/features/service/serviceApi';
import DataTable from '../Table/DataTable';
import { Space } from 'antd';

interface DataType {
    _id: string;
    title: string;
    price: number;
    location: string;
    category: string;
    description: string;
    thumbnail: string;
  }

const ServiceTable = () => {

    const columns = [
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
        },
        {
          title: 'Location',
          dataIndex: 'location',
          key: 'location',
        },
        {
          title: 'Category',
          dataIndex: 'category',
          key: 'category',
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
        },
        {
          title: 'Thumbnail',
          dataIndex: 'thumbnail',
          key: 'thumbnail',
          render: (thumbnail: string) => <img src={thumbnail} alt="Thumbnail" style={{ maxWidth: '50px', maxHeight: '50px' }} />,
        },
        {
          title: 'Action',
          key: 'action',
          render: (_: any, record: DataType) => (
            <Space size="middle">
              <a>Invite {record.title}</a>
              <a>Delete</a>
            </Space>
          ),
        },
      ];

    const { data, isLoading, error } = useGetAllServiceQuery({});

    if(isLoading){
        return <h1>Loading...</h1>
    }

    
    return (
        <div>
            <DataTable data={data} columns={columns}/>
        </div>
    );
};

export default ServiceTable;