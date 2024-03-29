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
      height: "8%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginHorizontal: "5%",
      justifyContent: "flex-end",
    },
    twoLogo: {
      width: "90%",
      height: "8%",
      display: "flex",
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
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      paddingLeft: 20,
      paddingRight: 20,
    },
    centerAlign: {
      width: "90%",
      height: "90vh",
      marginHorizontal: "5%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      padding: 20,
    },
    deadCenterAlign: {
      width: "90%",
      height: "90%",
      marginHorizontal: "5%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
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
    inlineNoMargin: {
      alignSelf: "center",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
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
  hyperlink: {
    fontSize: 12,
    fontWeight: 700,
    fontFamily: "Poppins",
    textAlign: "justify",
    color: "#53c5cd",
  },
  logo: {
    tfs: {
      width: 120,
      height: "auto",
    },
    csi: {
      width: 100,
      height: "auto",
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
    cell: {
      borderRightWidth: 2,
      borderRightColor: "#53c5cd",
      padding: "5px",
      textAlign: "left",
      width: "50%",
    },
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
      textAlign: "justify",
    },
    textSml: {
      fontSize: 7,
      fontFamily: "Poppins",
      color: "#181818",
      marginBottom: 2,
      textAlign: "justify",
    },
    boldText: {
      fontSize: 10,
      fontWeight: 700,
      fontFamily: "Poppins",
      color: "#181818",
      marginBottom: 5,
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
const PdfReportTemplateChampion = ({ report, reportSubmitted, quota }) => {
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
        <View style={styles.body.deadCenterAlign}>
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
                <View style={styles.table.leftCell}>
                  <Text style={styles.table.columnTitleSml}>Award Level</Text>
                </View>
                <View style={styles.table.rightCell}>
                  <Text style={styles.table.columnTitleSml}>Description</Text>
                </View>
              </View>
              <View style={styles.table.row}>
                <View style={styles.table.leftCell}>
                  <Text style={styles.table.textSml}>CyberChampion</Text>
                </View>
                <View style={styles.table.rightCell}>
                  <Text style={styles.table.textSml}>
                    {awardLevelBlurbs.CyberChampion}
                  </Text>
                </View>
              </View>
              <View style={styles.table.row}>
                <View style={styles.table.leftCell}>
                  <Text style={styles.table.textSml}>CyberSmart</Text>
                </View>
                <View style={styles.table.rightCell}>
                  <Text style={styles.table.textSml}>
                    {awardLevelBlurbs.CyberSmart}
                  </Text>
                </View>
              </View>
              <View style={styles.table.row}>
                <View style={styles.table.leftCell}>
                  <Text style={styles.table.textSml}>CyberAware</Text>
                </View>
                <View style={styles.table.rightCell}>
                  <Text style={styles.table.textSml}>
                    {awardLevelBlurbs.CyberAware}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>

      {/* Page three - Well done text */}
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
            <Text style={styles.para}>
              You are leading the way in school cybersafety. You have robust
              policies around the safe use of the online world and are
              comprehensively meeting your responsibilities when it comes to
              online safety and digital literacy education, and its promotion
              across your school community. Well done!{" "}
            </Text>
            <Text style={styles.para}>
              To maintain this status we recommend you continue to:
            </Text>
            <View style={styles.div.list}>
              <Text style={styles.bulletList}>
                &#8226; Regularly monitor and review all online safety-related
                policies in place within school.
              </Text>
              <Text style={styles.bulletList}>
                &#8226; Ensure that online safety and digital literacy plays an
                integral role in staff meetings and continuing professional
                development opportunities.
              </Text>
              <Text style={styles.bulletList}>
                &#8226; Encourage all staff and parents to use free resource
                sites such as Common Sense Media, PEGI & Webwise to keep abreast
                of new popular games, apps, websites and trends in the online
                world.
              </Text>
            </View>
            <Text style={styles.para}>You may also want to consider:</Text>
            <View style={styles.div.list}>
              <Text style={styles.bulletList}>
                &#8226; Assigning selected teaching staff as ‘digital champions’
                to actively promote digital literacy and online safety
                throughout the school community.
              </Text>
            </View>
          </View>
        </View>
      </Page>

      {/* Page four - Completion Certificate */}
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

      {/* Page Five - Contact page */}
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

export default PdfReportTemplateChampion
