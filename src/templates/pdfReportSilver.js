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

  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.header}>
          <Image style={styles.logo} src={logo} alt="CyberSafeIreland Logo" />
        </View>
        <View style={styles.body}>
          <Text style={styles.h1}>CyberSafe Tool for Schools Report</Text>
        </View>
        <View style={styles.body}>
          <Image src={toolLogo} alt="CyberSafe Tool for Schools" />
        </View>
        <View style={styles.body}>
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
                <Text style={styles.para}>
                  {totalCompletedSurveys}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.header}>
          <Image style={styles.logo} src={logo} alt="CyberSafeIreland Logo" />
        </View>
        <View style={styles.body}>
          <Text style={styles.h1}>CyberSafe Tool for Schools</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.para}>
            Now that you've completed the tool and received your report, you can
            purchase an award badge for your school from CyberSafeIreland to
            display your school’s commitment to online safety.{" "}
          </Text>
          <Text style={styles.para}>
            We have 3 levels of award for schools: CyberChampion, CyberSmart and
            CyberStarter. This virtual badge can be used for two years on your
            school website, social media channels and all school communications.{" "}
          </Text>
          <Text style={styles.para}>
            If you want to try and aim for a higher award for your school, the
            tool can be used again for free after 6 months, once you have made
            changes based on the recommendations in this report.
          </Text>
        </View>
        <View style={styles.body}>
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
      <Page size="A4" style={styles.awardPage} wrap>
        <View style={styles.header}>
          <Image style={styles.logo} src={logo} alt="CyberSafeIreland Logo" />
        </View>
        <View style={styles.body}>
          <Image style={styles.awardImg} src={logo} alt="Award Badge" />
        </View>
        <View style={styles.body}>
          <Text style={styles.h1}>{report.prospectiveMark} School</Text>
          <Text style={styles.awardPara}>
            {awardLevelBlurbs[report.prospectiveMark]}
          </Text>
        </View>
      </Page>
      <Page size="A4" style={styles.contactPage} wrap>
        <View style={styles.header}>
          <Image style={styles.logo} src={logo} alt="CyberSafeIreland Logo" />
        </View>
        <View style={styles.body}>
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
            <Text style={styles.para}>info@cybersafeireland.org</Text>
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default PdfReportTemplate
