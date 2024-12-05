"use client";

import Nav from "../components/nav";
import { User, UserData } from "../context/app";
import { useContext, useEffect, useState } from "react";
import { Button } from "antd";
import { TemplateDemo } from "../components/templates/template1";
import {
  getDocs,
  query,
  where,
  collection,
  db,
  auth,
  signOut
} from "../firebase/firebase";
import { Pencil, Download, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function MyAccount() {

  const router = useRouter();

  const user = useContext(User);

  const obj = useContext(UserData);

  const [userResumes, setUserResumes] = useState<any>();

  function userSignout() {
    signOut(auth).then(() => {
      router.push("/")
    }).catch((error) => {
      // An error happened.
    });
  }

  async function getResumes() {
    let arr : any = [];
    const q = query(
      collection(db, "resumes"),
      where("useruid", "==", user.user.uid)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.data)
      arr.push({...doc.data(), id: doc.id});
      // console.log(doc.data(), "obj");
    });
    setUserResumes(arr);
  }

  console.log(userResumes);

  useEffect(() => {
    getResumes();
  }, [user]);

  return (
    <Nav pathKey={5}>
      <div className="mainAcount mx-auto max-w-screen-2xl">
        <div className="header flex items-center h-20 bg-gray-100 justify-between px-10">
          <div>
            <h2 className="text-xl">{user?.user?.email}</h2>
          </div>
          <div>
            <Button onClick={() => {userSignout()}} className="btn" type="primary">
              Log out
            </Button>
          </div>
        </div>
        <div className="userResumes">
          <h2 className="text-[#8C52FF] px-40 text-2xl font-bold text-center py-5 my-5 border-b border-gray-300">
            Documents
          </h2>
          <div className="resumes my-10 flex justify-center gap-10 flex-wrap">
            {userResumes ? (
              userResumes.map((v: any, i: number) => (
                <div key={i} className="file relative inline-block">
                  <div className="absolute hidden gap-5 items-center justify-center w-full h-full">
                    <Button onClick={() => {router.push(`/createResume?id=${v.id}`)}} type="primary" className="short-btn">
                      <Pencil></Pencil>
                    </Button>
                    <Button type="primary" className="short-btn" danger>
                      <Trash2></Trash2>
                    </Button>
                      <Button onClick={() => {router.push(`/resume?id=${v.id}`)}} type="primary" className="short-btn">
                        <Download></Download>
                      </Button>
                  </div>
                  <TemplateDemo data={v}></TemplateDemo>
                </div>
              ))
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </Nav>
  );
}
