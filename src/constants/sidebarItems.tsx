import type { MenuProps } from 'antd';
import {
    ProfileOutlined,
    TableOutlined,
    AppstoreOutlined,
    ScheduleOutlined,
    ThunderboltOutlined,
    CreditCardOutlined,
    FileTextOutlined,
  } from "@ant-design/icons";
import Link from 'next/link';
import { USER_ROLE } from './role';

export const sidebarItems = (role:string) => {
    const defaultSidebarItems: MenuProps["items"] = [
        {
          label: "Profile",
          key: "profile",
          icon: <ProfileOutlined />,
          children: [
            {
              label: <Link href={`/${role}/profile`}>Account Profile</Link>,
              key: `/${role}/profile`,
            },
            {
              label: <Link href={`/${role}/change-password`}>Change Password</Link>,
              key: `/${role}/change-password`,
            },
          ],
        },
      ];
    
      const commonAdminSidebarItems: MenuProps["items"] = [
        {
          label: <Link href={`/${role}/manage-users`} >Manage Users</Link>,
          icon: <TableOutlined />,
          key: `/${role}/manage-student`,
        },
        {
          label: "Manage Serivces",
          icon: <TableOutlined />,
          key: `/${role}/manage-services`,
          children: [
            {
              label: <Link href={`/${role}/service-list`}>All Service</Link>,
              key: `/${role}/service-list`,
            },
            {
              label: <Link href={`/${role}/add-service`}>Add New Service</Link>,
              key: `/${role}/add-service`,
            },
          ]
        },
      ];
    
      const adminSidebarItems: MenuProps["items"] = [
        ...defaultSidebarItems,
        ...commonAdminSidebarItems,
        {
          label: "Management",
          key: "management",
          icon: <AppstoreOutlined />,
          children: [
            {
              label: <Link href={`/${role}/bookings`}>Bookings</Link>,
              key: `/${role}/bookings`,
            },
            {
              label: <Link href={`/${role}/bookings`}>Blogs</Link>,
              key: `/${role}/bookings`,
            },
            {
              label: <Link href={`/${role}/bookings`}>FAQs</Link>,
              key: `/${role}/bookings`,
            },
          ],
        },
      ];
    
      const superAdminSidebarItems: MenuProps["items"] = [
        ...defaultSidebarItems,
        ...commonAdminSidebarItems,
        {
          label: <Link href={`/${role}/admin`}>Manage Admin</Link>,
          icon: <TableOutlined />,
          key: `/${role}/admin`,
        },
        {
          label: <Link href={`/${role}/user`}>Manage User</Link>,
          icon: <TableOutlined />,
          key: `/${role}/user`,
        }
      ];
    
      const userSidebarItems: MenuProps["items"] = [
        ...defaultSidebarItems,
        {
          label: <Link href={`/${role}/my-bookings`}>My Bookings</Link>,
          icon: <TableOutlined />,
          key: `/${role}/my-bookings`,
        },
        {
          label: <Link href={`/${role}/payment`}>Payment</Link>,
          icon: <CreditCardOutlined />,
          key: `/${role}/payment`,
        },
      ];
     
      if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
      else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
      else if (role === USER_ROLE.USER) return userSidebarItems;
      else {
        return defaultSidebarItems;
      }
};

