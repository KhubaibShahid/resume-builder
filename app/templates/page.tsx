"use client";
import Nav from "../components/nav";
import RT1 from "../assests/resume-template-1.png";
import RT2 from "../assests/resume-template-2.png";
import RT3 from "../assests/resume-template-3.png";
import Image from "next/image";
import { Button } from "antd";
import {useRouter} from "nextjs-toploader/app";

export default function Template() {

  const router = useRouter();

  return (
    <div className="template-main">
      <Nav pathKey={2}>
        <div className="heading-section">
          <div className="my-12">
            <h1 className="transparent-text text-6xl sm:text-7xl md:text-8xl mb-12">Resume Templates</h1>
            <p className=" text-md md:text-xl text-gray-500 px-2 md:px-20 text-center">
              Crafting a standout resume is key to landing your next job offer.
              With our customizable resume templates and expert content from
              Certified Professional Resume Writers (CPRW), you can easily
              create a polished resume and download it in your preferred format.
              Whether you’re an experienced professional or just starting your
              career, we have a template that suits your needs and helps you
              catch the attention of employers for better results.
            </p>
          </div>
          <div className="flex justify-evenly gap-10 my-20 flex-wrap">
            <div className="border border-black relative t-box">
              <div className="t-btn">
                <Button onClick={() => {router.push("/createResume")}} className="bg-purple-500 text-xl p-5" type="primary">
                  Create
                </Button>
              </div>
              <Image src={RT1} width={300} alt="resume-template1"></Image>
            </div>
            <div className="border border-black relative t-box">
              <div className="t-btn">
                <Button className="bg-purple-500 text-xl p-5" type="primary">
                  Create
                </Button>
              </div>
              <Image src={RT2} width={300} alt="resume-template2"></Image>
            </div>
            <div className="border border-black relative t-box">
              <div className="t-btn">
                <Button className="bg-purple-500 text-xl p-5" type="primary">
                  Create
                </Button>
              </div>
              <Image src={RT3} width={300} alt="resume-template3"></Image>
            </div>
          </div>
        </div>
      </Nav>
    </div>
  );
}
