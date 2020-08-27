# CybersafeIreland Self-Assessment Tool for Schools

## About this app
Created by Carter & Scott: [@bethanyios](https://github.com/bethanyios) and [@jc2820](https://github.com/jc2820), this is the repository for CybersafeIreland's Self-Assessment Tool for Schools.

The tool is for primary schools in Ireland to self-assess their level of 'cybersafety' across several categories (digital knowledge, privacy, sharing, communication, critical thinking and responsible use). The survey is to be completed by a variable quota of school Leaders, Teachers and Pupils depending on the size of the school. Once complete, schools will be given a report of their cybersafety by CybersafeIreland, and the opportunity to purchase a mark of their level of cybersafety that they can display.

The app has three main routes: A mini-site which serves to provide information about the tool and about CybersafeIreland, as well as links to their homepage and social media, a protected school admin area where a point of contact from each school can keep track of and submit their survey progress, and the survey itself with tailored questions for each type of school user.

Special thanks to [Delesign](https://delesign.com/) for their lovely free graphics.

## Stack
* Gatsby
* ReactJS (Hooks and Context API)
* Netlify
* Netlify CMS
* Netlify functions
* Firebase Firestore
* Firebase Auth

### Run this app
1. Clone this repository
2. Install Gatsby CLI on your machine: `npm install -g gatsby-cli` (you will need a recent version of node) 
3. run `npm i`
4. run `gatsby develop`

### Create a build
Step 1 and 2 from above
run `gatsby build`

### Run this app with netlify functions
Netlify functions control the app's integration with Salesforce. 
install Netlify CLI on your machine: `npm install netlify-cli -g`
run `netlify dev`

## Firebase
Database and authentication are provided by Google Firebase. You can log in to the control panel with the CybersafeIreland credentials and view the current db, access the firebase config and add or remove authenticated users and authentication methods.

## Environment Variables
Env variables for production can be found in the netlify control panel, accessible via a github signin with CybersafeIreland credentials.

## Content Management System
Content management is provided for: 
* Editing survey questions and responses.
* Editing some page hints and messages.
* Editing some informational page content.
* Viewing up-to-date progress of school's progress through the tool.
* Viewing reports of schools whose surveys are complete.
* Viewing a page that can be printed to PDF as a report to send back to schools.

The CMS can be accessed [here](https://the full url/admin). You can log in and edit with CybersafeIreland's github credentials or if you are a collaborator on this repository.
CMS edits update markdown files in this repository via commits on master directly.

## Costs
Currently all SAAS accounts are on free tier (Firebase and Netlify) except Salesforce. It is unexpected that calls, writes etc will break the free provisions for the current userbase, but if the scale is extended, it may be worth looking at the quotas. Emails regarding running out of calls will be sent to cybersafe.dev@gmail.com. This email is accessible using CybersafeIreland credentials.



