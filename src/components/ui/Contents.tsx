"use client"

import React from 'react';
import {  Layout } from 'antd';
import Header from './Header';
const { Content } = Layout;

const Contents = ({children}:{children:React.ReactNode}) => {
    return (
        <Content style={{
            minHeight: "100vh",
            color:"black"
        }}>
            <Header />
            {children}
        </Content>
    );
};

export default Contents;