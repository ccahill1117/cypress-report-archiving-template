<template>
<div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>4.1 - As mentioned at the end of the last section, we will next create an IAM Policy for our AWS CodeBuild job. </p> 
        <p> An easy way to begin creating an IAM policy for the CodeBuild job is to first navigate over to <a href="https://us-west-2.console.aws.amazon.com/codesuite/codebuild/projects?">AWS CodeBuild</a> </p>
        <p>Then go ahead and click on the name of the CodeBuild job you created at section 2.9.</p>
        <img src="img/Screen Shot 2019-06-27 at 7.39.53 PM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>4.2 - Next, go and click on "Build details" and then click on the blue hyperlink text underneath "Service role"</p>
        <img src="img/Screen Shot 2019-06-27 at 10.42.00 PM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>4.3 - In a new tab, you will see that you are now in the Identity and Access Management (IAM) service.</p>
        <p><strong>Keep this tab open!</strong></p>
        <p>Here, we can click the blue "Attach Policies" button.</p>
        <img src="img/Screen Shot 2019-06-27 at 10.50.55 PM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>4.4 - On the next page, you will see a big list of default policies.</p>
        <p>Go ahead and click the "Create policy" button near the top-left of the screen.</p>
        <img src="img/Screen Shot 2019-06-27 at 10.52.43 PM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>4.5 - On the next page, for the first service permissions select:</p>
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
        <p>4.6 - Next, go ahead and add a name to the policy, a short description, and click "Create policy" in the lower right.</p>
        <img src="img/Screen Shot 2019-06-27 at 11.03.54 PM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>4.7 - Next, you will get bounced back to the same list of default IAM policies we saw in section 4.4, except now, you will be able to see the policy we just created in that list.</p>
        <p>Go ahead and search and make sure it is there.</p>
        <img src="img/Screen Shot 2019-06-27 at 11.06.22 PM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>4.8 - If you kept the tab open from section 4.3, you can go ahead and refresh that now to get an updated list of IAM policies.</p>
        <p>If you closed it by accident, just follow the instructions to return to the "Attach policies" button in section 4.4.</p>
        <p>Once you get to the screen below, and confirm you are attaching permissions to the correct role, next, select the policy you just created and click the blue "Attach policy" in the lower right.</p>
        <img src="img/Screen Shot 2019-06-27 at 11.09.26 PM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>4.9 - Next, </p>
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
