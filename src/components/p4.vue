<template>
<div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>4.1 - Now that we have created our target bucket (where to store reports) and our SNS service, we need to add that to the code in our repository, so that our buildspec.yml includes that information -- so that CodeBuild job can find the right bucket and SNS service.</p>
        <p>To do that, navigate to the scripts/writeBuildspec.js and fill in the bucket name for the <code>const testResultsBucket</code> (you can find this value back at section 3.2 screenshot).</p> 
        <p> Next, copy the ARN of the SNS topic we created for <code>const snsTopic</code> (you can find this value back at section 3.8 screenshot) .</p>
        <img src="img/Screen Shot 2019-06-28 at 12.13.11 AM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>4.2 - As mentioned at the end of the last section, we will next create an IAM Policy for our AWS CodeBuild job. </p> 
        <p> An easy way to begin creating an IAM policy for the CodeBuild job is to first navigate over to <a href="https://us-west-2.console.aws.amazon.com/codesuite/codebuild/projects?">AWS CodeBuild</a> </p>
        <p>Then go ahead and click on the name of the CodeBuild job you created at section 2.9.</p>
        <img src="img/Screen Shot 2019-06-27 at 7.39.53 PM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>4.3 - Next, go and click on "Build details" and then click on the blue hyperlink text underneath "Service role"</p>
        <img src="img/Screen Shot 2019-06-27 at 10.42.00 PM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>4.4 - In a new tab, you will see that you are now in the Identity and Access Management (IAM) service.</p>
        <p><strong>Keep this tab open!</strong></p>
        <p>Here, we can click the blue "Attach Policies" button.</p>
        <img src="img/Screen Shot 2019-06-27 at 10.50.55 PM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>4.5 - On the next page, you will see a big list of default policies.</p>
        <p>Go ahead and click the "Create policy" button near the top-left of the screen.</p>
        <img src="img/Screen Shot 2019-06-27 at 10.52.43 PM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>4.6 - On the next page, for the first service permissions select:</p>
        <p>Service : S3</p>
        <p>Actions : All S3 Actions</p>
        <p>Resources : All Resources</p>
        <hr>
        <p>Once you finish that, click the plus sign at the bottom right that says " + Add additional permissions", andfor the next service permissions select: </p>
        <p>Service : SNS</p>
        <p>Actions : All SNS Actions</p>
        <p>Resources : All Resources</p>
        <p>Finally, click the big blue "Review policy" button in the lower-right.</p>
        <img src="img/Screen Shot 2019-06-27 at 10.59.47 PM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>4.7 - Next, go ahead and add a name to the policy, a short description, and click "Create policy" in the lower right.</p>
        <img src="img/Screen Shot 2019-06-27 at 11.03.54 PM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>4.8 - Next, you will get bounced back to the same list of default IAM policies we saw in section 4.5, except now, you will be able to see the policy we just created in that list.</p>
        <p>Go ahead and search and make sure it is there.</p>
        <img src="img/Screen Shot 2019-06-27 at 11.06.22 PM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>4.9 - If you kept the tab open from section 4.3, you can go ahead and refresh that now to get an updated list of IAM policies.</p>
        <p>If you closed it by accident, just follow the instructions to return to the "Attach policies" button in section 4.5.</p>
        <p>Once you get to the screen below, and confirm you are attaching permissions to the correct role, next, select the policy you just created and click the blue "Attach policy" in the lower right.</p>
        <img src="img/Screen Shot 2019-06-27 at 11.09.26 PM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>4.10 - Now, if you make changes to this repository, save those changes and run <code>$ npm run git "SOME COMMIT MESSAGE"</code>, then navigate to the AWS CodePipeline for the pipeline we have created, you should see something that looks very similar to the image below.</p>
        <img src="img/Screen Shot 2019-06-27 at 11.36.19 PM.png" class=walkthroughPix>
        <p></p>
        <p>If your CodePipeline transitions from Source to Build properly, go ahead and click on the "details" blue text in the Build section, then go ahead and click the "Tail logs" button to watch the build job run.</p>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>4.11 - If everything goes accordingly, you should see (in addition to a few lint errors...😄) a simple job run and pass (it's only looking for a simple data-cy tag on the landing page of this web application), all the test result materials be moved from the temporary "mochawesome-report" folder in the CodeBuild environment, and moved to a specific directory in the S3 bucket we made, and then at the bottom an SNS message should send to the e-mail you provided as well!</p>
        <img src="img/Screen Shot 2019-06-27 at 11.41.15 PM.png" class=walkthroughPix>
        <p></p>
        <p>Hopefully, all of that worked. Of course, if it did not, something odd could have happened somewhere. While developing this walkthrough, I had a few issues with buildLogs and artifiacts not going where they need to go. There might be some trial and error involved.</p>
        <p>Assuming everything worked for you -- you can now push your code to GitHub, trigger your CodeBuild, run Cypress E2E tests in the CodeBuild environment, merge tests into a single HTML report, export tests to a pre-determined directory in a test results S3 bucket, and send an e-mail to topic subscribers which includes a hyperlink to the test results!</p>
        <p>In the next section, we will use CloudFront CDN service to deploy the built web application and include an SSL certificate so that we can use HTTPS protocol.</p>
      </v-card-text>
    </v-card>
  </div>
</div>
</template>

<script>
export default {
  name: 'p1',
  props: {
    msg: String
  }
}
</script>


<style scoped>
.walkthroughPix {
   max-width: 100%; 
   height: auto
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.p0card {
  margin: 10px;

}
</style>
