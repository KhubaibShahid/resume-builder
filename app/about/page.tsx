"use client";
import Nav from "../components/nav";
import Image from "next/image";
import PURPLE from "../assests/Untitled_design-removebg-preview.png";
import { FileUser, FileEdit, FileDown } from "lucide-react";
import { useContext, useEffect } from "react";
import { User } from "../context/app";

export default function About() {

  const user = useContext(User)

  return (
    <div>
      <Nav pathKey={3}>
        <div className="about-main">
          <div className="flex items-center my-20 lg:m-0">
            <Image
              src={PURPLE}
              alt="purple"
              className="hidden sm:inline-block rotate-45"
            ></Image>
            <div className="md:w-4/5 lg:w-1/2">
              <h2 className="text-center sm:text-start text-4xl md:text-5xl font-bold mb-10 px-10">
                About Us
              </h2>
              <p className="text-center sm:text-start sm:text-lg md:text-lg text-gray-500 px-3 sm:px-10">
                Resume Builder is the premier resource for job seekers. You can
                get access to: Our cutting-edge resume builder app Specialized
                resume templates and examples crafted by certified resume
                writers Advice from industry recruiters and career coaches The
                Resume Builder app shows you how to make an ideal resume,
                including what keywords and relevant experience you should use.
              </p>
            </div>
          </div>

          <div className="how-it-work my-20">
            <div className="my-20 text-center">
              <h2 className="font-bold text-4xl md:text-5xl">How It Works</h2>
            </div>
            <div className="flex flex-col gap-y-20 items-center justify-center">
              <div className="flex gap-4 w-3/4 flex-col items-center text-center">
                <div>
                  <FileUser className="logo-purple sm w-16 h-16 md:w-24 md:h-24"></FileUser>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    Select your template
                  </h3>
                  <p className="text-xl text-gray-500">
                    select your template by click on create button. checkout our
                    multiple resume template design
                  </p>
                </div>
              </div>
              <div className="flex gap-4 w-3/4 flex-col items-center text-center">
                <div>
                  <FileEdit className="logo-purple w-16 h-16 md:w-24 md:h-24" size={100}></FileEdit>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Fill the inputs</h3>
                  <p className="text-xl text-gray-500">
                    fill all the inputs and customize resume template with
                    different colors and patterns
                  </p>
                </div>
              </div>
              <div className="flex w-3/4 gap-4 flex-col items-center text-center">
                <div>
                  <FileDown className="logo-purple w-16 h-16 md:w-24 md:h-24" size={100}></FileDown>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    Download and Share
                  </h3>
                  <p className="text-xl text-gray-500">
                    After completing customization download your resume pdf file
                    or also you can share it
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Nav>
    </div>
  );
}
