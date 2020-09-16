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
    alignItems: "center",
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
          <Text style={styles.h1}>CyberSafe Tool for Schools Report</Text>
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
                <Text style={styles.para}>Groups Surveyed:</Text>
              </View>
              <View style={styles.table.cell}>
                <Text style={styles.para}>
                  School Leadership, Teachers, Pupils
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
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.header}>
          <Image style={styles.logo} src={logo} alt="CyberSafeIreland Logo" />
        </View>
        <View style={styles.body}>
          <Text style={styles.h1}>Award Breakdown</Text>
          <Text style={styles.h2}>School Leadership</Text>
          <Text style={styles.para}>
            Digital Knowledge: {report.leaders.digitalknowledge} School
          </Text>
          <Text style={styles.para}>
            Privacy: {report.leaders.privacy} School
          </Text>
          <Text style={styles.para}>
            Online Life: {report.leaders.onlinelife} School
          </Text>
          <Text style={styles.para}>
            Communication: {report.leaders.communication} School
          </Text>
          <Text style={styles.para}>
            Critical Thinking: {report.leaders.criticalthinking} School
          </Text>
          <Text style={styles.para}>
            Responsible Use: {report.leaders.responsibleuse} School
          </Text>
          <Text style={styles.h2}>Teachers</Text>
          <Text style={styles.para}>
            Digital Knowledge: {report.teachers.digitalknowledge} School
          </Text>
          <Text style={styles.para}>
            Privacy: {report.teachers.privacy} School
          </Text>
          <Text style={styles.para}>
            Online Life: {report.teachers.onlinelife} School
          </Text>
          <Text style={styles.para}>
            Communication: {report.teachers.communication} School
          </Text>
          <Text style={styles.para}>
            Critical Thinking: {report.teachers.criticalthinking} School
          </Text>
          <Text style={styles.para}>
            Responsible Use: {report.teachers.responsibleuse} School
          </Text>
          <Text style={styles.h2}>Pupils</Text>
          <Text style={styles.para}>
            Digital Knowledge: {report.pupils.digitalknowledge} School
          </Text>
          <Text style={styles.para}>
            Privacy: {report.pupils.privacy} School
          </Text>
          <Text style={styles.para}>
            Online Life: {report.pupils.onlinelife} School
          </Text>
          <Text style={styles.para}>
            Communication: {report.pupils.communication} School
          </Text>
          <Text style={styles.para}>
            Critical Thinking: {report.pupils.criticalthinking} School
          </Text>
          <Text style={styles.para}>
            Responsible Use: {report.pupils.responsibleuse} School
          </Text>
        </View>
      </Page>
      <Page size="A4" style={styles.page} wrap>
        <View style={styles.header}>
          <Image style={styles.logo} src={logo} alt="CyberSafeIreland Logo" />
        </View>
        <View style={styles.body}>
          <Text style={styles.h1}>Recommendations</Text>
          <Text style={styles.h2}>Overall</Text>
          <Text style={styles.para}>
            Overall your Donec nec tincidunt massa, vitae finibus felis. Integer
            egestas lorem ac lorem lacinia rutrum. Ut id purus nulla. In et
            pharetra nisi. Aliquam ac odio sit amet nibh auctor pellentesque ut
            ac elit. Aliquam felis magna, commodo eget finibus ac, dignissim non
            ligula. Aenean eget aliquam odio.
          </Text>
          <Text style={styles.h2}>School Leadership</Text>
          <Text style={styles.para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pretium tempus purus, interdum consectetur ante. Nulla facilisi.
            Proin faucibus felis sed tortor fermentum pulvinar. Donec pulvinar,
            ligula id dictum rhoncus, risus est accumsan orci, posuere lacinia
            arcu augue vel nulla.
          </Text>
          <Text style={styles.para}>
            Morbi dignissim, nibh eget mollis varius, erat ante pretium ipsum,
            id posuere mi urna non felis. Integer in semper purus. Curabitur sed
            maximus lorem. Nulla a bibendum sapien. Etiam ornare tempor lectus,
            ac tristique mi consequat at. Nullam vel faucibus nunc. Donec
            commodo enim vel lectus mollis, ac pulvinar arcu interdum. Nulla
            vehicula tellus orci, id tempus urna scelerisque id. Praesent et
            nibh pulvinar, auctor diam in, consectetur ipsum.
          </Text>
          <Text style={styles.h2}>Teachers</Text>
          <Text style={styles.para}>
            Nulla volutpat justo et orci tincidunt, ac porta velit elementum.
            Nullam egestas sodales risus, sit amet fermentum magna eleifend a.
            Ut et sollicitudin urna. Nullam posuere auctor eros, ut porttitor
            enim. Nulla quis mauris est. Integer ut rhoncus lacus. In eget
            venenatis felis. Nullam semper quis eros malesuada pharetra.
          </Text>
          <Text style={styles.para}>
            Pellentesque dignissim porta feugiat. Ut auctor diam felis.
            Suspendisse aliquam luctus massa vel ullamcorper. Nulla et elementum
            tortor, in luctus arcu. Pellentesque tempor vel nisi at condimentum.
          </Text>
          <Text style={styles.h2}>Pupils</Text>
          <Text style={styles.para}>
            Duis quis pulvinar neque. Phasellus eleifend ante at mi commodo
            dignissim. Fusce malesuada quam velit, at iaculis justo pellentesque
            quis. Maecenas a quam vitae dolor ornare volutpat ut vel nulla. Nam
            eget orci posuere, tincidunt nulla et, malesuada neque. Morbi
            consectetur, erat id rhoncus sodales, quam ligula eleifend elit, sit
            amet bibendum enim orci ut diam. Duis euismod pellentesque
            elementum. Maecenas bibendum faucibus porta.
          </Text>
        </View>
      </Page>
      <Page size="A4" style={styles.contactPage} wrap>
        <View style={styles.header}>
          <Image style={styles.logo} src={logo} alt="CyberSafeIreland Logo" />
        </View>
        <View style={styles.body}>
          <Text style={styles.h1}>CyberSafeIreland</Text>
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
