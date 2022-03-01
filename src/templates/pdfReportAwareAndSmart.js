import React from "react"
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
  Link,
} from "@react-pdf/renderer"

import csiLogo from "../images/cybersafekids-logo.png"
import toolLogo from "../images/toolforschools-logo.png"
import cyberAwareLogo from "../images/cyberaware-mark-2022.png"
import cyberSmartLogo from "../images/cybersmart-mark-2022.png"
import cyberChampionLogo from "../images/cyberchampion-mark-2022.png"
import BlobSurfer from "../images/blobsurfer.png"

import { awardLevelBlurbs } from "./pdfReportBlurbs"
import { awardByUserType } from "./reportTemplate"

// Download fonts - curl the typical embed link given by google to get individual ttf links
Font.register({
  family: "Poppins",
  src: "https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrFJA.ttf",
  fontStyle: "normal",
  fontWeight: 400,
})
Font.register({
  family: "Poppins",
  src: "https://fonts.gstatic.com/s/poppins/v15/pxiGyp8kv8JHgFVrJJLedw.ttf",
  fontStyle: "italic",
  fontWeight: 400,
})
Font.register({
  family: "Poppins",
  src: "https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLCz7V1s.ttf",
  fontStyle: "normal",
  fontWeight: 700,
})
Font.register({
  family: "Poppins",
  src: "https://fonts.gstatic.com/s/poppins/v15/pxiDyp8kv8JHgFVrJJLmy15lEA.ttf",
  fontStyle: "italic",
  fontWeight: 700,
})

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
  },
  header: {
    oneLogo: {
      width: "90%",
      height: "10vh",
      flexDirection: "row",
      alignItems: "center",
      marginHorizontal: "5%",
      justifyContent: "flex-end",
    },
    twoLogo: {
      width: "90%",
      height: "10vh",
      flexDirection: "row",
      alignItems: "center",
      marginHorizontal: "5%",
      justifyContent: "space-between",
    },
  },
  body: {
    topAlign: {
      width: "90%",
      height: "90vh",
      marginHorizontal: "5%",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      padding: 20,
    },
    centerAlign: {
      width: "90%",
      height: "90vh",
      marginHorizontal: "5%",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      padding: 20,
    },
  },
  div: {
    centered: {
      alignSelf: "center",
    },
    inline: {
      alignSelf: "center",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 40,
    },
    list: {
      marginBottom: 10,
    },
  },
  h1: {
    fontSize: 25,
    fontFamily: "Poppins",
    fontWeight: 700,
    color: "#181818",
    marginBottom: 20,
    alignSelf: "center",
  },
  h2: {
    fontSize: 15,
    fontFamily: "Poppins",
    fontWeight: 700,
    color: "#181818",
    marginBottom: 20,
    marginTop: 20,
    centered: {
      fontSize: 14,
      fontFamily: "Poppins",
      fontWeight: 700,
      color: "#181818",
      marginBottom: 20,
      marginTop: 20,
      alignSelf: "center",
    },
    centeredSpaced: {
      fontSize: 15,
      fontFamily: "Poppins",
      fontWeight: 700,
      color: "#181818",
      marginBottom: 60,
      marginTop: 60,
      alignSelf: "center",
    },
  },
  para: {
    fontSize: 12,
    fontFamily: "Poppins",
    textAlign: "justify",
    color: "#181818",
    marginBottom: 10,
    bold: {
      fontSize: 12,
      fontWeight: 700,
      fontFamily: "Poppins",
      textAlign: "justify",
      color: "#181818",
      marginBottom: 10,
    },
    boldItalic: {
      fontSize: 12,
      fontWeight: 700,
      fontFamily: "Poppins",
      fontStyle: "italic",
      textAlign: "justify",
      color: "#181818",
      marginBottom: 10,
    },
    address: {
      fontSize: 12,
      fontWeight: 400,
      fontFamily: "Poppins",
      textAlign: "left",
      color: "#181818",
    },
    slimWidth: {
      width: 420,
      fontSize: 12,
      fontFamily: "Poppins",
      textAlign: "justify",
      color: "#181818",
      marginBottom: 10,
    },
    breakdown: {
      fontSize: 8,
      fontFamily: "Poppins",
      textAlign: "justify",
      color: "#181818",
    },
  },
  bulletList: {
    fontSize: 12,
    fontFamily: "Poppins",
    textAlign: "justify",
    color: "#181818",
    marginBottom: 0,
    marginLeft: 20,
  },
  bulletListSml: {
    fontSize: 7,
    fontFamily: "Poppins",
    textAlign: "justify",
    color: "#181818",
    marginBottom: 0,
    marginLeft: 10,
  },
  hyperlink: {
    fontSize: 12,
    fontWeight: 700,
    fontFamily: "Poppins",
    textAlign: "left",
    color: "#53c5cd",
  },
  hyperlinkSml: {
    fontSize: 7,
    fontWeight: 700,
    fontFamily: "Poppins",
    textAlign: "left",
    color: "#53c5cd",
  },
  logo: {
    tfs: {
      height: "5vh",
    },
    csi: {
      height: "3.5vh",
    },
  },
  awardImg: {
    width: 400,
    alignSelf: "center",
    marginBottom: 80,
    halfBorder: {
      width: 400,
      alignSelf: "center",
      marginBottom: 40,
    },
    certificate: {
      width: 400,
      alignSelf: "center",
      marginVertical: 20,
    },
  },
  awardImgSml: {
    width: 200,
    alignSelf: "center",
    margin: 20,
  },
  blobSurfer: {
    width: 150,
    alignSelf: "center",
    marginVertical: 50,
  },
  table: {
    flexDirection: "column",
    borderTopWidth: 2,
    borderTopColor: "#53c5cd",
    row: {
      flexDirection: "row",
      borderBottomWidth: 2,
      borderBottomColor: "#53c5cd",
      borderLeftWidth: 2,
      borderLeftColor: "#53c5cd",
    },
    rowNoBreak: {
      flexDirection: "row",
      borderLeftWidth: 2,
      borderLeftColor: "#53c5cd",
    },
    cell: {
      borderRightWidth: 2,
      borderRightColor: "#53c5cd",
      padding: "5px",
      textAlign: "left",
      width: "50%",
    },
    twoCol: {
      leftCell: {
        borderRightWidth: 2,
        borderRightColor: "#53c5cd",
        padding: "5px",
        textAlign: "left",
        width: "30%",
      },
      rightCell: {
        borderRightWidth: 2,
        borderRightColor: "#53c5cd",
        padding: "5px",
        textAlign: "left",
        width: "70%",
      },
    },
    threeCol: {
      leftCell: {
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        borderRightWidth: 2,
        borderRightColor: "#53c5cd",
        padding: "5px",
        textAlign: "left",
        width: "25%",
      },
      midCell: {
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        borderRightWidth: 2,
        borderRightColor: "#53c5cd",
        padding: "5px",
        textAlign: "left",
        width: "45%",
      },
      rightCell: {
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        borderRightWidth: 2,
        borderRightColor: "#53c5cd",
        padding: "5px",
        textAlign: "left",
        width: "30%",
      },
    },
    columnTitle: {
      fontSize: 10,
      fontFamily: "Poppins",
      fontWeight: 700,
      color: "#181818",
    },
    columnTitleSml: {
      fontSize: 8,
      fontFamily: "Poppins",
      fontWeight: 700,
      color: "#181818",
    },
    text: {
      fontSize: 10,
      fontFamily: "Poppins",
      color: "#181818",
      marginBottom: 5,
      textAlign: "left",
    },
    textSml: {
      fontSize: 7,
      fontFamily: "Poppins",
      color: "#181818",
      marginBottom: 2,
      textAlign: "left",
    },
    boldText: {
      fontSize: 10,
      fontWeight: 700,
      fontFamily: "Poppins",
      color: "#181818",
      marginBottom: 5,
      hyphens: "none",
    },
    boldTextSml: {
      fontSize: 7,
      fontWeight: 700,
      fontFamily: "Poppins",
      color: "#181818",
      marginBottom: 5,
      hyphens: "none",
    },
    italicTextSml: {
      fontSize: 7,
      fontWeight: 400,
      fontFamily: "Poppins",
      fontStyle: "italic",
      color: "#181818",
      hyphens: "none",
    },
  },
  breakdownGrid: {
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: 60,
    row: {
      flexDirection: "row",
    },
    cell: {
      padding: "2px",
      textAlign: "left",
      width: "35%",
    },
    columnTitle: {
      fontSize: 13,
      fontFamily: "Poppins",
      fontWeight: 700,
      color: "#181818",
    },
    text: {
      fontSize: 7,
      fontFamily: "Poppins",
      color: "#181818",
    },
    bold: {
      fontSize: 7,
      fontWeight: 700,
      fontFamily: "Poppins",
      color: "#181818",
    },
    highlight: {
      fontSize: 10,
      fontFamily: "Poppins",
      color: "#181818",
    },
    highlightB: {
      fontSize: 10,
      fontWeight: 700,
      fontFamily: "Poppins",
      color: "#181818",
    },
  },
})

// Create Document Component
const PdfReportTemplateAwareSmart = ({ report, reportSubmitted, quota }) => {
  const dateInMillis = reportSubmitted.seconds * 1000
  const reportTimestamp = new Date(dateInMillis).toDateString()
  const totalCompletedSurveys =
    quota.leadersQuota + quota.teachersQuota + quota.pupilsQuota

  const selectMarkLevel = attained => {
    let mark
    switch (attained) {
      case "CyberChampion":
        mark = cyberChampionLogo
        break
      case "CyberSmart":
        mark = cyberSmartLogo
        break
      default:
        mark = cyberAwareLogo
    }
    return mark
  }

  return (
    <Document>
      {/* Page One - Intro with table */}
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.header.oneLogo}>
          <Image
            style={styles.logo.csi}
            src={csiLogo}
            alt="CyberSafeKids Logo"
          />
        </View>
        <View style={styles.body.centerAlign}>
          <View style={styles.div.centered}>
            <Image
              src={toolLogo}
              style={styles.awardImg}
              alt="CyberSafe Tool for Schools"
            />
            <Text style={styles.h1}>REPORT</Text>
            <View style={styles.table}>
              <View style={styles.table.row}>
                <View style={styles.table.cell}>
                  <Text style={styles.table.text}>School Name:</Text>
                </View>
                <View style={styles.table.cell}>
                  <Text style={styles.table.boldText}> {report.reportFor}</Text>
                </View>
              </View>
              <View style={styles.table.row}>
                <View style={styles.table.cell}>
                  <Text style={styles.table.text}>Report Generated:</Text>
                </View>
                <View style={styles.table.cell}>
                  <Text style={styles.table.boldText}>{reportTimestamp}</Text>
                </View>
              </View>
              <View style={styles.table.row}>
                <View style={styles.table.cell}>
                  <Text style={styles.table.text}>
                    Total Surveys Completed:
                  </Text>
                </View>
                <View style={styles.table.cell}>
                  <Text style={styles.table.boldText}>
                    {totalCompletedSurveys}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>

      {/* Page Two - Your grade and Survey breakdown */}
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.header.twoLogo}>
          <Image
            style={styles.logo.tfs}
            src={toolLogo}
            alt="CyberSafe Tool for Schools Logo"
          />
          <Image
            style={styles.logo.csi}
            src={csiLogo}
            alt="CyberSafeKids Logo"
          />
        </View>
        <View style={styles.body.topAlign}>
          <Text style={styles.h2.centered}>Congratulations!</Text>
          <View style={styles.div.inline}>
            <Text style={styles.h2.centered}>You are currently a </Text>
            <Image
              style={styles.awardImgSml}
              src={selectMarkLevel(report.prospectiveMark)}
              alt="Your Mark Level Badge"
            />
            <Text style={styles.h2.centered}>school.</Text>
          </View>

          <Text style={styles.h2}>SURVEY BREAKDOWN</Text>
          <View style={styles.breakdownGrid}>
            <View style={styles.breakdownGrid.row}>
              <View style={styles.breakdownGrid.cell}>
                <Text style={styles.breakdownGrid.columnTitle}>
                  School Leadership
                </Text>
              </View>
              <View style={styles.breakdownGrid.cell}>
                <Text style={styles.breakdownGrid.columnTitle}>Teachers</Text>
              </View>
              <View style={styles.breakdownGrid.cell}>
                <Text style={styles.breakdownGrid.columnTitle}>Pupils</Text>
              </View>
            </View>
            <View style={styles.breakdownGrid.row}>
              <View style={styles.breakdownGrid.cell}>
                <Text style={styles.breakdownGrid.text}>
                  Digital Knowledge:{" "}
                  <Text style={styles.breakdownGrid.bold}>
                    {report.leaders.digitalknowledge}
                  </Text>
                </Text>
                <Text style={styles.breakdownGrid.text}>
                  Privacy:{" "}
                  <Text style={styles.breakdownGrid.bold}>
                    {report.leaders.privacy}
                  </Text>
                </Text>
                <Text style={styles.breakdownGrid.text}>
                  Online Life:{" "}
                  <Text style={styles.breakdownGrid.bold}>
                    {report.leaders.onlinelife}
                  </Text>
                </Text>
                <Text style={styles.breakdownGrid.text}>
                  Communication:{" "}
                  <Text style={styles.breakdownGrid.bold}>
                    {report.leaders.communication}
                  </Text>
                </Text>
                <Text style={styles.breakdownGrid.text}>
                  Critical Thinking:{" "}
                  <Text style={styles.breakdownGrid.bold}>
                    {report.leaders.criticalthinking}
                  </Text>
                </Text>
                <Text style={styles.breakdownGrid.text}>
                  Responsible Use:{" "}
                  <Text style={styles.breakdownGrid.bold}>
                    {report.leaders.responsibleuse}
                  </Text>
                </Text>
                <Text style={styles.breakdownGrid.highlight}>
                  Overall:{" "}
                  <Text style={styles.breakdownGrid.highlightB}>
                    {awardByUserType(report.leaders)}
                  </Text>
                </Text>
              </View>
              <View style={styles.breakdownGrid.cell}>
                <Text style={styles.breakdownGrid.text}>
                  Digital Knowledge:{" "}
                  <Text style={styles.breakdownGrid.bold}>
                    {report.teachers.digitalknowledge}
                  </Text>
                </Text>
                <Text style={styles.breakdownGrid.text}>
                  Privacy:{" "}
                  <Text style={styles.breakdownGrid.bold}>
                    {report.teachers.privacy}
                  </Text>
                </Text>
                <Text style={styles.breakdownGrid.text}>
                  Online Life:{" "}
                  <Text style={styles.breakdownGrid.bold}>
                    {report.teachers.onlinelife}
                  </Text>
                </Text>
                <Text style={styles.breakdownGrid.text}>
                  Communication:{" "}
                  <Text style={styles.breakdownGrid.bold}>
                    {report.teachers.communication}
                  </Text>
                </Text>
                <Text style={styles.breakdownGrid.text}>
                  Critical Thinking:{" "}
                  <Text style={styles.breakdownGrid.bold}>
                    {report.teachers.criticalthinking}
                  </Text>
                </Text>
                <Text style={styles.breakdownGrid.text}>
                  Responsible Use:{" "}
                  <Text style={styles.breakdownGrid.bold}>
                    {report.teachers.responsibleuse}
                  </Text>
                </Text>
                <Text style={styles.breakdownGrid.highlight}>
                  Overall:{" "}
                  <Text style={styles.breakdownGrid.highlightB}>
                    {awardByUserType(report.teachers)}
                  </Text>
                </Text>
              </View>
              <View style={styles.breakdownGrid.cell}>
                <Text style={styles.breakdownGrid.text}>
                  Digital Knowledge:{" "}
                  <Text style={styles.breakdownGrid.bold}>
                    {report.pupils.digitalknowledge}
                  </Text>
                </Text>
                <Text style={styles.breakdownGrid.text}>
                  Privacy:{" "}
                  <Text style={styles.breakdownGrid.bold}>
                    {report.pupils.privacy}
                  </Text>
                </Text>
                <Text style={styles.breakdownGrid.text}>
                  Online Life:{" "}
                  <Text style={styles.breakdownGrid.bold}>
                    {report.pupils.onlinelife}
                  </Text>
                </Text>
                <Text style={styles.breakdownGrid.text}>
                  Communication:{" "}
                  <Text style={styles.breakdownGrid.bold}>
                    {report.pupils.communication}
                  </Text>
                </Text>
                <Text style={styles.breakdownGrid.text}>
                  Critical Thinking:{" "}
                  <Text style={styles.breakdownGrid.bold}>
                    {report.pupils.criticalthinking}
                  </Text>
                </Text>
                <Text style={styles.breakdownGrid.text}>
                  Responsible Use:{" "}
                  <Text style={styles.breakdownGrid.bold}>
                    {report.pupils.responsibleuse}
                  </Text>
                </Text>
                <Text style={styles.breakdownGrid.highlight}>
                  Overall:{" "}
                  <Text style={styles.breakdownGrid.highlightB}>
                    {awardByUserType(report.pupils)}
                  </Text>
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.div.inline}>
            <View style={styles.table}>
              <View style={styles.table.row}>
                <View style={styles.table.twoCol.leftCell}>
                  <Text style={styles.table.columnTitleSml}>Award Level</Text>
                </View>
                <View style={styles.table.twoCol.rightCell}>
                  <Text style={styles.table.columnTitleSml}>Description</Text>
                </View>
              </View>
              <View style={styles.table.row}>
                <View style={styles.table.twoCol.leftCell}>
                  <Text style={styles.table.textSml}>CyberChampion</Text>
                </View>
                <View style={styles.table.twoCol.rightCell}>
                  <Text style={styles.table.textSml}>
                    {awardLevelBlurbs.CyberChampion}
                  </Text>
                </View>
              </View>
              <View style={styles.table.row}>
                <View style={styles.table.twoCol.leftCell}>
                  <Text style={styles.table.textSml}>CyberSmart</Text>
                </View>
                <View style={styles.table.twoCol.rightCell}>
                  <Text style={styles.table.textSml}>
                    {awardLevelBlurbs.CyberSmart}
                  </Text>
                </View>
              </View>
              <View style={styles.table.row}>
                <View style={styles.table.twoCol.leftCell}>
                  <Text style={styles.table.textSml}>CyberAware</Text>
                </View>
                <View style={styles.table.twoCol.rightCell}>
                  <Text style={styles.table.textSml}>
                    {awardLevelBlurbs.CyberAware}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>

      {/* Page three - Useful links table - digital knowledge */}
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.header.twoLogo}>
          <Image
            style={styles.logo.tfs}
            src={toolLogo}
            alt="CyberSafe Tool for Schools Logo"
          />
          <Image
            style={styles.logo.csi}
            src={csiLogo}
            alt="CyberSafeKids Logo"
          />
        </View>
        <View style={styles.body.topAlign}>
          <View style={styles.div.inline}>
            <View style={styles.table}>
              {/* Table Headers */}
              <View style={styles.table.row}>
                <View style={styles.table.threeCol.leftCell}>
                  <Text style={styles.table.columnTitleSml}>
                    Category & Award
                  </Text>
                </View>
                <View style={styles.table.threeCol.midCell}>
                  <Text style={styles.table.columnTitleSml}>
                    Best Practice Descriptors
                  </Text>
                </View>
                <View style={styles.table.threeCol.rightCell}>
                  <Text style={styles.table.columnTitleSml}>
                    Resources for Next Steps
                  </Text>
                </View>
              </View>

              {/* Digital Knowledge section */}
              <View style={styles.table.rowNoBreak}>
                <View style={styles.table.threeCol.leftCell}>
                  <Text style={styles.table.columnTitleSml}>
                    Digital Knowledge
                  </Text>
                  <Text style={styles.table.textSml}>
                    Leadership: {report.leaders.digitalknowledge}
                  </Text>
                  <Text style={styles.table.textSml}>
                    Teachers: {report.teachers.digitalknowledge}
                  </Text>
                  <Text style={styles.table.textSml}>
                    Pupils: {report.pupils.digitalknowledge}
                  </Text>
                </View>
                <View style={styles.table.threeCol.midCell}>
                  <Text style={styles.table.textSml}>
                    Staff have online safety training{" "}
                    <Text style={styles.boldTextSml}>at least twice</Text> in
                    the academic year - this should extend beyond simply basic
                    security settings, safety principles and ‘scary’ stories. An
                    increased focus on digital literacy is vital, e.g. scams,
                    manipulation of images and video, trolling, mis- and
                    disinformation.
                  </Text>
                  <Text style={styles.table.textSml}>
                    Plan in a short time slot for all staff meetings where a
                    staff member can either:
                  </Text>
                  <View style={styles.div.list}>
                    <Text style={styles.bulletListSml}>
                      a) Share a new resource related to online safety/digital
                      literacy education
                    </Text>
                    <Text style={styles.bulletListSml}>
                      b) Share a pupil’s experience or story from an online
                      interaction which has come to their attention or been
                      raised in class
                    </Text>
                    <Text style={styles.bulletListSml}>
                      c) Introduce a new game or app which pupils are talking
                      about, or which is particularly popular
                    </Text>
                  </View>
                  <Text style={styles.table.textSml}>
                    Create a shared space (OneDrive, Google Drive, Padlet etc.)
                    in which all staff can post useful links, advice, news
                    articles and free teaching resources related to online
                    safety.
                  </Text>
                </View>
                <View style={styles.table.threeCol.rightCell}>
                  <Text style={styles.table.textSml}>
                    <Link
                      style={styles.hyperlinkSml}
                      src={"https://www.cybersafekids.ie/elearning/"}
                    >
                      CyberSafeKids elearning
                    </Link>
                    : an online, self-paced 6 module course covering the main
                    areas of online safety and digital literacy.
                  </Text>
                </View>
              </View>

              <View style={styles.table.rowNoBreak}>
                <View style={styles.table.threeCol.leftCell}>
                  <Text> </Text>
                </View>
                <View style={styles.table.threeCol.midCell}>
                  <Text style={styles.table.textSml}>
                    Parents are offered online safety training{" "}
                    <Text style={styles.boldTextSml}>at least once</Text> in the
                    academic year. This session should include an opportunity
                    for Q&A and provide free, accessible follow-on resources to
                    empower parents to do their own research.
                  </Text>
                </View>
                <View style={styles.table.threeCol.rightCell}>
                  <Text style={styles.table.textSml}>
                    CyberSafekids{" "}
                    <Link
                      style={styles.hyperlinkSml}
                      src={"https://www.cybersafekids.ie/our-talks/"}
                    >
                      Parent/Guardian Talks
                    </Link>
                  </Text>
                  <Text style={styles.table.textSml}>
                    <Text style={styles.boldTextSml}>Free</Text> Parental
                    Resources online:
                  </Text>
                  <Text style={styles.table.textSml}>
                    CyberSafeKids & Examiner{" "}
                    <Link
                      style={styles.hyperlinkSml}
                      src={
                        "https://www.cybersafekids.ie/wp-content/uploads/2021/03/Lets-Talk-Online-Safety.pdf"
                      }
                    >
                      Let’s Talk Online Safety booklet
                    </Link>
                  </Text>
                  <Text style={styles.table.textSml}>
                    <Link
                      style={styles.hyperlinkSml}
                      src={"https://www.commonsensemedia.org/"}
                    >
                      Common Sense Media
                    </Link>
                  </Text>
                  <Text style={styles.table.textSml}>
                    <Link
                      style={styles.hyperlinkSml}
                      src={"https://pegi.info/"}
                    >
                      PEGI
                    </Link>{" "}
                    (for Gaming)
                  </Text>
                  <Text style={styles.table.textSml}>
                    Child Mind Institute Parent Guide on{" "}
                    <Link
                      style={styles.hyperlinkSml}
                      src={
                        "https://childmind.org/topics/screen-time-technology/"
                      }
                    >
                      Screen Time & Technology
                    </Link>
                  </Text>
                  <Text style={styles.table.textSml}>
                    Parent Zone (UK){" "}
                    <Link
                      style={styles.hyperlinkSml}
                      src={"https://parentzone.org.uk/advice/parent-guides"}
                    >
                      Guides
                    </Link>
                  </Text>
                  <Text style={styles.table.textSml}>
                    Webwise{" "}
                    <Link
                      style={styles.hyperlinkSml}
                      src={"https://www.webwise.ie/talklistenlearn/"}
                    >
                      #TalkListenLearn
                    </Link>
                  </Text>
                  <Text style={styles.table.textSml}>
                    <Link
                      style={styles.hyperlinkSml}
                      src={"https://eephonesmart.co.uk/"}
                    >
                      EE Phonesmart Licence
                    </Link>
                  </Text>
                </View>
              </View>

              <View style={styles.table.rowNoBreak}>
                <View style={styles.table.threeCol.leftCell}>
                  <Text> </Text>
                </View>
                <View style={styles.table.threeCol.midCell}>
                  <Text style={styles.table.textSml}>
                    A Digital Learning Plan is in place based on the Digital
                    Learning Framework for Primary Schools to support the
                    meaningful embedding of digital technologies into teaching
                    and learning. The plan should be accessible to staff and
                    reviewed and evaluated regularly (at least once a term).
                  </Text>
                </View>
                <View style={styles.table.threeCol.rightCell}>
                  <Link
                    style={styles.hyperlinkSml}
                    src={
                      "https://www.pdsttechnologyineducation.ie/en/Planning/Digital-Learning-Framework-and-Planning-Resources-Primary/Digital-Learning-Framework-for-Primary-Schools.pdf"
                    }
                  >
                    Digital Learning Framework
                  </Link>
                  <Link
                    style={styles.hyperlinkSml}
                    src={"https://www.dlplanning.ie/"}
                  >
                    DLP.ie Planning Resources
                  </Link>
                  <Text style={styles.table.textSml}>
                    <Link
                      style={styles.hyperlinkSml}
                      src={
                        "https://www.pdsttechnologyineducation.ie/en/Planning/Digital-Learning-Framework-and-Planning-Resources-Primary/"
                      }
                    >
                      Planning Framework & Guidelines
                    </Link>{" "}
                    (PDST)
                  </Text>
                  <Link
                    style={styles.hyperlinkSml}
                    src={"https://teachercpd.ie/"}
                  >
                    Teacher CPD.ie
                  </Link>
                </View>
              </View>

              <View style={styles.table.row}>
                <View style={styles.table.threeCol.leftCell}>
                  <Text style={styles.table.textSml}></Text>
                </View>
                <View style={styles.table.threeCol.midCell}>
                  <Text style={styles.table.textSml}>
                    The school has a clear policy on use of personal
                    devices/smartphones within school, and is accessible to all
                    stakeholders.
                  </Text>
                </View>
                <View style={styles.table.threeCol.rightCell}>
                  <Text style={styles.table.textSml}>
                    The Headteacher{" "}
                    <Link
                      style={styles.hyperlinkSml}
                      src={
                        "https://www.theheadteacher.com/pupils-and-parents/what-to-consider-when-creating-your-schools-mobile-phone-policy"
                      }
                    >
                      What to consider when creating your school’s mobile phone
                      policy
                    </Link>
                  </Text>
                  <Text style={styles.table.textSml}>
                    Webwise{" "}
                    <Link
                      style={styles.hyperlinkSml}
                      src={
                        "https://www.webwise.ie/teachers/considerations-for-smartphone-use-in-schools/"
                      }
                    >
                      Considerations for Smartphone Use in Schools
                    </Link>
                  </Text>
                  <Text style={styles.table.textSml}>
                    The Key for School Leaders{" "}
                    <Link
                      style={styles.hyperlinkSml}
                      src={
                        "https://schoolleaders.thekeysupport.com/policy-expert/leadership-governance/mobile-phone-policy-model-and-examples/"
                      }
                    >
                      Mobile Phone Policy: Models & Examples
                    </Link>
                    UK (Membership Site)
                  </Text>
                </View>
              </View>
              {/* page closing tags */}
            </View>
          </View>
        </View>
      </Page>

      {/* Page four - Useful links table - privacy */}
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.header.twoLogo}>
          <Image
            style={styles.logo.tfs}
            src={toolLogo}
            alt="CyberSafe Tool for Schools Logo"
          />
          <Image
            style={styles.logo.csi}
            src={csiLogo}
            alt="CyberSafeKids Logo"
          />
        </View>
        <View style={styles.body.topAlign}>
          <View style={styles.div.inline}>
            <View style={styles.table}>
              {/* Table Headers */}
              <View style={styles.table.row}>
                <View style={styles.table.threeCol.leftCell}>
                  <Text style={styles.table.columnTitleSml}>
                    Category & Award
                  </Text>
                </View>
                <View style={styles.table.threeCol.midCell}>
                  <Text style={styles.table.columnTitleSml}>
                    Best Practice Descriptors
                  </Text>
                </View>
                <View style={styles.table.threeCol.rightCell}>
                  <Text style={styles.table.columnTitleSml}>
                    Resources for Next Steps
                  </Text>
                </View>
              </View>

              <View style={styles.table.rowNoBreak}>
                <View style={styles.table.threeCol.leftCell}>
                  <Text style={styles.table.columnTitleSml}>Privacy</Text>
                  <Text style={styles.table.textSml}>
                    Leadership: {report.leaders.privacy}
                  </Text>
                  <Text style={styles.table.textSml}>
                    Teachers: {report.teachers.privacy}
                  </Text>
                  <Text style={styles.table.textSml}>
                    Pupils: {report.pupils.privacy}
                  </Text>
                </View>
                <View style={styles.table.threeCol.midCell}>
                  <Text style={styles.table.textSml}>
                    Teachers and pupils are made explicitly aware of the
                    importance of strong, effective passwords on accounts and
                    devices.
                  </Text>
                  <Text style={styles.table.textSml}>
                    All school-related data is accessed by teachers on
                    password-protected devices, and school email addresses have
                    2FA enabled as standard. Teacher’s classroom computers have
                    passwords enabled, and are not left unattended without being
                    logged out/lockscreen being enabled.
                  </Text>
                </View>
                <View style={styles.table.threeCol.rightCell}>
                  <Text style={styles.table.textSml}>
                    UK National CyberSecurity Centre{" "}
                    <Link
                      style={styles.hyperlinkSml}
                      src={"https://www.ncsc.gov.uk/cyberaware/home#section_2"}
                    >
                      Cyber Aware
                    </Link>{" "}
                    Passwords Best Practice
                  </Text>
                  <Text style={styles.table.textSml}>
                    Webwise{" "}
                    <Link
                      style={styles.hyperlinkSml}
                      src={
                        "https://www.webwise.ie/uncategorized/creating-strong-passwords/"
                      }
                    >
                      Creating Strong Passwords
                    </Link>
                  </Text>
                  <Text style={styles.table.textSml}>
                    <Link
                      style={styles.hyperlinkSml}
                      src={"https://eephonesmart.co.uk/"}
                    >
                      EE Phonesmart Licence
                    </Link>
                  </Text>
                </View>
              </View>

              <View style={styles.table.rowNoBreak}>
                <View style={styles.table.threeCol.leftCell}>
                  <Text style={styles.table.textSml}> </Text>
                </View>
                <View style={styles.table.threeCol.midCell}>
                  <Text style={styles.table.textSml}>
                    The school has a{" "}
                    <Text style={styles.boldTextSml}>Social Media Policy</Text>{" "}
                    in place, even if the school is not using social media. A
                    social media policy provides guidelines for your
                    organisation’s social media use. It covers the school’s
                    official channels, as well as how staff use social media,
                    both personally and professionally.
                  </Text>
                  <Text style={styles.table.textSml}>
                    Key areas for consideration are:
                  </Text>
                  <View style={styles.div.list}>
                    <Text style={styles.bulletListSml}>
                      &#8226; Roles: who owns/does what?
                    </Text>
                    <Text style={styles.bulletListSml}>
                      &#8226; Security: passwords, updates, devices
                    </Text>
                    <Text style={styles.bulletListSml}>
                      &#8226; Crisis Plan: security, PR
                    </Text>
                    <Text style={styles.bulletListSml}>
                      &#8226; Legal Advice: copyright, privacy, confidentiality,
                      consent
                    </Text>
                    <Text style={styles.bulletListSml}>
                      &#8226; Guidance: use of teacher’s personal accounts
                    </Text>
                    <Text style={styles.bulletListSml}>
                      &#8226; Guidelines: what’s it ok to have an opinion on?
                    </Text>
                  </View>
                  <Text style={styles.table.textSml}>
                    The school has parental consent to share photographs and
                    videos of school activities online in which pupils are
                    identifiable.
                  </Text>
                </View>
                <View style={styles.table.threeCol.rightCell}>
                  <Text style={styles.table.textSml}>
                    How to Write a Social Media Policy (Free Template +
                    Examples)
                    <Link
                      style={styles.hyperlinkSml}
                      src={
                        "https://blog.hootsuite.com/social-media-policy-for-employees/"
                      }
                    >
                      {" "}
                      Hootsuite
                    </Link>
                  </Text>
                </View>
              </View>

              <View style={styles.table.row}>
                <View style={styles.table.threeCol.leftCell}>
                  <Text style={styles.table.textSml}></Text>
                </View>
                <View style={styles.table.threeCol.midCell}>
                  <Text style={styles.table.textSml}>
                    The school is{" "}
                    <Text style={styles.boldTextSml}>GDPR compliant</Text> in
                    line with General Data Protection Regulation legislation
                    which came into effect on the 25th May 2018.
                  </Text>
                  <Text style={styles.table.textSml}>This requires:</Text>
                  <View style={styles.div.list}>
                    <Text style={styles.bulletListSml}>
                      a) An audit of data held by the school
                    </Text>
                    <Text style={styles.bulletListSml}>
                      b) Development of an internal data protection policy which
                      states what data is being held by the school using the 8
                      rules (see below)
                    </Text>
                    <Text style={styles.bulletListSml}>
                      c) A clear process of steps to be taken in the event of a
                      data breach
                    </Text>
                  </View>
                  <View style={styles.div.list}>
                    <Text style={styles.table.italicTextSml}>
                      Rule 1: Obtain and process information fairly
                    </Text>
                    <Text style={styles.table.italicTextSml}>
                      Rule 2: Keep it only for one or more specified, explicit &
                      lawful purposes
                    </Text>
                    <Text style={styles.table.italicTextSml}>
                      Rule 3: Use and disclose it only in ways compatible with
                      these purposes
                    </Text>
                    <Text style={styles.table.italicTextSml}>
                      Rule 4: Keep it safe and secure
                    </Text>
                    <Text style={styles.table.italicTextSml}>
                      Rule 5: Keep it accurate, complete and up-to-date
                    </Text>
                    <Text style={styles.table.italicTextSml}>
                      Rule 6: Ensure that it is adequate, relevant & not
                      excessive
                    </Text>
                    <Text style={styles.table.italicTextSml}>
                      Rule 7: Retain it for no longer than is necessary for the
                      purpose or purposes
                    </Text>
                    <Text style={styles.table.italicTextSml}>
                      Rule 8: Give a copy of their personal data to that
                      individual, on request
                    </Text>
                  </View>
                  <Text style={styles.table.textSml}>
                    This GDPR policy is reviewed regularly (at least once each
                    academic year) and updated if and when necessary.
                  </Text>
                </View>
                <View style={styles.table.threeCol.rightCell}>
                  <Text style={styles.table.textSml}>
                    A brief guide to GDPR for schools and teachers{" "}
                    <Link
                      style={styles.hyperlinkSml}
                      src={
                        "https://www.schooleducationgateway.eu/en/pub/resources/tutorials/brief-gdpr-guide-for-schools.htm"
                      }
                    >
                      School Education Gateway
                    </Link>
                  </Text>
                  <Text style={styles.table.textSml}>
                    Webwise{" "}
                    <Link
                      style={styles.hyperlinkSml}
                      src={
                        "https://www.webwise.ie/news/gdpr-considerations-for-schools/"
                      }
                    >
                      GDPR Considerations for Schools
                    </Link>
                  </Text>
                  <Text style={styles.table.textSml}>
                    <Link
                      style={styles.hyperlinkSml}
                      src={"https://gdpr4schools.ie/"}
                    >
                      GDPR4Schools
                    </Link>
                  </Text>
                </View>
              </View>

              {/* page closing tags */}
            </View>
          </View>
        </View>
      </Page>

      {/* Template 
              <View style={styles.table.rowNoBreak}>
                <View style={styles.table.threeCol.leftCell}>
                  <Text style={styles.table.textSml}></Text>
                </View>
                <View style={styles.table.threeCol.midCell}>
                  <Text style={styles.table.textSml}>
                  <Text style={styles.boldTextSml}></Text>
                  </Text>
                  <View style={styles.div.list}>
                    <Text style={styles.bulletListSml}>
                    &#8226;
                    </Text>
                    </View>
                </View>
                <View style={styles.table.threeCol.rightCell}>
                  <Text style={styles.table.textSml}>
                  <Link style={styles.hyperlinkSml} src={""}>
                      
                    </Link>
                  </Text>
                </View>
              </View>
              */}

      {/* Penultimate page - Completion Certificate */}
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.header.twoLogo}>
          <Image
            style={styles.logo.tfs}
            src={toolLogo}
            alt="CyberSafe Tool for Schools Logo"
          />
          <Image
            style={styles.logo.csi}
            src={csiLogo}
            alt="CyberSafeKids Logo"
          />
        </View>
        <View style={styles.body.topAlign}>
          <View style={styles.div.centered}>
            <Text style={styles.h2.centeredSpaced}>CERTIFICATE OF AWARD</Text>
            <Text style={styles.para.slimWidth}>
              You have proved your commitment to online safety by completing the{" "}
              <Text style={styles.para.bold}>CyberSafe Tool for Schools</Text>{" "}
              online assessment. Measured against standards of best practice,
              the results of your survey show that your school is
            </Text>
            <Image
              style={styles.awardImg.certificate}
              src={selectMarkLevel(report.prospectiveMark)}
              alt="Your Mark Level Badge"
            />
            <Text style={styles.para}>Date: {reportTimestamp}</Text>
            <Text style={styles.para}>
              Signed: <Text style={styles.para.bold}>CyberSafeKids</Text>
            </Text>
          </View>
        </View>
      </Page>

      {/* Last page - Contact page */}
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.header.oneLogo}>
          <Image
            style={styles.logo.csi}
            src={csiLogo}
            alt="CyberSafeKids Logo"
          />
        </View>
        <View style={styles.body.centerAlign}>
          <Image
            src={toolLogo}
            style={styles.awardImg.halfBorder}
            alt="CyberSafe Tool for Schools"
          />
          <View style={styles.div.centered}>
            <Text style={styles.para}>
              You have now completed CyberSafe Tool for Schools and received
              your report and digital award badge. This mark is valid for 12
              months and you can display it on your website, social media and
              all school communications to demonstrate your school’s commitment
              to online safety.
            </Text>
            <Text style={styles.para}>
              Thank you for joining the CyberSafe Tool for Schools initiative!
            </Text>
            <Text style={styles.h2}>CyberSafeKids CLG</Text>
            <Text style={styles.para.address}>Company number: 568651</Text>
            <Text style={styles.para.address}>
              Registered charity number: 20104108
            </Text>
            <Text style={styles.para.address}>
              93 Upper George Street, Dun Laoghaire,
            </Text>
            <Text style={styles.para.address}>Dublin, Ireland</Text>
            <Link style={styles.hyperlink} src={"https://www.cybersafekids.ie"}>
              www.cybersafekids.ie
            </Link>
            <Text style={styles.hyperlink}>info@cybersafekids.ie</Text>
          </View>
          <Image
            style={styles.blobSurfer}
            src={BlobSurfer}
            alt="Surfer on a blue blob"
          />
        </View>
      </Page>
    </Document>
  )
}

export default PdfReportTemplateAwareSmart
