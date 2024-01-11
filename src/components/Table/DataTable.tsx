import React from 'react';
import { Space, Table, Tag } from 'antd';
const { Column, ColumnGroup } = Table;


const DataTable = ({data, columns}:any) => {
    return (
      <Table dataSource={data} columns={columns} />
    );
};

export default DataTable;