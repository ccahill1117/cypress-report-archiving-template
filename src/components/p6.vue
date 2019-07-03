<template>
<div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>6.1 - First let's set up some environmental variables in our CodeBuild environment. This is a pretty straightforward process.</p>
        <p>First, navigate to your CodeBuild job, and click on "Build details".</p>
        <img src="img/Screen Shot 2019-06-28 at 12.31.43 PM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>6.2 - Scroll down the "Environment" section, and click the "Edit" button on the right.</p>
        <img src="img/Screen Shot 2019-06-28 at 12.39.22 PM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>6.3 - On the next screen, click the expand arrow next to "Additional configuration" and scroll down to Environment variables.</p>
        <img src="img/Screen Shot 2019-07-03 at 10.58.18 AM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>6.4 - As shown in the screenshot below, you can update your environment variables here. </p> 
        <p>In this example I have named them EMAIL (me@me.com) and PASS (pa55w0rd).</p>
        <img src="img/Screen Shot 2019-06-28 at 1.26.21 PM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>6.5 - This is useful because you can add any test user information here, instead of adding it to your cypress directory in your project folder, where it would be accessible to anyone.</p>
        <p>Additionally, what's nice is that you environmental variables, when used by Cypress, will not appear in your test results (archived in s3) or in your CloudWatch logs, as you can see below.</p>
        <img src="img/Screen Shot 2019-06-29 at 11.16.27 AM.png" class=walkthroughPix>
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
  },
  methods: {
    
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
