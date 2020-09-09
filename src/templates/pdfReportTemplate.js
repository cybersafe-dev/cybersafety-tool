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

import logo from "../images/cybersafe-logo.png"
// import surfer from "../images/surfer.svg"
// import blob from "../images/bg-gradient.svg"

// Download fonts - curl the typical embed link given by google to get individual ttf links
 Font.register({ family: 'PoppinsBody', src: "https://fonts.gstatic.com/s/poppins/v12/pxiByp8kv8JHgFVrLEj6V1s.ttf", fontStyle: 'normal', fontWeight: 600, });
 Font.register({ family: 'PoppinsHeading', src: "https://fonts.gstatic.com/s/poppins/v12/pxiByp8kv8JHgFVrLCz7V1s.ttf", fontStyle: 'normal', fontWeight: 700, });

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
  },
  contactPage: {
    flexDirection: "column",
    backgroundColor: "#f2f2f2",
  },
  header: {
    flexDirection: "column",
    alignItems: "center",
    margin: 10,
    padding: 10,
  },
  body: {
    marginHorizontal: 40,
    marginVertical: 20,
    padding: 10,
  },
  h1: {
    fontSize: 20,
    fontFamily: "PoppinsHeading",
    fontWeight: 700,
    color: "#181818",
    textAlign: "center",
    marginBottom: 20,
  },
  h2: {
    fontSize: 15,
    fontFamily: "PoppinsHeading",
    fontWeight: 700,
    color: "#181818",
    marginBottom: 20,
  },
  logo: {
    height: "5vh",
    margin: 10,
  },
  para: {
    fontSize: 10,
    fontFamily: "PoppinsBody",
    color: "#181818",
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
const PdfReportTemplate = ({ report, reportSubmitted }) => {
  const dateInMillis = reportSubmitted.seconds * 1000
  const reportTimestamp =
    new Date(dateInMillis).toDateString() +
    " at " +
    new Date(dateInMillis).toLocaleTimeString()

  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.header}>
          <Image style={styles.logo} src={logo} alt="CyberSafeIreland Logo" />
        </View>
        <View style={styles.body}>
          <Text style={styles.h1}>Self-Assessment Tool for Schools Report</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.para}>School Name: {report.reportFor}</Text>
          <Text style={styles.para}>Report Generated: {reportTimestamp}</Text>
          <Text style={styles.para}>
            Groups Surveyed: School Leadership, Teachers, Pupils
          </Text>
        </View>
      </Page>
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.header}>
          <Image style={styles.logo} src={logo} alt="CyberSafeIreland Logo" />
        </View>
        <View style={styles.body}>
          <Text style={styles.h1}>Self-Assessment Tool for Schools</Text>
          </View>
          <View style={styles.body}>

          <Text style={styles.para}>blurb</Text>
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
                <Text style={styles.para}>CSI CyberChampion</Text>
              </View>
              <View style={styles.table.cell}>
                <Text style={styles.para}>Blurb</Text>
              </View>
            </View>
            <View style={styles.table.row}>
              <View style={styles.table.cell}>
                <Text style={styles.para}>CSI CyberStrong</Text>
              </View>
              <View style={styles.table.cell}>
                <Text style={styles.para}>Blurb</Text>
              </View>
            </View>
            <View style={styles.table.row}>
              <View style={styles.table.cell}>
                <Text style={styles.para}>CSI CyberSmart</Text>
              </View>
              <View style={styles.table.cell}>
                <Text style={styles.para}>Blurb</Text>
              </View>
            </View>
            <View style={styles.table.row}>
              <View style={styles.table.cell}>
                <Text style={styles.para}>CSI CyberStarter</Text>
              </View>
              <View style={styles.table.cell}>
                <Text style={styles.para}>Blurb</Text>
              </View>
            </View>
          </View>
          </View>
          <View style={styles.body}>
          <Text style={styles.h2}>The CSI Cybersafe Mark</Text>
          <Text style={styles.para}>
            blurb about buying the mark and next steps
          </Text>
        </View>
      </Page>
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.header}>
          <Image style={styles.logo} src={logo} alt="CyberSafeIreland Logo" />
        </View>
        <View style={styles.body}>
          <Image style={styles.awardImg} src={logo} alt="Award Badge" />
        </View>
        <View style={styles.body}>
          <Text style={styles.h1}>CSI {report.prospectiveMark}</Text>
          <Text style={styles.para}>
            You are fully engaging with the online world by skilling your staff
            and pupils to have a positive experience online. As a school you
            celebrate the positives of technology while being aware of the
            inherent risks. etc.
          </Text>
        </View>
      </Page>
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.header}>
          <Image style={styles.logo} src={logo} alt="CyberSafeIreland Logo" />
        </View>
        <View style={styles.body}>
          <Text style={styles.h1}>Award Breakdown</Text>
          <Text style={styles.h2}>School Leadership</Text>
          <Text style={styles.para}>
            Digital Knowledge: {report.leaders.digitalknowledge}
          </Text>
          <Text style={styles.para}>Privacy: {report.leaders.privacy}</Text>
          <Text style={styles.para}>Sharing: {report.leaders.sharing}</Text>
          <Text style={styles.para}>
            Communication: {report.leaders.communication}
          </Text>
          <Text style={styles.para}>
            Critical Thinking: {report.leaders.criticalthinking}
          </Text>
          <Text style={styles.para}>
            Responsible Use: {report.leaders.responsibleuse}
          </Text>
          <Text style={styles.h2}>Teachers</Text>
          <Text style={styles.para}>
            Digital Knowledge: {report.teachers.digitalknowledge}
          </Text>
          <Text style={styles.para}>Privacy: {report.teachers.privacy}</Text>
          <Text style={styles.para}>Sharing: {report.teachers.sharing}</Text>
          <Text style={styles.para}>
            Communication: {report.teachers.communication}
          </Text>
          <Text style={styles.para}>
            Critical Thinking: {report.teachers.criticalthinking}
          </Text>
          <Text style={styles.para}>
            Responsible Use: {report.teachers.responsibleuse}
          </Text>
          <Text style={styles.h2}>Pupils</Text>
          <Text style={styles.para}>
            Digital Knowledge: {report.pupils.digitalknowledge}
          </Text>
          <Text style={styles.para}>Privacy: {report.pupils.privacy}</Text>
          <Text style={styles.para}>Sharing: {report.pupils.sharing}</Text>
          <Text style={styles.para}>
            Communication: {report.pupils.communication}
          </Text>
          <Text style={styles.para}>
            Critical Thinking: {report.pupils.criticalthinking}
          </Text>
          <Text style={styles.para}>
            Responsible Use: {report.pupils.responsibleuse}
          </Text>
        </View>
      </Page>
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.header}>
          <Image style={styles.logo} src={logo} alt="CyberSafeIreland Logo" />
        </View>
        <View style={styles.body}>
          <Text style={styles.h1}>Recommendations</Text>
        </View>
      </Page>
      <Page size="A4" style={styles.contactPage} wrap>
        <View style={styles.header}>
          <Image style={styles.logo} src={logo} alt="CyberSafeIreland Logo" />
        </View>
        <View style={styles.body}>
          <Text style={styles.h1}>CyberSafeIreland</Text>
        </View>
      </Page>
    </Document>
  )
}

export default PdfReportTemplate
