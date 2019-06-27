<template>
<div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>2.1 - First things first, if you do not have an AWS account, make sure to <a href="https://aws.amazon.com/">create one</a> and set up your MultiFactor Authentication (MFA)</p>
      </v-card-text>
    </v-card>
  </div>
    <div>
    <v-card>
      <v-card-text class="p0card">
        <p>2.2 - Next, go ahead and clone or fork this repository from : </p>
        <code>$ git clone https://github.com/ccahill1117/cypress-report-archiving-template.git</code>
      </v-card-text>
    </v-card>
  </div>
    <div>
    <v-card>
      <v-card-text class="p0card">
        <p>2.3 - Create your own repository for this project on your github account, and push your code there.</p>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>2.4 - Log into your AWS account and navigate to S3. Here we are going to create a bucket where we will host our project.</p>
        <p>At this point, just give the bucket a name (see pic below) and click create. For the purposes of this project, we will keep our bucket private, and then add a bucket policy later.</p>
        <p>Pay attention to what region your bucket is in - you will want to make sure your CodePipeline jobs, buckets, and other AWS resources are located in the same region.</p>
        <img src="img/Screen Shot 2019-06-26 at 3.18.16 PM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>2.5 - After creating your bucket, click on the bucket name in your S3 window, and then navigate to the "Properties" tab.</p>
        <img src="img/Screen Shot 2019-06-26 at 3.20.30 PM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>2.6 - Next, log into your AWS account navigate to CodePipeline. Then click, "Create Pipeline"</p>
        <img src="img/Screen Shot 2019-06-22 at 11.40.23 AM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>2.6 - On the following screen, enter a name for your Pipeline and select 'New service role'</p>
        <p>No need at this point to click "Advanced settings", just click Next.</p>
        <img src="img/Screen Shot 2019-06-26 at 3.12.36 PM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>2.7 - In "Source provider" select GitHub. Click "Connect to GitHub", and use the "GitHub Webhooks" detection options.</p>
        <p>Pick the repository and branch name of <strong>the branch that you want to trigger your CodePipeline to begin.</strong></p>
        <p>Then click "Next".</p>
        <img src="img/Screen Shot 2019-06-26 at 4.06.25 PM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>2.8 - In "Build provider" select "AWS CodeBuild". CodeBuild is really going to be the meat and potatoes of this project.</p>
        <p>Click "Create project".</p>
        <img src="img/Screen Shot 2019-06-26 at 4.08.08 PM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>2.9 - Give your CodeBuild project a name and a description.</p>
        <img src="img/Screen Shot 2019-06-26 at 4.12.27 PM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>2.10 - Use a managed environment image, ubuntu operating system, and standard runtime.</p>
        <img src="img/Screen Shot 2019-06-26 at 4.14.10 PM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>2.11 - For Image, select "standard:2.0"</p>
        <p>Image version - "Always user the latest..."</p>
        <p>Service role - new service role</p>
        <p>Role Name - will be created for you</p>
        <p>Additional configuration - no need to touch yet...</p>
        <img src="img/Screen Shot 2019-06-26 at 4.15.17 PM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>2.12 - Buildspec - "Use a buildspec file" (this is the buildspec.yml in the root directory of the repo you cloned/forked)</p>
        <p>No need to provide a buildspec name, as CodeBuild will just default to buildspec.yml</p>
        <img src="img/Screen Shot 2019-06-26 at 4.19.58 PM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>2.13 - Logs - Check the box to enable CloudWatch logs -- this will allow you to see some terminal-like logs as your CodeBuild project runs. This is great to have because you can see if your build job gets hung up anywhere.</p>
        <p>Adding a bucket to archive your S3 logs can be nice to have. As you can see in the screenshot below, I added a path to a directory called codebuildlogs in my "cypressproject" bucket. My logs will be saved there.</p>
        <p>Next, click "Continue to CodePipeline". (It can take a few seconds for the pop-up CodeBuild window to save and close...)</p>
        <img src="img/Screen Shot 2019-06-26 at 4.22.35 PM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>2.14 - Back in CodePipeline World...</p>
        <p>Go ahead and click "Next" when you see that your CodeBuild job has been successfully created.</p>
        <img src="img/Screen Shot 2019-06-27 at 7.32.43 AM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>2.15 - Add Deploy Stage - For your deploy provider, select Amazon S3</p>
        <p>For your bucket, select the bucket you created back in <strong>section 2.4.</strong></p>
        <p>Create an S3 Object Key -- I just called mine 'key'</p>
        <p>Click "Next", and confirm all details on the following page.</p>
        <img src="img/Screen Shot 2019-06-26 at 4.26.42 PM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>2.16 - If that all worked correctly, you should see an image like below.</p>
        <p>At this point, the build will probably fail (because we still have a few things to set up), but you should be able to click on the "Details" blue text in the "Build" section, and then click "Tail logs" and watch some familiar commands pop up.</p>
        <img src="img/Screen Shot 2019-06-26 at 4.31.23 PM.png" class=walkthroughPix>
        <p>The CloudWatch logs give you information regarding each step of the buildjob (which is determined by the buildspec.yml file).</p>
        <p>In the below screenshot you can see the INSTALL phase is starting, and a few 'echo' commands (common command in most operating systems that allows you to print/display some information to a console)</p>
        <img src="img/Screen Shot 2019-06-27 at 8.27.19 AM.png" class=walkthroughPix>
        <p>Somewhere toward the very end of the logs, once everything completes, you will most likely see a red line of code like... <code>[Container] 2019/06/27 15:05:54 Phase context status code: COMMAND_EXECUTION_ERROR Message: Error while executing command: aws s3 mv mochawesome-report s3://cypresstestreports/2019-06-27_08-02_pkg_json_start_server_correction --recursive. Reason: exit status 1 </code> </p>
        <p>We will begin to fix that issue in the next section of this tutorial.</p>
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
