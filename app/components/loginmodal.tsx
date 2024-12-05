import React, { useState } from "react";
import { Button, Modal, Input, Form } from "antd";
import Image from "next/image";
import GOOGLE from "../assests/google-icon-logo.svg";

const LoginModal: React.FC<{buttonText: string | React.JSX.Element, buttonClass: string}> = ({ buttonText, buttonClass }) => {
  const [isAccount, setIsAccount] = useState(true);

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  // const [modalText, setModalText] = useState("Content of the modal");

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    // setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  return (
    <>
      <Button
      type="primary"
        className={buttonClass}
        onClick={showModal}
      >
        {buttonText as string}
      </Button>
      <Modal className="!top-10"
        okText={isAccount ? "Login" : "Signup"}
        title={isAccount ? "Login" : "Signup"}
        open={open}
        okButtonProps={{className: "!bg-[#8C52FF]"}}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        {isAccount ? (
          <div>
            <div className="modalemail-section max-w-md my-10 mx-auto">
              <label className="text-lg" htmlFor="modalemail">
                Email
              </label>
              <Input
                placeholder="Enter your email"
                className="!mt-3"
                id="modalemail"
                type="email"
              ></Input>
            </div>
            <div className="password-section max-w-md mx-auto">
              <label className="text-lg" htmlFor="modalpassword">
                Password
              </label>
              <Input.Password
                placeholder="Enter your password"
                className="mt-3"
                id="modalpassword"
                type="password"
              ></Input.Password>
            </div>
            <div className="btn-section max-w-md my-10 mx-auto flex justify-between items-center">
              <p>
                Don{`&apos;`}t have an Account?{" "}
                <span
                  onClick={() => setIsAccount(false)}
                  className="text-blue-500 cursor-pointer"
                >
                  Sign up
                </span>
              </p>
            </div>
            <div className="btn-section max-w-md my-10 mx-auto flex flex-col">
              <Button className="!bg-slate-50 !text-lg !px-5 !py-5">
                <Image width={30} alt="google-logo" src={GOOGLE}></Image> Login
                with Google
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div className="email-section max-w-md my-10 mx-auto">
              <label className="text-lg" htmlFor="modalemail2">
                Email
              </label>
              <Input
                placeholder="Enter your email"
                className="!mt-3"
                id="modalemail2"
                type="email"
              ></Input>
            </div>
            <div className="password-section max-w-md mx-auto">
              <label className="text-lg" htmlFor="modalpassword2">
                Password
              </label>
              <Input.Password
                placeholder="Enter your password"
                className="mt-3"
                id="modalpassword2"
                type="password"
              ></Input.Password>
            </div>
            <div className="email-section max-w-md my-10 mx-auto">
              <label className="text-lg" htmlFor="modalconfirmPassword">
                Confirm Password
              </label>
              <Input.Password
                placeholder="Confirm your password"
                className="mt-3"
                id="modalconfirmPassword"
                type="text"
              ></Input.Password>
            </div>
            <div className="password-section max-w-md my-10 mx-auto flex justify-between items-center">
              <p>
                Already have an Account?{" "}
                <span
                  onClick={() => setIsAccount(true)}
                  className="text-blue-500 cursor-pointer"
                >
                  Log in
                </span>
              </p>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default LoginModal;
