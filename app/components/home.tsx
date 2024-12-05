"use client"
import HEROLOGO from "../assests/828564092394Resume_Evaluation.gif";
import SMALLIMG from "../assests/mobile-size-bg.gif";
import useMediaQuery from "../hook/media";
import { Button } from "antd";
import Image from "next/image";
import RT1 from "../assests/resume-template-1.png";
import RT2 from "../assests/resume-template-2.png";
import RT3 from "../assests/resume-template-3.png";
import BRAND1 from "../assests/brand-1.svg"
import BRAND2 from "../assests/brand-2.svg"
import BRAND3 from "../assests/brand-3.svg"
import BRAND4 from "../assests/brand-4.svg"
import BRAND5 from "../assests/brand-5.svg"
import BRAND6 from "../assests/brand-6.svg"
import { BrainCircuit, FileText, FileUser, Info } from "lucide-react";
import LoginModal from "./loginmodal";
import { useEffect, useContext } from "react";
import { User } from "../context/app";
import { useRouter } from "nextjs-toploader/app";


export default function Home() {

  const router = useRouter();

  const media = useMediaQuery("(max-width: 768px)");

  const user = useContext(User);

  // useEffect(() => {
  //   if (media) {

  //   }
  // }, [media])

  function createResume() {
    router.push("/createResume")
  }

  return (
    <div className="main !overflow-x-hidden">
      {/* ---------------- Hero Section ----------------- */}

      <div className={`hero-section h-[90svh] flex items-center justify-center mb-36 md:-mt-10 px-5 xl:-mt-10 relative`}>

        <div className="xl:ms-12 text-center md:text-start ms-0 sm:ms-5 md:w-1/2">
          <h2 className="xl:!text-[5em] sm:!text-[4.5em] text-5xl font-bold">
            Super Easy <br />
            <span className=""> Resume Builder </span>
          </h2>
          <div className="sm:text-2xl text-xl lg:text-xl mt-5">
            Easily create the best resume for your job using our free resume
            builder platform.
          </div>
          <div className="mt-5 mx-auto">
             <Button className="sm:text-lg text-lg"
              onClick={() => {createResume()}}
              style={{
                backgroundColor: "#8c52ff",
                padding: "22px 20px",
              }}
              type="primary"
              size="large"
            >
              Create My Resume Now
            </Button>            
          </div>
        </div>

        <div className="hidden md:inline-block w-1/2">
          <Image
            // className="md:max-w-xs lg:max-w-lg xl:w-3xl"
            className="xl:!w-[800px]"
            src={HEROLOGO}
            alt="Hero-logo"
          ></Image>
        </div>

      </div>

      {/* ---------------- Hero Section ----------------- */}

      {/* ---------------- Template Section ----------------- */}

      <div id="template-section" className="relative mt-20 mb-52 px-5">
        <div className="bg-image blur-md absolute -top-20"></div>
        <div className="flex flex-col items-center bg-transparent gap-20 relative">
          <h2 className="text-4xl text-center  sm:text-5xl md:text-6xl font-bold mb-10 md:mb-20">
            Pick one of templates <br /> and build your resume
          </h2>
          <div className="flex flex-wrap justify-center gap-10 bg-transparent md:gap-10">
            <div className="border border-black relative t-box">
              <div className="t-btn">
                <Button onClick={() => {createResume()}} className="btn text-xl p-5" type="primary">
                  Create
                </Button>
              </div>
              <Image src={RT1} width={300} alt="resume-template1"></Image>
            </div>
            <div className="border border-black relative t-box">
              <div className="t-btn">
                <Button className="btn text-xl p-5" type="primary">
                  Create
                </Button>
              </div>
              <Image src={RT2} width={300} alt="resume-template2"></Image>
            </div>
            <div className="border border-black relative t-box">
              <div className="t-btn">
                <Button className="btn text-xl p-5" type="primary">
                  Create
                </Button>
              </div>
              <Image src={RT3} width={300} alt="resume-template3"></Image>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- Template Section ----------------- */}

      {/* ---------------- Goods Section ----------------- */}

      <div className="goods-section md:mt-40">
        <div className="">
          <h2 className="text-3xl md:text-5xl font-bold w-3/4 text-center mx-auto">
            Get hired faster with our feature-packed and easy-to-use resume
            builder app
          </h2>
        </div>
        <div className="flex mt-10 flex-col md:flex-row">
          <div className="p-10 flex flex-col items-center text-center md:inline-block md:text-start">
            <BrainCircuit size={50} className="icon-purple"></BrainCircuit>
            <h3 className="text-2xl font-bold">Powerfull Resume Builder</h3>
            <p className="text-lg">
              Use our potent creation tools and expert guidance to create the
              perfect resume for your next job application.
            </p>
          </div>
          <div className="p-10 flex flex-col items-center text-center md:inline-block md:text-start">
            <FileUser size={50} className="icon-purple"></FileUser>
            <h3 className="text-2xl font-bold">Professional templates</h3>
            <p className="text-lg">
              Choose from applicant tracking systems (ATS)-friendly modern and
              professional templates.
            </p>
          </div>
          <div className="p-10 flex flex-col items-center text-center md:inline-block md:text-start">
            <FileText size={50} className="icon-purple"></FileText>
            <h3 className="text-2xl font-bold">Free resume examples</h3>
            <p className="text-lg">
              Use our resume examples and templates to see what a great resume
              looks like in your field.
            </p>
          </div>
        </div>
        <div className="text-center my-5">
          <Button onClick={() => {createResume()}} className="btn text-xl p-5" type="primary">
            Get Started Now
          </Button>
        </div>
      </div>

      {/* ---------------- Goods Section ----------------- */}

      {/* ---------------- Feedback Section ----------------- */}

      <div className="feedback-section">
        <div>
          <h2 className="text-4xl font-bold text-center mt-20 mb-8">
            What users say about Resume Builder
          </h2>
          <div className="flex text-gray-400 justify-center items-center gap-2">
            <Info size={50}></Info>
            <h2 className="text-3xl text-gray-400 text-center my-8">
              No Feedback Yet
            </h2>
          </div>
          <div className="text-center my-5">
            <Button onClick={() => {router.push("/feedback")}} className="btn text-xl p-5">Give Feedback</Button>
          </div>
        </div>
      </div>

      {/* ---------------- Feedback Section ----------------- */}

      {/* ---------------- Job Section ----------------- */}

      <div className="job-section mt-20">
        <div className="bg-purple-img rounded-3xl overflow-hidden">
          <div className="backdrop-blur-md h-full border px-3">
            <div>
              <h2 className="text-5xl sm:text-7xl font-bold text-white text-center m-10">
                Let’s Land Your <br /> Dream Job Together
              </h2>
            </div>
            <div className="text-center">
              <div className="bg-white inline-block rounded-lg m-5">
                <div onClick={() => {createResume()}}
                  className="job-btn text-xl font-bold py-4 px-5 cursor-pointer"
                >
                  Start Your Resume Now
                </div>
              </div>
            </div>
              <div className="my-10">
                <div className="text-white text-xl text-center">As Seen In</div>
                <div className="flex justify-center gap-10 flex-wrap my-10">
                  <div><Image src={BRAND1} alt="brand-1"></Image></div>
                  <div><Image src={BRAND2} alt="brand-2"></Image></div>
                  <div><Image src={BRAND3} alt="brand-3"></Image></div>
                  <div><Image src={BRAND4} alt="brand-4"></Image></div>
                  <div><Image src={BRAND5} alt="brand-5"></Image></div>
                  <div><Image src={BRAND6} alt="brand-6"></Image></div>
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* ---------------- Job Section ----------------- */}

    </div>
  );
}
