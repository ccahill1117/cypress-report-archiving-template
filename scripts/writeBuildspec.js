const yaml = require('write-yaml')
const moment = require('moment')
const theDate = moment().format('YYYY-MM-DD_HH-mm')
const commitMsg = process.argv[2].split(' ').join('_')
//commit message comes from $ npm run git "commitMessage"
const destinationURL = theDate + "_" + commitMsg
const testResultsBucket = 'testresultscypress'
//add the name of bucket you want above this line!!
const snsTopic = 'arn:aws:sns:us-west-2:422539116740:cypressnotification'
//add the name of your SNS topic above this line!! 
const reportURL = `https://${testResultsBucket}.s3.amazonaws.com/${theDate+"_"+commitMsg}/mochawesome.html`


var data = {
    version: 0.2,
    env: {
        variables: {
            DESTINATION: destinationURL,
            REPORT_URL: reportURL
        },
    },
    phases: {
        install: {
            'runtime-versions': {
                nodejs: 8
            },
            commands: [
                'echo $DESTINATION',
                'echo $REPORT_URL',
                'echo "building this job from programmatically generated buildspec.yml!"',
                'npm install',
                "apt-get install -y libgtk2.0-0 libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 xvfb",
                `echo this is last commitMessage ==> ${commitMsg}`
            ]
        },
        build: {
            commands: [
                'npm run build'
            ]
        },
        'post_build': {
            commands: [
                `npm run ci`,
                `aws s3 mv mochawesome-report s3://${testResultsBucket}/${theDate+"_"+commitMsg} --recursive`,
                `aws sns publish --topic-arn ${snsTopic} --subject "CodeBuild Tests ${theDate+"_"+commitMsg}" --message "CodeBuild tests have completed for last commit message : ${commitMsg} . Follow link here to report results :  https://${testResultsBucket}.s3.amazonaws.com/${destinationURL}/mochawesome.html"`
            ]
        }
    },
    artifacts: {
        files: [
            'index.html',
            'assets/**/*',
            'css/*',
            'js/*',
            'fonts/*'
        ],
        'base-directory': 'dist'
    }
};

yaml('buildspec.yml', data, function(err) {
  //if you want to add err msg, etc you can do so here...
});

require('simple-git') ()
    .add('./*')
    .add('./buildspec.yml')
    .commit(commitMsg)