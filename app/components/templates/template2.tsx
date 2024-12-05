"use client";
import "../../globals.css";
import { MapPin, Phone, Mail } from "lucide-react";
import { Text, Document, View, StyleSheet, Page } from "@react-pdf/renderer";
import PHONE from "../../assests/5571529.jpg";

export default function Template2({ data }: any) {
  const styles = StyleSheet.create({
    page: {
      display: "flex",
      flexDirection: "row",
      backgroundColor: "white",
      paddingVertical: 35,
      paddingHorizontal: 30,
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
    title: {
      fontSize: 28,
      fontWeight: 1000,
      color: "#2c5f9b",
    },
    head: {
      fontSize: 13,
      color: "#2c5f9b",
    },
    head2: {
      fontSize: 12,
      color: "black",
    },
    bio: {
      color: "#8b8b8b",
      fontSize: 13,
    },
    para: {
      color: "#8b8b8b",
      fontSize: 10,
    },
    main: {
      backgroundColor: "red",
    },
    section1: {
      border: "1px solid black",
      width: "65%",
      height: "100%",
      paddingRight: 10,
      display: "flex",
      flexDirection: "column",
      gap: 40,
    },
    mainbox: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
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
      backgroundColor: "blue",
      width: "35%",
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
        <View style={styles.section1}>
          <View style={styles.mainbox}>
            <Text style={styles.title}>Rachelle Beaudry</Text>
            <Text style={styles.bio}>
              Results driven Accounting Executive with a proven record of
              optimizing financial performance. Expertise in strategic financial
              initiative and team leadership. Seeing a challengingexecutive role
              to leverage analytical skills and drive organizational success
            </Text>
          </View>

          <View style={styles.mainbox}>
            <Text style={styles.head}>Work Experience</Text>
            <View style={styles.box}>
              <Text style={styles.head2}>
                Accounting Executive, Brocelle Corporation
              </Text>
              <Text style={styles.para}>jan 2023 - present</Text>
              <Text style={styles.para}>
                Implemented cost-control measures resulting in a 15% reduction
                in operational expenses
              </Text>
              <Text style={styles.para}>
                Streamland financial reporting processes, enhancing overall
                efficiency by 20%
              </Text>
              <Text style={styles.para}>
                led a team in successfully
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.section2}></View>
      </Page>
    </Document>
  );
}
