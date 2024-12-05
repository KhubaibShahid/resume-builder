"use client";

import React, { useState, useEffect } from "react";
import { User, UserData } from "../context/app";
import { auth, onAuthStateChanged } from "../firebase/firebase";

function UserProvider({children} : {children : React.JSX.Element}) {

    const [user, setUser] = useState<any>(false);


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              setUser(user);
              // console.log(true);
            } else {
              setUser(false)
              // console.log(false);
            }
          }); 
    }, [])

    return (
        <User.Provider value={{user}}>
            {children}
        </User.Provider>
    )
}

function DataProvider({children} : {children : React.JSX.Element}) {

  const [obj, setObj] = useState({
    firstname: "Sebastian",
    lastname: "Bennett",
    prof: "Student",
    prof2: "Student",
    job: "Business Administration",
    bio: "I consider my self a responsible and orderly person. I am looking foward for my first work experience.",
    phone: 123456789,
    email: "abc@example.com",
    address: "123 anywhere st. anycity",
    degree1: "Business Administrator career in progress",
    degree2: "Intermediate",
    organization1: "Brocelle university",
    organization2: "Brocelle college",
    year1: "2017",
    year2: "2015",
    lang1: "Native English",
    lang2: "Advance Spanish",
    skill1: "Text-processor",
    skill2: "Spreadsheet",
    skill3: "Slide Presentation",
    company: "Ingoude Company",
    exp: "2 year",
    des: "Participant in volunteer collection to distribute in low income schools",
  });

  return (
    <UserData.Provider value={{obj, setObj}}>
      {children}
    </UserData.Provider>
  )
}


export {UserProvider, DataProvider}