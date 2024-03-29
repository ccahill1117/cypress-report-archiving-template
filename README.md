# cypress-reporting Vue.JS template

## What is this project?

> This project is a walkthrough and open-source template that can help you get started quickly to :
* Launch and deploy a web application (AWS CodePipeline)
* Write tests for your web application (Cypress)
* Save your e2e tests as reports (Mochawesome)
* Send you notifications when your tests have finished (AWS SNS)

## About this project

> I developed this project over the course of an internship with M Science LLC, from Mar-2019 to Jun-2019. My mentor, Joe Taylor (Lead UI/UX Architect), and I were interested in creating an archive of e2e test reports, based around the Cypress testing framework. 

> The overall goal of the project was to integrate the testing into our CI/CD pipeline (AWS Codepipeline). This was accomplished by adding a buildspec.yml file into the root directory of this project. The buildpsec file installs the necessary dependencies on the virtual CodeBuild instance so that the cypress tests can be executed in the cloud.

> Using the packages included below, after the tests run, a compiled .html report is generated and moved to an s3 bucket with a timestamped directory. Additionally an Amazon SNS message is sent to the necessary subscribers, with a link to the s3 bucket, so that the user can later find the report.

## Packages this project uses: 

*  "cypress": "^3.3.0"
*  "mocha": "^5.2.0"
*  "mochawesome": "^3.1.2"
*  "mochawesome-merge": "^1.0.7"
*  "mochawesome-report-generator": "^3.1.5"
*  "start-server-and-test": "^1.9.0"
*  "write-yaml": "^1.0.0"
*  "simple-git": "^1.116.0"

## Further work/improvements :

#### Persist .git metadata
* Strangely, AWS CodePipeline loses .git metadata when the project is moved from CodeSource --> CodeBuild. [See this AWS discussion](https://forums.aws.amazon.com/thread.jspa?threadID=244197) The next improvement to this project would be to programmatically generate the buildspec.yml file before the project is pushed to github.

#### Test result visualization/database
* After writing more and more e2e tests, I noticed that certain components of a web application tended to fail tests more often than others. (i.e. certain HTTPS requests, etc.) However, building a database of tests where tests are identified by specific IDs, could really give developers a nice overview of where things tend to fail/succeed more often -- and then give some guidance as to where engineers need to drill down and improve their codebase.

### Clone this project and serve locally
```
$ git clone https://github.com/ccahill1117/cypress-report-archiving-template.git
$ npm install
$ npm run serve

```

### Run example tests locally, with Cypress test runner

*  First, serve your application (at port 8080) with 
``` 
$ npm run serve
```
*  Next, navigate to scripts/cypress_local.js, make sure line 32 reads, 
```
cypress.open(options).then(
```
* Finally, type the following into the command line,
```
npm run cy:run me@me.com pa55w0rd
```
*  The test runner should appear momentarily.

### Run example tests locally, with headless test runner

*  First, serve your application (at port 8080) with 
``` 
$ npm run serve
```
*  Next, navigate to scripts/cypress_local.js, make sure line 32 reads, 
```
cypress.run(options).then(
```
* Finally, type the following into the command line,
```
npm run cy:run me@me.com pa55w0rd
```
*  The tests should run in the terminal and a mochawesome-report folder with your test report should appear in your root directory.