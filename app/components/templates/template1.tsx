"use client";
import "../../globals.css";
import { MapPin, Phone, Mail } from "lucide-react";
import {
  Text,
  Document,
  View,
  StyleSheet,
  Page,
} from "@react-pdf/renderer";
import PHONE from "../../assests/5571529.jpg";

function Template1({ data }: any) {
  const styles = StyleSheet.create({
    page: {
      backgroundColor: "white",
      paddingTop: 60,
    },
    header: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: 10,
      alignItems: "center",
      backgroundColor: "#d6dde6",
      height: 190,
      width: "100%",
    },
    headtitle: {
      fontSize: 40,
      fontWeight: "bold",
    },
    subhead: {
      color: "#5c5e61",
      fontSize: 17,
      marginBottom: 8,
    },
    main: {
      paddingLeft: 40,
      width: "100%",
      height: "590",
      display: "flex",
      flexDirection: "row",
    },
    section1: {
      backgroundColor: "#e8eaee",
      width: 220,
      height: "100%",
      paddingTop: 30,
      paddingHorizontal: 20,
      display: "flex",
      flexDirection: "column",
      gap: 80,
    },
    box: {
      display: "flex",
      flexDirection: "column",
    },
    subtext: {
      color: "#94969a",
      fontSize: 15,
      marginBottom: 5,
    },
    section2: {
      width: "60%",
      height: "100%",
      paddingTop: 30,
      paddingHorizontal: 20,
      display: "flex",
      flexDirection: "column",
      gap: 20,
    },
  });

  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.headtitle}>
            {data.firstname} {data.lastname}
          </Text>
          <Text style={styles.subhead}>{data.prof}</Text>
        </View>
        <View style={styles.main}>
          <View style={styles.section1}>
            <View style={styles.box}>
              <Text style={styles.subhead}>PROFILE</Text>
              <Text style={styles.subtext}>{data.job}</Text>
              <Text style={styles.subtext}>{data.prof2}</Text>
              <Text style={styles.subtext}>{data.bio}</Text>
            </View>

            <View style={styles.box}>
              <Text style={styles.subhead}>CONTACT</Text>
              <Text style={styles.subtext}>
                
                {data.phone}
              </Text>
              <Text style={styles.subtext}>{data.email}</Text>
              <Text style={styles.subtext}>{data.address}</Text>
            </View>
          </View>

          <View style={styles.section2}>
            <View style={styles.box}>
              <Text style={styles.subhead}>EDUCATION</Text>
              <Text style={styles.subtext}>{data.organization1}</Text>
              <Text style={styles.subtext}>{data.degree1}</Text>
              <Text style={styles.subtext}>{data.year1}</Text>
              <View style={{ marginTop: 10 }}>
                <Text style={styles.subtext}>{data.organization2}</Text>
                <Text style={styles.subtext}>{data.degree2}</Text>
                <Text style={styles.subtext}>{data.year2}</Text>
              </View>
            </View>

            <View style={styles.box}>
              <Text style={styles.subhead}>LANGUAGE</Text>
              <Text style={styles.subtext}>{data.lang1}</Text>
              <Text style={styles.subtext}>{data.lang2}</Text>
            </View>

            <View style={styles.box}>
              <Text style={styles.subhead}>SKILLS</Text>
              <Text style={styles.subtext}>{data.skill1}</Text>
              <Text style={styles.subtext}>{data.skill2}</Text>
              <Text style={styles.subtext}>{data.skill3}</Text>
            </View>

            <View style={styles.box}>
              <Text style={styles.subhead}>WORK EXPERIENCE</Text>
              <Text style={styles.subtext}>{data.company}</Text>
              <Text style={styles.subtext}>{data.exp}</Text>
              <Text style={styles.subtext}>{data.des}</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

function TemplateDemo({ data }: any) {
  return (
    <div className="flex bg-white template1">
      <div className="t-size template1 border-2 border-black">
        <div
          style={{
            backgroundColor: "#d6dde6",
          }}
          className="h-28 w-full mt-9 text-center flex flex-col justify-center"
        >
          <h2 className="name text-2xl font-bold">
            {data.firstname} {data.lastname}
          </h2>
          <h4 className="job-title text-gray-700">{data.prof}</h4>
        </div>

        <div style={{ height: "70%" }} className="flex ps-5">
          <div
            style={{ backgroundColor: "#e8eaee" }}
            className="max-w-28 h-full px-3 py-4 flex flex-col gap-12"
          >
            <div className="">
              <h4 className="profile-header mb-1">PROFILE</h4>
              <p className="profile-text text-gray-700">{data.job}</p>
              <p className="profile-text text-gray-700">{data.prof2}</p>
              <p className="profile-text overflow-x-hidden text-gray-700">
                {data.bio}
              </p>
            </div>
            <div>
              <h4 className="profile-header mb-1">CONTACT ME</h4>
              <div className="text-gray-700 mb-1 flex gap-1">
                <p className="profile-text "> {data.phone}</p>
              </div>
              <div className="text-gray-700 mb-1 flex gap-1">
                {/* <Mail size={10} className="inline-block"></Mail> */}
                <p className="profile-text "> {data.email}</p>
              </div>
              <div className="text-gray-700 flex gap-1">
                {/* <MapPin className="inline-block" size={10}></MapPin> */}
                <p className="profile-text "> {data.address}</p>
              </div>
            </div>
          </div>

          <div className=" px-3 ">
            <div className="educaton mt-2">
              <div className="mb-2">
                <h2 className="text-gray-600 profile-header mb-2">EDUCATION</h2>
                <h3 className="text-gray-600 profile-text">
                  {data.organization1}
                </h3>
                <p className="text-gray-600 profile-text">{data.degree1}</p>
                <p className="text-gray-600 profile-text">{data.year1}</p>
              </div>
              <div>
                <h3 className="text-gray-600 profile-text">
                  {data.organization2}
                </h3>
                <p className="text-gray-600 profile-text">{data.degree2}</p>
                <p className="text-gray-600 profile-text">{data.year2}</p>
              </div>
            </div>

            <div className="language my-5">
              <h2 className="text-gray-600 profile-header mb-2">LANGUAGE</h2>
              <p className="text-gray-600 profile-text">{data.lang1}</p>
              <p className="text-gray-600 profile-text">{data.lang2}</p>
            </div>

            <div className="skills my-5">
              <h2 className="text-gray-600 profile-header mb-2">SKILLS</h2>
              <p className="text-gray-600 profile-text">{data.skill1}</p>
              <p className="text-gray-600 profile-text">{data.skill2}</p>
              <p className="text-gray-600 profile-text">{data.skill3}</p>
            </div>

            <div className="experience">
              <h2 className="text-gray-600 profile-header mb-2">
                WORK EXPERIENCE
              </h2>
              <h3 className="text-gray-600 profile-text">{data.company}</h3>
              <p className="text-gray-600 profile-text">{data.exp}</p>
              <p className="text-gray-600 profile-text">{data.des}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Template1, TemplateDemo };
