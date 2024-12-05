"use client";
import { Button } from "antd";
import { useEffect, useState, useLayoutEffect } from "react";
import { X, Save } from "lucide-react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { Template1, TemplateDemo } from "../components/templates/template1";
import ModalButton from "../components/modal";
import ResumeForm from "../components/form";
import { User, UserData } from "../context/app";
import { useContext } from "react";
import { redirect } from "next/navigation";
import LoginModal from "../components/loginmodal";
import {
  db,
  doc,
  setDoc,
  collection,
  addDoc,
  updateDoc,
  getDoc,
  arrayUnion,
} from "../firebase/firebase";
import { useSearchParams } from "next/navigation";

export default function ResumeBuild({ template }: any) {
  
  const params = useSearchParams();
  const p = params.get("id");

  const [isDisable, setIsDisable] = useState(false);
  const user = useContext(User);
  const {obj, setObj} = useContext(UserData);

  async function getData() {
    const docRef = doc(db, "resumes", `${p}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setObj(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  async function editData() {
    const resumeRef = doc(db, "resumes", `${p}`);

    await updateDoc(resumeRef, {
      ...obj
    });
  }

  async function saveData() {
    // console.log(user.user.uid);
    const docRef = await addDoc(collection(db, "resumes"), {
      useruid: user.user.uid,
      resumeType: "template1",
      firstname: obj.firstname,
      lastname: obj.lastname,
      prof: obj.prof,
      prof2: obj.prof2,
      job: obj.job,
      bio: obj.bio,
      phone: obj.phone,
      email: obj.email,
      address: obj.address,
      organization1: obj.organization1,
      organization2: obj.organization2,
      degree1: obj.degree1,
      degree2: obj.degree2,
      lang1: obj.lang1,
      lang2: obj.lang2,
      skill1: obj.skill1,
      skill2: obj.skill2,
      skill3: obj.skill3,
      company: obj.company,
      exp: obj.exp,
      des: obj.des,
    });

    const userRef = doc(db, "user", user.user.uid);
    await updateDoc(userRef, {
      resumes: arrayUnion(docRef.id),
    });

    setIsDisable(true);
  }

  useEffect(() => {
    if (!user) {
      redirect("/");
    }
  }, [user]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="resume-build relative max-w-7xl xl:mx-auto">
      <div className="fixed top-5 left-5 z-10">
        <div className="hidden lg:flex">
          <Button className="" danger type="primary">
            Cancel
          </Button>
        </div>
        <div className="lg:hidden">
          <Button className="short-btn" danger type="primary">
            <X></X>
          </Button>
        </div>
      </div>
      <div className="max-w-7xl flex justify-center items-center md:items-start md:justify-between md:  xl:px-0 md: ">
        <ResumeForm
          className={
            "form-section md:ps-8 lg:ps-20 xl:ps-36 pt-10 md:w-[100%] lg:w-[60%] h-svh overflow-y-scroll hidden md:inline-block"
          }
        ></ResumeForm>

        <div className="resume inline-block mx-auto mt-20 md:mt-10">
          {/* <PDFViewer
            className="border-t-8 border-t-gray-700"
            showToolbar={false}
            width={360}
            height={494}
          > */}
          <TemplateDemo data={obj}></TemplateDemo>
          {/* <Template1 data={data.obj}></Template1> */}
          {/* </PDFViewer> */}
        </div>
        <div className="btns fixed bottom-12 right-10 md:hidden ">
          <div className="flex gap-5">
            <div className="">
              <ModalButton>
                <ResumeForm className={"bg-white p-10"}></ResumeForm>
              </ModalButton>
            </div>
            <div>
              {user ? (
                <Button
                  disabled={isDisable}
                  onClick={() => {
                    p ?
                    editData()
                    :
                    saveData()
                  }}
                  className={
                    isDisable
                      ? `!bg-gray-400 short-btn !text-white`
                      : `!bg-[#8C52ff] short-btn`
                  }
                  type="primary"
                >
                  <Save></Save>
                </Button>
              ) : (
                <LoginModal
                  buttonClass="!bg-[#8C52ff] short-btn"
                  buttonText={<Save size={25} />}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
