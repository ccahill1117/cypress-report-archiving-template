const cypress = require('cypress')
const marge = require('mochawesome-report-generator')
const { merge } = require('mochawesome-merge')
const fse = require('fs-extra') 

let user = process.argv[2]
let pass = process.argv[3]

options = {
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "mochawesome-report",
    html: false,
    overwrite: false,
    json: true,
    // reportTitle: theDate 
  },
  reportDir: "mochawesome-report",
  env: {
    USERNAME: user,
    PASSWORD: pass
  },
}

function generateReport(options) {
  return merge(options).then(report => marge.create(report, options))
}

//actual script

fse.emptyDir("mochawesome-report")
cypress.run(options).then(
  () => {
    generateReport(options)
  },
  error => {
    generateReport(options)
    console.error(error)
    process.exit(1)
  }
)