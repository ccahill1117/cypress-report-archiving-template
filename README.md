# cypress-reporting Vue.JS template

## About this project

> I developed this project over the course of an internship with M Science LLC, from Mar-2019 to Jun-2019. My mentor, Joe Taylor (Lead UI/UX Architect), and I were interested in creating an archive of e2e test reports, based around the Cypress testing framework. 

> The overall goal of the project was to integrate the testing into our CI/CD pipeline (AWS Codepipeline). This was accomplished by adding a buildspec.yml file into the root directory of this project. The buildpsec file installs the necessary dependencies on the virtual CodeBuild instance so that the cypress tests can be executed in the cloud.

> Using the packages included below, after the tests run, a compiled .html report is generated and moved to an s3 bucket with a timestamped directory -- so that the user can later find 




## Packages this project uses: 

* "cypress": "^3.3.0"
*  "mocha": "^5.2.0"
*  "mochawesome": "^3.1.2"
*  "mochawesome-merge": "^1.0.7"
*  "mochawesome-report-generator": "^3.1.5"
*  "start-server-and-test": "^1.9.0"

## Further work/improvements

#### Persist .git metadata
* Strangely, AWS CodePipeline loses .git metadata when the project is moved from CodeSource --> CodeBuild. [See this AWS discussion](https://forums.aws.amazon.com/thread.jspa?threadID=244197) The next improvement to this project would be to programmatically generate the buildspec.yml file before the project is pushed to github.

#### Test result visualization/database
* After writing a lot of e2e tests, I noticed that sometimes certain web application functionality tended to fail more often than others for reasons that I could not always determine. (i.e. certain GET/PUT requests) However, building a database of tests where tests are identified by specific IDs, could really give developers a nice overview of where things tend to fail/succeed more often -- and then give some guidance as to where engineers need to drill down and improve their codebase.

### Clone this project and serve locally
```
$ git clone https://github.com/ccahill1117/cypress-report-archiving-template.git
$ npm install
$ npm run serve

```

