const yaml = require('write-yaml')
const moment = require('moment')
const theDate = moment().format('YYYY-MM-DD_HH-mm')
const commitMsg = process.argv[2].split(' ').join('_')
const destinationURL = theDate + "_" + commitMsg
const reportURL = `https://admin-ui-tests-bucket.s3.amazonaws.com/reports/dev-admin-ui/${theDate+"_"+commitMsg}/mochawesome.html`

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
                `aws s3 mv mochawesome-report s3://admin-ui-tests-bucket/reports/dev-admin-ui/${theDate+"_"+commitMsg} --recursive`,
                `aws sns publish --topic-arn arn:aws:sns:us-east-1:213585113823:cypressTestBuildNotification --subject "Admin-UI CodeBuild Tests ${theDate+"_"+commitMsg}" --message "Admin-UI CodeBuild tests have completed for last commit message : ${commitMsg} . Follow link here to report results :  https://admin-ui-tests-bucket.s3.amazonaws.com/reports/dev-admin-ui/${destinationURL}/mochawesome.html"`
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

require('simple-git')()
    .add('./*')
    .commit(commitMsg)