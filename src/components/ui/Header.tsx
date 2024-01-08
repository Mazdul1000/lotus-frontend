import { Avatar, Button, Dropdown, Layout, MenuProps, Row, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { removeUserInfo } from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";
import { useRouter } from "next/navigation";

const { Header: AntHeader } = Layout;

const Header = () => {
    const router = useRouter()
   const logout = () => {
    removeUserInfo(authKey);
    router.push('/')
   } 
  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Button onClick={logout} type="text" danger style={{ fontWeight: "bold" }}>
          Logout
        </Button>
      ),
    },
  ];
  return (
    <AntHeader style={{ color: "#000",
    backgroundColor: "#fff",  
    boxShadow: "0 8px 6px -6px #618D2B",
    width: "100%"}}>
      <Row
      justify="end"
      align= "middle"
      style={{ height: "100%"}}
      >
        <Dropdown menu={{ items }}>
          <a>
            <Space wrap size={16}>
              <Avatar size="large" icon={<UserOutlined />} />
            </Space>
          </a>
        </Dropdown>
      </Row>
    </AntHeader>
  );
};

export default Header;
