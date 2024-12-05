"use client"
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { TemplateDemo } from "../components/templates/template1";
import { useEffect, useState } from "react";
import { getDoc, doc, db } from "../firebase/firebase";
import Nav2 from "../components/nav2";

function ResumeApp() {
  const param = useSearchParams();
  const p = param.get("id");

  const [resumeData, setResumeData] = useState<any>({})

  async function getResumeData() {
    const docRef = doc(db, "resumes", `${p}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setResumeData(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  useEffect(() => {
    getResumeData()
  }, []);
  useEffect(() => {
    console.log(resumeData)
  }, [resumeData]);
  return (
    <Nav2 file={resumeData && resumeData}>
        <div className="h-svh flex justify-center mt-10">
            <TemplateDemo data={resumeData}></TemplateDemo>
        </div>
    </Nav2>
  );
}


export default function ShareResumeApp() {
  return(
    <Suspense>
    <ResumeApp></ResumeApp>
    </Suspense>
  )
}