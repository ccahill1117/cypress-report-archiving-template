<template>
<div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>3.1 - At the end of the last section, you might have noticed the last section of the buildspec.yml file is the post_build section. At that point, the 'npm run ci' line is run, which starts up a server at localhost:8080 in the CodeBuild virtual environment. Once the localhost:8080 is up and running, and serves our build and runs the the cypress tests located at cypress/integration.</p>
        <img src="img/Screen Shot 2019-06-27 at 10.26.34 AM.png" class=walkthroughPix>
        <p>In this template, the buildspec.yml file is rewritten by the scripts/writeBuildspec.js file everytime the <code>$ npm run git "YOUR COMMIT MESSAGE"</code> command is run. This is achieved by use of the <a href="https://www.npmjs.com/package/simple-git"><strong>simple-git</strong></a> and <a href="https://www.npmjs.com/package/write-yaml"><strong>write-yaml</strong></a> packages.</p>
        <p>Conveniently, this ensures that directory where your test results reside is given a name that timestamped and marked with the last commit message you made on your repository.</p>
        <p>However, as mentioned, when using this process, you will want to make sure that your commit messages <strong>ONLY INCLUDE</strong> alphanumeric characters, spaces, dashes and underscores! Doing so will create an invalid directory name in S3. You can see in the picture <strong>above</strong> that the directory "2019-06-27_10-26_update_writeBuildspec.js" would actually fail due to the period.</p>
        <img src="img/Screen Shot 2019-06-27 at 10.26.01 AM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>3.2 - However, we have not yet created a bucket for where our test results should be delivered by CodeBuild. We will want to do that now.</p> 
        <p>Navigate to <a href="https://s3.console.aws.amazon.com/s3/">AWS S3 console</a> and create a bucket like below.</p>
        <p>Make sure that you keep all your regions the same!</p>
        <img src="img/Screen Shot 2019-06-27 at 10.37.23 AM.png" class=walkthroughPix>        
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>3.3 - Next navigate to the bucket permissions tab and unblock all public access.</p>
        <img src="img/Screen Shot 2019-06-27 at 2.55.51 PM.png" class=walkthroughPix>        
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>3.4 - Then, navigate to the Bucket Policy and use the following policy, replacing YOURBUCKETNAME with the name of the bucket you created. This will allow public read-only access to the bucket.</p>
        <code>
          {
              "Version": "2012-10-17",
              "Statement": [
                  {
                      "Sid": "AddPerm",
                      "Effect": "Allow",
                      "Principal": "*",
                      "Action": "s3:GetObject",
                      "Resource": "arn:aws:s3:::YOURBUCKETNAME/*"     
                  }
              ]
          }
        </code>
        <p></p>
        <p>Below is how the Bucket Policy should look.</p>
        <img src="img/Screen Shot 2019-06-27 at 2.58.10 PM.png" class=walkthroughPix>        
      </v-card-text>
    </v-card>
  </div>
    <div>
    <v-card>
      <v-card-text class="p0card">
        <p>3.5 - Next navigate to the Simple Subscription Service (SNS) console in AWS. <a href="https://us-west-2.console.aws.amazon.com/sns/v3/">You can click here.</a></p>        
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>3.6 - Once in the SNS console, click "Create topic".</p>  
        <img src="img/Screen Shot 2019-06-27 at 3.18.34 PM.png" class=walkthroughPix>        
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>3.7 - Next, just give your Topic a name that is easy to remember, then scroll down and click "Create topic." </p>  
        <img src="img/Screen Shot 2019-06-27 at 4.41.53 PM.png" class=walkthroughPix>        
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>3.8 - After your topic has been created, click on "Subscriptions" in the left hand navigation drawer.</p>  
        <img src="img/Screen Shot 2019-06-27 at 4.43.15 PM.png" class=walkthroughPix>        
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>3.9 - At the "Subscriptions" console, click "Create Subscription".</p>  
        <img src="img/Screen Shot 2019-06-27 at 4.44.48 PM.png" class=walkthroughPix>        
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>3.10 - On the Subscription creation screen, just click into the Topic ARN box, and click on the ARN of the SNS Topic you created in 3.7.</p>
        <p>For "protocol" pick Email</p>
        <p>For "endpoint" type in your e-mail address.</p>  
        <img src="img/Screen Shot 2019-06-27 at 4.46.59 PM.png" class=walkthroughPix>        
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>3.11 - You should quickly receive an e-mail, asking you to confirm your subscription, and once you do that, you can navigate back to your SNS Topic (i.e. myCypressTopic) and you will see that your subscription is all confirmed.</p>  
        <img src="img/Screen Shot 2019-06-27 at 4.49.38 PM.png" class=walkthroughPix>       
        <p></p>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>In the next section, we'll create an IAM Policy for our AWS CodeBuild job so that our AWS CodeBuild (earlier named CypressTestBuild @ 2.9) can access the S3 bucket (to put the reports there) and access the SNS topic we just made (to send alert emails).</p>
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
