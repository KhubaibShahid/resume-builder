"use client";
import Nav from "../components/nav";
import { Input, Button, message, Form } from "antd";
import { useContext, useState } from "react";
import { User } from "../context/app";
import { collection, addDoc, db } from "../firebase/firebase";

export default function Feedback() {

    const [messageApi, contextHolder] = message.useMessage();

  const [feedbackemail, setFeedbackemail] = useState("");
  const [feedback, setFeedback] = useState("");

  const [emailStatus, setEmailStatus] = useState<"validating" | "error" | "success">("validating");
  const [emailHelp, setEmailHelp] = useState("");
  const [messStatus, setMessStatus] = useState<"validating" | "error" | "success">("validating");
  const [messHelp, setMessHelp] = useState("");

  const { TextArea } = Input;
  const user = useContext(User);

  async function sendFeedback() {
    let emailFlag = false;
    let messFlag = false;

    const regex =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    if (feedbackemail.match(regex)) {
      setEmailStatus("success");
      setEmailHelp("");
      emailFlag = true;
    } else {
      setEmailStatus("error");
      setEmailHelp("type valid email");
    }

    if (feedback) {
      setMessStatus("success");
      setMessHelp("");
      messFlag = true;
    } else {
      setMessStatus("error");
      setMessHelp("enter something");
    }

    if (emailFlag && messFlag) {

        const docRef = await addDoc(collection(db, "feedbacks"), {
          email: feedbackemail,
          message: feedback,
        });

        success()

    }

    function success() {
        messageApi.open({
            type: "success",
            content : "Feedback Send"
        })
    }

  }

  return (
    <div>
        {contextHolder}
      <Nav pathKey={4}>
        <div className="feedback-main mt-10 px-5">
          <div>
            <h2 className="transparent-text text-5xl sm:text-6xl md:text-6xl mb-12">
              FEEDBACK
            </h2>
          </div>
          <div className="flex flex-col max-w-lg mx-auto mb-10">
            <div className="flex flex-col gap-3">
              <label className="text-xl" htmlFor="email">
                Email
              </label>
              <Form.Item validateStatus={emailStatus} help={emailHelp}>
              <Input
                onChange={(e) => {
                  setFeedbackemail(e.target.value);
                }}
                className="w-full text-lg"
                type="email"
              />
              </Form.Item>
            </div>
          </div>
          <div className="flex flex-col max-w-lg mx-auto mb-10">
            <div className="flex flex-col gap-3">
              <label className="text-xl" htmlFor="email">
                Feedback
              </label>
              <Form.Item validateStatus={messStatus} help={messHelp}>
              <TextArea
                onChange={(e) => {
                  setFeedback(e.target.value);
                }}
                rows={6}
                className="w-full text-lg"
              />
              </Form.Item>
            </div>
          </div>
          <div className="flex flex-col max-w-lg mx-auto mb-10">
            <Button
              onClick={() => {
                sendFeedback();
              }}
              className="btn text-xl lg:text-2xl py-6 font-bold"
            >
              Send
            </Button>
          </div>
        </div>
      </Nav>
    </div>
  );
}
