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
