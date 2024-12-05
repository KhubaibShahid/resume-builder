import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Pencil } from "lucide-react";
import ResumeForm from "./form";

const ModalButton: React.FC<{children: React.JSX.Element}> = ({children}) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("modal text");

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
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
      <Button onClick={showModal} className="short-btn !bg-[#8C52FF]" type="primary">
        <Pencil size={25}></Pencil>
      </Button>
      {/* <Button type="primary" onClick={showModal}>
        Open Modal with async logic
      </Button> */}
      <Modal
      className="h-4/5 !top-10 rounded-md overflow-y-scroll modal !py-0 bg-white"
        title="Title"
        open={open}
        okButtonProps={{className: "!bg-[#8C52FF]"}}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div>{children}</div>
      </Modal>
    </>
  );
};

export default ModalButton;
