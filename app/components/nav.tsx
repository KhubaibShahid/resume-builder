"use client";
import React, { useEffect, useState } from "react";
import { Breadcrumb, Layout, Menu, theme, Button } from "antd";
import LOGO from "../assests/logo.svg";
import Image from "next/image";
import "../globals.css";
import SiderNav from "./sider";
import useMediaQuery from "../hook/media";
import {
  FacebookFilled,
  YoutubeFilled,
  LinkedinFilled,
  InstagramFilled,
  TikTokFilled,
} from "@ant-design/icons";
import { useRouter } from "nextjs-toploader/app";
import { useContext } from "react";
import { User } from "../context/app";

const { Header, Content, Footer } = Layout;

const items = [
  {
    key: "1",
    label: "Home",
    path: "/",
  },
  {
    key: "2",
    label: "Templates",
    path: "/templates",
  },
  {
    key: "3",
    label: "About us",
    path: "/about",
  },
  {
    key: "4",
    label: "Feedback",
    path: "/feedback",
  },
  {
    key: "5",
    label: "Account",
    path: "/login",
  },
];

const Nav: React.FC<{ children: React.JSX.Element; pathKey: number }> = ({
  children,
  pathKey,
}) => {
  const user = useContext(User);

  const router = useRouter();

  let media = useMediaQuery("(max-width : 980px)");

  const [mode, setMode] = useState(false);

  useEffect(() => {
    if (media) {
      setMode(true);
    } else {
      setMode(false);
    }
  }, [media]);

  useEffect(() => {
    if (user.user) {
      items[4].path = "/Account";
      console.log(items[4]);
    } else {
      items[4].path = "/login";
    }
  }, [user]);
  return (
    <Layout>
      {/* ---------------- Header Section ----------------- */}

      <Header
        style={{
          backgroundColor: "white",
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
          // boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
      >
        <Image
          className="mt-5"
          width={180}
          style={{ objectPosition: "center" }}
          height={60}
          src={LOGO}
          alt=""
        />
        {mode ? (
          <SiderNav pathKey={pathKey}></SiderNav>
        ) : (
          <div style={{ display: "flex", gap: 27 }}>
            <Menu
              onClick={(e) => router.push(items[+e.key - 1].path)}
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={[String(pathKey)]}
              items={items}
              style={{
                minWidth: 500,
                display: "flex",
                justifyContent: "space-around",
              }}
            />
            <div>
              <Button
                onClick={() => {}}
                style={{ backgroundColor: "#8c52ff" }}
                type="primary"
              >
                Create My Resume
              </Button>
            </div>
          </div>
        )}
      </Header>

      {/* ---------------- Header Section ----------------- */}

      <Content style={{ backgroundColor: "white" }}>
        <div className={`bg-white ${mode ? `max-w-4xl` : ``}`}>{children}</div>
      </Content>

      {/* ---------------- Footer Section ----------------- */}

<div className="">
      <Footer className={` mb-16 pe-0 ${mode ? `w-11/12` : ``}`}>
        <div className="flex flex-col w-full items-center justify-center md:flex-row md:items-start md:justify-around">
          <div>
            <Image
              width={200}
              height={80}
              src={LOGO}
              alt="resume-builder-logo"
            ></Image>
          </div>

            <div className="text-center mb-10 md:mb-0">
              <h2 className="text-2xl font-bold my-5">About Us</h2>
              <div className="flex flex-row justify-center flex-wrap md:flex-col gap-5">
                <div className="text-xl cursor-default">Build Resume</div>
                <div className="text-xl cursor-default">Contact Us</div>
                <div className="text-xl cursor-default">Give Feedback</div>
                <div className="text-xl cursor-default">Join Us</div>
                <div className="text-xl cursor-default">Resume Templates</div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold my-5">Follow Us</h2>
              <div className="flex gap-5">
                <div className="text-3xl logo-purple">
                  <FacebookFilled></FacebookFilled>
                </div>
                <div className="text-3xl logo-purple">
                  <YoutubeFilled></YoutubeFilled>
                </div>
                <div className="text-3xl logo-purple">
                  <InstagramFilled></InstagramFilled>
                </div>
                <div className="text-3xl logo-purple">
                  <TikTokFilled></TikTokFilled>
                </div>
                <div className="text-3xl logo-purple">
                  <LinkedinFilled></LinkedinFilled>
                </div>
              </div>
            </div>
        </div>
      </Footer>
      </div>

      {/* ---------------- Footer Section ----------------- */}
    </Layout>
  );
};

export default Nav;
