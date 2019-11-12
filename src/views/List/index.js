import React from 'react';
import { Table, Alert } from 'antd';

function List () {
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];


  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const tableProps = {
    dataSource,
    columns,
  }

  function message () {
    return (
      <>
        总共<span>10</span>条
      </>
    )
  }

  return (
    <div>
      <Alert
        style={{marginBottom: '20px'}}
        message={
          message()
        }
        type="info" showIcon />

      <Table {...tableProps} />
    </div>
  )
}

export default List
