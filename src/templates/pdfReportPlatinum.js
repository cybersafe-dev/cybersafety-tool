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

import csiLogo from "../images/cybersafe-logo.png"
import toolLogo from "../images/toolforschools-logo.png"
import cyberAwareLogo from "../images/CyberAware-Col.png"
import cyberSmartLogo from "../images/CyberSmart-Col.png"
import cyberChampionLogo from "../images/CyberChampion-Col.png"
import BlobSurfer from "../images/blobsurfer.png"

import { awardLevelBlurbs } from "./pdfReportBlurbs"

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
      width: 400,
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
  hyperlink: {
    fontSize: 12,
    fontWeight: 700,
    fontFamily: "Poppins",
    textAlign: "justify",
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
    // margin: 40,
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
    text: {
      fontSize: 10,
      fontFamily: "Poppins",
      color: "#181818",
      marginBottom: 5,
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
})

// Create Document Component
const PdfReportTemplateSilver = ({ report, reportSubmitted, quota }) => {
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
            alt="CyberSafeIreland Logo"
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

      {/* Page Two - Your grade and grade explainer table */}
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
            alt="CyberSafeIreland Logo"
          />
        </View>
        <View style={styles.body.centerAlign}>
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
          <View style={styles.div.centered}>
            <Text style={styles.h2}>AWARDS</Text>
            <View style={styles.table}>
              <View style={styles.table.row}>
                <View style={styles.table.leftCell}>
                  <Text style={styles.table.columnTitle}>Award Level</Text>
                </View>
                <View style={styles.table.rightCell}>
                  <Text style={styles.table.columnTitle}>Description</Text>
                </View>
              </View>
              <View style={styles.table.row}>
                <View style={styles.table.leftCell}>
                  <Text style={styles.table.text}>CyberChampion School</Text>
                </View>
                <View style={styles.table.rightCell}>
                  <Text style={styles.table.boldText}>
                    {awardLevelBlurbs.CyberChampion}
                  </Text>
                </View>
              </View>
              <View style={styles.table.row}>
                <View style={styles.table.leftCell}>
                  <Text style={styles.table.text}>CyberSmart School</Text>
                </View>
                <View style={styles.table.rightCell}>
                  <Text style={styles.table.boldText}>
                    {awardLevelBlurbs.CyberSmart}
                  </Text>
                </View>
              </View>
              <View style={styles.table.row}>
                <View style={styles.table.leftCell}>
                  <Text style={styles.table.text}>CyberAware School</Text>
                </View>
                <View style={styles.table.rightCell}>
                  <Text style={styles.table.boldText}>
                    {awardLevelBlurbs.CyberAware}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>

      {/* Page three - Completion Certificate */}
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.header.oneLogo}>
          <Image
            style={styles.logo.csi}
            src={csiLogo}
            alt="CyberSafeIreland Logo"
          />
        </View>
        <View style={styles.body.centerAlign}>
          <View style={styles.div.centered}>
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
              Signed: <Text style={styles.para.bold}>CyberSafeIreland</Text>
            </Text>
          </View>
        </View>
      </Page>

      {/* Page Four - Survey Breakdown */}
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
            alt="CyberSafeIreland Logo"
          />
        </View>
        <View style={styles.body.topAlign}>
          <Text style={styles.h2}>SURVEY BREAKDOWN</Text>
          <Text style={styles.para.bold}>School Leadership</Text>
          <Text style={styles.para.breakdown}>
            Digital Knowledge: {report.leaders.digitalknowledge}
          </Text>
          <Text style={styles.para.breakdown}>
            Privacy: {report.leaders.privacy}
          </Text>
          <Text style={styles.para.breakdown}>
            Online Life: {report.leaders.onlinelife}
          </Text>
          <Text style={styles.para.breakdown}>
            Communication: {report.leaders.communication}
          </Text>
          <Text style={styles.para.breakdown}>
            Critical Thinking: {report.leaders.criticalthinking}
          </Text>
          <Text style={styles.para.breakdown}>
            Responsible Use: {report.leaders.responsibleuse}
          </Text>
          <Text style={styles.para.bold}>Teachers</Text>
          <Text style={styles.para.breakdown}>
            Digital Knowledge: {report.teachers.digitalknowledge}
          </Text>
          <Text style={styles.para.breakdown}>
            Privacy: {report.teachers.privacy}
          </Text>
          <Text style={styles.para.breakdown}>
            Online Life: {report.teachers.onlinelife}
          </Text>
          <Text style={styles.para.breakdown}>
            Communication: {report.teachers.communication}
          </Text>
          <Text style={styles.para.breakdown}>
            Critical Thinking: {report.teachers.criticalthinking}
          </Text>
          <Text style={styles.para.breakdown}>
            Responsible Use: {report.teachers.responsibleuse}
          </Text>
          <Text style={styles.para.bold}>Pupils</Text>
          <Text style={styles.para.breakdown}>
            Digital Knowledge: {report.pupils.digitalknowledge}
          </Text>
          <Text style={styles.para.breakdown}>
            Privacy: {report.pupils.privacy}
          </Text>
          <Text style={styles.para.breakdown}>
            Online Life: {report.pupils.onlinelife}
          </Text>
          <Text style={styles.para.breakdown}>
            Communication: {report.pupils.communication}
          </Text>
          <Text style={styles.para.breakdown}>
            Critical Thinking: {report.pupils.criticalthinking}
          </Text>
          <Text style={styles.para.breakdown}>
            Responsible Use: {report.pupils.responsibleuse}
          </Text>
        </View>
      </Page>

      {/* Page Five - Next Steps */}
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
            alt="CyberSafeIreland Logo"
          />
        </View>
        <View style={styles.body.topAlign}>
          <View style={styles.div.centered}>
            <Text style={styles.h2}>NEXT STEPS</Text>
            <Text style={styles.para}>
              Now that you've completed the tool and received your report, we
              will be sending you your{" "}
              <Text style={styles.para.bold}>CyberSafe Tool for Schools</Text>{" "}
              {report.prospectiveMark} award badge for your school.
            </Text>
            <Text style={styles.para}>
              This mark is valid for 12 months and you can display it on your
              website, social media and all school communications to demonstrate
              your school’s commitment to online safety. You will also receive a
              breakdown of your school’s results by topic area.{" "}
            </Text>
            <Text style={styles.para}>
              Thank you for joining the{" "}
              <Text style={styles.para.bold}>CyberSafe Tool for Schools</Text>{" "}
              initiative!
            </Text>
          </View>
        </View>
      </Page>

      {/* Page Six - Recommendations */}
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
            alt="CyberSafeIreland Logo"
          />
        </View>
        <View style={styles.body.topAlign}>
          <Text style={styles.h2}>RECOMMENDATIONS</Text>
          <Text style={styles.para}>TBC</Text>
        </View>
      </Page>

      {/* Page Seven - Contact page */}
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.header.oneLogo}>
          <Image
            style={styles.logo.csi}
            src={csiLogo}
            alt="CyberSafeIreland Logo"
          />
        </View>
        <View style={styles.body.centerAlign}>
          <Image
            src={toolLogo}
            style={styles.awardImg.halfBorder}
            alt="CyberSafe Tool for Schools"
          />
          <View style={styles.div.centered}>
            <Text style={styles.h2.centered}>CyberSafeIreland CLG</Text>
            <Text style={styles.para.address}>Company number: 568651</Text>
            <Text style={styles.para.address}>
              Registered charity number: 20104108
            </Text>
            <Text style={styles.para.address}>
              93 Upper George Street, Dun Laoghaire,
            </Text>
            <Text style={styles.para.address}>Dublin, Ireland</Text>
            <Link style={styles.hyperlink} src={"https://cybersafeireland.ie"}>
              cybersafeireland.ie
            </Link>
            <Text style={styles.hyperlink}>info@cybersafeireland.ie</Text>
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

export default PdfReportTemplateSilver
