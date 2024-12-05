"use client";
import Nav from "../components/nav";
import IMAGE from "../assests/Untitled_design-removebg-preview.png";
import Image from "next/image";
import { Input, Button, Form } from "antd";
import { useContext, useEffect, useState } from "react";
import { User } from "../context/app";
import GOOGLE from "../assests/google-icon-logo.svg";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setDoc,
  doc,
  db
} from "../firebase/firebase";
import { redirect } from "next/navigation";
import Loading from "./loading";

export default function Login() {
  const [isAccount, setIsAccount] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [email2, setEmail2] = useState("");
  const [password2, setPassword2] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const [emailStatus, setEmailStatus] = useState<"validating" | "success" | "error">("validating");
  const [passStatus, setPassStatus] = useState<"validating" | "success" | "error">("validating");
  const [pass2Status, setPass2Status] = useState<"validating" | "success" | "error">("validating");
  const [cPassStatus, setCPassStatus] = useState<"validating" | "success" | "error">("validating");
  const [email2Status, setEmail2Status] = useState<"validating" | "success" | "error">("validating");
 

  const [emailHelp, setEmailHelp] = useState("");
  const [passHelp, setPassHelp] = useState("");
  const [pass2Help, setPass2Help] = useState("");
  const [cPassHelp, setCPassHelp] = useState("");
  const [email2Help, setEmail2Help] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  function loginAccount() {

    let emailFlag = false;
    let passFlag = false;

    const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

    if (email.match(regex)) {
      setEmailStatus("success");
      setEmailHelp("successfull");
      emailFlag = true;
    } else {
      setEmailStatus("error");
      setEmailHelp("type valid email");
    }


    if (password.length < 8) {
      setPassHelp("minimum 8 characters allowed");
      setPassStatus("error");
    } else {
      passFlag = true;
      setPassHelp("successfull");
      setPassStatus("success");
    }

    if (emailFlag && passFlag) {
      console.log("login");
    } else {
      console.log("wrong login info");
    }
  }

  function createAccont() {

    let emailFlag = false;
    let passFlag = false;
    let cPassFlag = false;

    const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

    if (email2.match(regex)) {
      setEmail2Status("success");
      setEmail2Help("successfull");
      emailFlag = true;
    } else {
      setEmail2Status("error");
      setEmail2Help("type valid email");
    }

    if (password2.length < 8) {
      setPass2Help("minimum 8 characters allowed");
      setPass2Status("error");
    } else {
      passFlag = true;
      setPass2Help("successfull");
      setPass2Status("success");
    }
    
    if (confirmPassword.length < 8 ) {
      setCPassHelp("minimum 8 characters allowed");
      setCPassStatus("error");

    } else {
      if (confirmPassword !== password2) {
        setCPassHelp("password doesn't match");
        setCPassStatus("error")
      } else {
        cPassFlag = true;
        setCPassHelp("successfull");
        setCPassStatus("success");
      }
    }

    
    if (emailFlag && passFlag && cPassFlag) {
      createUserWithEmailAndPassword(auth, email2, password2)
        .then(async(userCredential) => {
          const user = userCredential.user;
          await setDoc(doc(db, "user", user.uid), {
            uid : user.uid,
            email : user.email
          });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
      console.log("user");
    } else {
      console.log("something went wrong");
    }

    
  }
  
  const user = useContext(User);
  
  useEffect(() => {
    console.log(user, "user");
    if (user.user) {
      setIsLoading(false);
      redirect("/")
    } else {
      setIsLoading(false)
    }
  }, [])

  return (
    isLoading ? <div></div> :
    <div>
      <Nav pathKey={5}>
        <div className="login-main flex flex-col justify-center gap-20 h-svh">
          <div className="flex justify-center">
            <div className="flex gap-5 -ms-10 items-center">
              <Image
                className="rotate-45 w-36"
                src={IMAGE}
                alt="logo-img"
              ></Image>
              <h2 className="text-5xl font-bold">
                {isAccount ? "Login" : "Sign up"}
              </h2>
            </div>
          </div>

          <div className="from-section px-3">
            {isAccount ? (
              <div>
                <div className="email-section max-w-md mb-10 mx-auto">
                  <label className="text-lg" htmlFor="email">
                    Email
                  </label>
                  <Form.Item validateStatus={emailStatus} help={emailHelp}>
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="mt-3"
                    id="email"
                    type="email"
                  ></Input>
                  </Form.Item>
                </div>
                <div className="password-section max-w-md mx-auto">
                  <label className="text-lg" htmlFor="password">
                    Password
                  </label>
                  <Form.Item validateStatus={passStatus} help={passHelp}>
                  <Input.Password
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="mt-3"
                    id="password"
                    type="password"
                  ></Input.Password>
                  </Form.Item>
                </div>
                <div className="btn-section max-w-md my-10 mx-auto flex justify-between items-center">
                  <Button onClick={() => {loginAccount()}} className="btn text-lg px-5 py-4">Login</Button>
                  <p>
                    Don't have an Account?{" "}
                    <span
                      onClick={() => setIsAccount(false)}
                      className="text-blue-500 cursor-pointer"
                    >
                      Sign up
                    </span>
                  </p>
                </div>
                <div className="btn-section max-w-md my-10 mx-auto flex flex-col">
                  <Button className="bg-slate-50 text-lg px-5 py-5">
                    <Image width={30} alt="google-logo" src={GOOGLE}></Image>{" "}
                    Login with Google
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <div className="email-section max-w-md mb-10 mx-auto">
                  <label className="text-lg" htmlFor="email">
                    Email
                  </label>
                  <Form.Item validateStatus={email2Status} help={email2Help}>
                  <Input
                    onChange={(e) => setEmail2(e.target.value)}
                    placeholder="Enter your email"
                    className="mt-3"
                    id="email"
                    type="email"
                  ></Input>
                  </Form.Item>
                </div>
                <div className="password-section max-w-md mx-auto">
                  <label className="text-lg" htmlFor="password">
                    Password
                  </label>
                  <Form.Item validateStatus={pass2Status} help={pass2Help}>
                  <Input.Password
                    onChange={(e) => setPassword2(e.target.value)}
                    placeholder="Enter your password"
                    className="mt-3"
                    id="password"
                    type="password"
                  ></Input.Password>
                  </Form.Item>
                </div>
                <div className="email-section max-w-md my-10 mx-auto">
                  <label className="text-lg" htmlFor="confirmPassword">
                    Confirm Password
                  </label>
                  <Form.Item validateStatus={cPassStatus} help={cPassHelp}>
                  <Input.Password
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your name"
                    className="mt-3"
                    id="confirmPassword"
                    type="password"
                  ></Input.Password>
                  </Form.Item>
                </div>
                <div className="password-section max-w-md my-10 mx-auto flex justify-between items-center">
                  <Button
                    onClick={() => createAccont()}
                    className="btn text-lg px-5 py-4"
                  >
                    Create Account
                  </Button>
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
          </div>
        </div>
      </Nav>
    </div>
  );
}
