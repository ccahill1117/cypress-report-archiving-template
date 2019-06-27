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
        <img src="img/Screen Shot 2019-06-27 at 2.58.10 PM.png" class=walkthroughPix>        
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
