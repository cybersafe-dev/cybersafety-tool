# CyberSafeIreland Self-Assessment Tool for Schools

## About this app
Created by Carter & Scott: [@bethanyios](https://github.com/bethanyios) and [@jc2820](https://github.com/jc2820), this is the repository for CybersafeIreland's Self-Assessment Tool for Schools.

The tool is for primary schools in Ireland to self-assess their level of 'cybersafety' across several categories (digital knowledge, privacy, sharing, communication, critical thinking and responsible use). The survey is to be completed by a variable quota of school Leaders, Teachers and Pupils depending on the size of the school. Once complete, schools will be given a report of their cybersafety by CyberSafeIreland, and the opportunity to purchase a mark of their level of cybersafety that they can display.

The app has three main routes: A mini-site which serves to provide information about the tool and about CyberSafeIreland, as well as links to their homepage and social media, a protected school admin area where a point of contact from each school can keep track of and submit their survey progress, and the survey itself with tailored questions for each type of school user.

Special thanks to [Delesign](https://delesign.com/) for their lovely free graphics.

## Stack
* Gatsby
* ReactJS (Hooks and Context API)
* Netlify
* Netlify CMS
* Netlify functions
* Firebase Firestore
* Firebase Auth
* react-pdf

### Run this app
1. Clone this repository
2. Install Gatsby CLI on your machine: `npm install -g gatsby-cli` (you will need a recent version of node) 
3. run `npm i`
4. run `gatsby develop`
5. go to localhost:8000 in your browser
6. To directly view the main routes visit localhost:8000/survey for the survey and localhost:8000/app for the school admin area.

### Create a build
Steps 1, 2 and 3 from above
run `gatsby build`

### Run this app with netlify functions
Netlify functions control the app's integration with Salesforce. 
install Netlify CLI on your machine: `npm install netlify-cli -g`
run `netlify dev`
Go to localhost:8888 in your browser

## Firebase
Database and authentication are provided by Google Firebase. You can log in to the control panel with the CyberSafeIreland credentials and view the current db, access the firebase config and add or remove authenticated users and authentication methods.

## Environment Variables
Env variables for production can be found in the netlify control panel, accessible via a github signin with CyberSafeIreland credentials.

## Content Management System
Content management is provided for: 
* Editing survey questions and responses.
* Editing some page hints and messages.
* Editing some informational page content.

The CMS can be accessed [here](https://the full url/admin). You can log in and edit with CyberSafeIreland's github credentials or if you are a collaborator on this repository.
CMS edits update markdown files in this repository via commits on master directly.

The CMS is provided by Netlify CMS via Gatsby plugins. Named users can be added using the Netlify Identify service via email invite. This is currently not being utilised but can be if CyberSafeIreland require named users who are not likely to log in or be invited as a Github collaborator on this repo. 

## Reporting and analysis
An admin page is provided to view schools signed up, schools progress through the app and to download PDF reports when they have been submitted.
This page can be found by logging in to the app through the log in page [here](https://the full url/app/login) with CyberSafeIreland credentials.

When logged in you can see a filterable list of schools with option to show or hide details, view individual's survey submission scores and download a report.
You can also see timestamps for when each score was submitted and for the time and date at which the final report was submitted.

PDFs are created from a template react component via the react-pdf package.

## Costs
Currently all SAAS accounts are on free tier (Firebase and Netlify) except Salesforce. It is unexpected that calls, writes etc will break the free provisions for the current userbase, but if the scale is extended, it may be worth looking at the quotas. Emails regarding running out of calls will be sent to cybersafe.dev@gmail.com. This email is accessible using CyberSafeIreland credentials.



