import React from "react"
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer"

import csiLogo from "../images/cybersafe-logo.png"
import toolLogo from "../images/toolforschools-logo.png"
import cyberAwareLogo from "../images/CyberAware-Col.png"
import cyberSmartLogo from "../images/CyberSmart-Col.png"
import cyberChampionLogo from "../images/CyberChampion-Col.png"
import BlobSurfer from "../images/blobsurfer.png"

import { awardLevelBlurbs } from "./pdfReportBlurbs"

// Download fonts - curl the typical embed link given by google to get individual ttf links
Font.register({
  family: "PoppinsBody",
  src: "https://fonts.gstatic.com/s/poppins/v12/pxiByp8kv8JHgFVrLEj6V1s.ttf",
  fontStyle: "normal",
  fontWeight: 600,
})
Font.register({
  family: "PoppinsHeading",
  src: "https://fonts.gstatic.com/s/poppins/v12/pxiByp8kv8JHgFVrLCz7V1s.ttf",
  fontStyle: "normal",
  fontWeight: 700,
})

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
  },
  contactPage: {
    flexDirection: "column",
    backgroundColor: "#eeeeee",
  },
  awardPage: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "column",
    alignItems: "space-between",
    margin: 10,
    padding: 10,
  },
  body: {
    marginHorizontal: 40,
    padding: 10,
  },
  centered: {
    alignSelf: "center",
  },
  h1: {
    fontSize: 20,
    fontFamily: "PoppinsHeading",
    fontWeight: 700,
    color: "#181818",
    textAlign: "center",
    marginBottom: 10,
  },
  h2: {
    fontSize: 15,
    fontFamily: "PoppinsHeading",
    fontWeight: 700,
    color: "#181818",
    marginBottom: 20,
    marginTop: 20,
  },
  logo: {
    height: "5vh",
    margin: 10,
    alignSelf: "flex-end",
  },
  para: {
    fontSize: 8,
    fontFamily: "PoppinsBody",
    color: "#181818",
    marginBottom: 5,
  },
  awardPara: {
    fontSize: 8,
    fontFamily: "PoppinsBody",
    color: "#181818",
    marginBottom: 5,
    paddingHorizontal: 20,
    textAlign: "center",
  },
  signature: {
    fontSize: 8,
    fontWeight: "bold",
    fontStyle: "italic",
    fontFamily: "PoppinsBody",
    color: "#181818",
    marginBottom: 5,
  },
  address: {
    fontSize: 8,
    fontFamily: "PoppinsBody",
    color: "#181818",
  },
  awardImg: {
    width: 250,
    alignSelf: "center",
    marginTop: 100,
  },
  blobSurfer: {
    width: 300,
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
    columnTitle: {
      fontSize: 12,
      fontFamily: "PoppinsHeading",
      fontWeight: 700,
      color: "#181818",
    },
  },
})

// Create Document Component
const PdfReportTemplate = ({ report, reportSubmitted, quota }) => {
  const dateInMillis = reportSubmitted.seconds * 1000
  const reportTimestamp = new Date(dateInMillis).toDateString()
  const totalCompletedSurveys =
    quota.leadersQuota + quota.teachersQuota + quota.pupilsQuota

  const selectMarkLevel = () => {
    let mark
    switch (report.prospectiveMark) {
      case "cyberChampion":
        mark = cyberChampionLogo
        break
      case "cyberSmart":
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
        <View style={styles.header}>
          <Image style={styles.logo} src={logo} alt="CyberSafeIreland Logo" />
        </View>
        <View style={styles.body}>
          <Image src={toolLogo} alt="CyberSafe Tool for Schools" />
          <View style={styles.table}>
            <View style={styles.table.row}>
              <View style={styles.table.cell}>
                <Text style={styles.para}>School Name:</Text>
              </View>
              <View style={styles.table.cell}>
                <Text style={styles.para}> {report.reportFor}</Text>
              </View>
            </View>
            <View style={styles.table.row}>
              <View style={styles.table.cell}>
                <Text style={styles.para}>Report Generated:</Text>
              </View>
              <View style={styles.table.cell}>
                <Text style={styles.para}>{reportTimestamp}</Text>
              </View>
            </View>
            <View style={styles.table.row}>
              <View style={styles.table.cell}>
                <Text style={styles.para}>Total Surveys Completed</Text>
              </View>
              <View style={styles.table.cell}>
                <Text style={styles.para}>{totalCompletedSurveys}</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>

      {/* Page Two - Your grade and grade explainer table */}
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            src={toolLogo}
            alt="CyberSafe Tool for Schools Logo"
          />
          <Image
            style={styles.logo}
            src={csiLogo}
            alt="CyberSafeIreland Logo"
          />
        </View>
        <View style={styles.body}>
          <text style={styles.h2}>
            Congratulations, you are currently a {report.prospectiveMark}{" "}
            school!
          </text>
          <Image
            style={styles.awardImgSml}
            src={selectMarkLevel()}
            alt="Your Mark Level Badge"
          />
          <Text style={styles.h2}>Awards</Text>
          <View style={styles.table}>
            <View style={styles.table.row}>
              <View style={styles.table.cell}>
                <Text style={styles.table.columnTitle}>Award Level</Text>
              </View>
              <View style={styles.table.cell}>
                <Text style={styles.table.columnTitle}>Description</Text>
              </View>
            </View>
            <View style={styles.table.row}>
              <View style={styles.table.cell}>
                <Text style={styles.para}>CyberChampion School</Text>
              </View>
              <View style={styles.table.cell}>
                <Text style={styles.para}>
                  {awardLevelBlurbs.CyberChampion}
                </Text>
              </View>
            </View>
            <View style={styles.table.row}>
              <View style={styles.table.cell}>
                <Text style={styles.para}>CyberSmart School</Text>
              </View>
              <View style={styles.table.cell}>
                <Text style={styles.para}>{awardLevelBlurbs.CyberSmart}</Text>
              </View>
            </View>
            <View style={styles.table.row}>
              <View style={styles.table.cell}>
                <Text style={styles.para}>CyberStarter School</Text>
              </View>
              <View style={styles.table.cell}>
                <Text style={styles.para}>{awardLevelBlurbs.CyberStarter}</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>

      {/* Page three - Completion Certificate */}
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.header}>
          <Image style={styles.logo} src={logo} alt="CyberSafeIreland Logo" />
        </View>
        <View style={styles.body}>
          <Image src={toolLogo} alt="CyberSafe Tool for Schools" />
          <Text style={styles.para}>
            You have proved your commitment to online safety by completing the
            free CyberSafe Tool for Schools online assessment.
          </Text>
          <Text style={styles.para}>Date: {reportTimestamp}</Text>
          <Text style={styles.signature}>CyberSafeIreland</Text>
        </View>
      </Page>

      {/* Page Four - Next Steps */}
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            src={toolLogo}
            alt="CyberSafe Tool for Schools Logo"
          />
          <Image
            style={styles.logo}
            src={csiLogo}
            alt="CyberSafeIreland Logo"
          />
        </View>
        <View style={styles.body}>
          <Text style={styles.h1}>Next Steps</Text>
          <Text style={styles.para}>
            Now that you've completed the tool and received your free report,
            you can upgrade by purchasing the CyberSafe Tool for Schools{" "}
            {report.prospectiveMark} award badge for your school.
          </Text>
          <Text style={styles.para}>
            This mark is valid for 12 months and you can display it on your
            website, social media and all school communications to demonstrate
            your school’s commitment to online safety. You will also receive a
            breakdown of your school’s results by topic area.{" "}
          </Text>
          <Text style={styles.para}>
            For more information please visit cybersafetoolforschools.ie or
            contact us directly on info@cybersafeireland.org
          </Text>
        </View>
      </Page>
      <Page size="A4" style={styles.contactPage} wrap>
        <View style={styles.header}>
          <Image style={styles.logo} src={logo} alt="CyberSafeIreland Logo" />
        </View>
        <View style={styles.body}>
          <Image src={toolLogo} alt="CyberSafe Tool for Schools" />
          <Text style={styles.h1}>CyberSafeIreland CLG</Text>
          <View style={styles.centered}>
            <Text style={styles.address}>Company number: 568651</Text>
            <Text style={styles.address}>
              Registered charity number: 20104108
            </Text>
            <Text style={styles.address}>
              93 Upper George Street, Dun Laoghaire,
            </Text>
            <Text style={styles.para}>Dublin, Ireland</Text>
            <Text style={styles.para}>cybersafeireland.ie</Text>
            <Text style={styles.para}>info@cybersafeireland.ie</Text>
          </View>
          <Image
            style={styles.blobSurfer}
            src={BlobSurfer}
            alt="Surfer on a blue blob"
          />{" "}
        </View>
      </Page>
    </Document>
  )
}

export default PdfReportTemplate
