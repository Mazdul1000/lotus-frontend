"use client"

import { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
import {  Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { sidebarItems } from '@/constants/sidebarItems';
import { USER_ROLE } from '@/constants/role';
const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    // user role
    const role = USER_ROLE.ADMIN;
    return (
        <Sider 
        collapsible 
        collapsed={collapsed} 
        onCollapse={(value) => setCollapsed(value)}
        width={280}
        style={{
            overflow: 'auto',
            height: '100vh',
            position: 'sticky',
            left: 0,
            bottom: 0,
            top: 0,
            backgroundColor: "#064C36"
        }}
        >
       <div style={{
        color: 'white',
        fontSize: '2rem',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '1rem'

       }}>
        Lotus
       </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={sidebarItems(role)} style={{backgroundColor:'#064C36', fontWeight:'bold'}} />
      </Sider>
    );
};

export default Sidebar;