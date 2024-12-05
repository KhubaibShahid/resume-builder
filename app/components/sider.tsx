import React, { useEffect, useState } from "react";
import {
  HomeOutlined,
  LayoutOutlined,
  InfoCircleOutlined,
  QuestionCircleOutlined,
  UserOutlined,
  MenuOutlined,
  CloseOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { useRouter } from "nextjs-toploader/app";
import { useContext } from "react";
import { User } from "../context/app";

const { Header, Sider, Content } = Layout;

const items = [
  {
    key: "1",
    icon: <HomeOutlined style={{}} />,
    label: "Home",
    path: "/",
  },
  {
    key: "2",
    icon: <LayoutOutlined />,
    label: "Resume Templates",
    path: "/templates"
  },
  {
    key: "3",
    icon: <InfoCircleOutlined />,
    label: "About Us",
    path: "/about"
  },
  {
    key: "4",
    icon: <QuestionCircleOutlined />,
    label: "Feedback",
    path: "/feedback"
  },
  {
    key: "5",
    icon: <UserOutlined />,
    label: "Account",
    path: "/login"
  },
]
const SiderNav: React.FC<{pathKey: number}> = (pathKey) => {

  const user = useContext(User);

  const router = useRouter()
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    if (user.user) {
      items[4].path = "/Account";
    } else {
      items[4].path = "/login";
    }
  }, [user])

  return (
    <Layout style={{ height: "100svh", backgroundColor: "transparent" , position: "fixed", right: 0, top: 0 }}>
      <Button
            type="text"
            icon={collapsed ? <MenuOutlined /> : <CloseOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              display: ` ${collapsed ? `inline-block` : `none`}`,
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
      <Sider
        style={{ backgroundColor: "white", display: `${collapsed ? `none` : `inline-block`}` }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div
          className={`demo-logo-vertical ${
            collapsed ? `flex justify-center` : ``
          }`}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuOutlined /> : <CloseOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              display: ` ${!collapsed ? `inline-block` : `none`}`,
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </div>
        <Menu
        onClick={(e) => {router.push(items[+e.key - 1].path)}}
          style={{ display: ` ${collapsed ? `none` : `flex`}`, flexDirection: "column", gap: "10px" }}
          theme="light"
          mode="inline"
          defaultSelectedKeys={[String(pathKey)]}
          items={items}
        />
        <div className="flex justify-center">
          {collapsed ? <Button
            onClick={() => {}}
            style={{ backgroundColor: "#8c52ff", padding: "20px 20px"}}
            type="primary"
          >
            <EditOutlined></EditOutlined>
          </Button> : <Button
            onClick={() => {}}
            style={{ backgroundColor: "#8c52ff", padding: "20px 20px"}}
            type="primary"
          >
            <EditOutlined></EditOutlined>Create My Resume
          </Button>}
          
        </div>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}></Header>
        {/* <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </Content> */}
      </Layout>
    </Layout>
  );
};

export default SiderNav;
