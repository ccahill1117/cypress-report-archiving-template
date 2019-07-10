<template>
<div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>This template and walkthrough can help you launch a basic web application and run cypess E2E tests in the AWS CodeBuild environment.</p>
        <p>Additionally, this repository uses some custom scripting (scripts/writeBuildspec.js) which programmatically generates a new buildspec.yml file in the root directory everytime a user runs the command <code>$ npm run git "YOUR COMMIT MESSAGE HERE"</code>, where you put your commit message in quotes.</p>
        <p>Following along with this walkthrough will show a user how to set up a simple AWS CodePipeline, triggered by pushing new code to the master branch of the repository.</p>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>In order to properly use this template, a user just needs to slightly alter their workflow...</p>
        <ol>
          <li>1. First, do whatever work you need to do in changing your code, save all files.</li>
          <li>2. Next, type <code>$ npm run git "COMMIT MESSAGE"</code> This will update your buildspec.yml to include your latest commit message and include a timestamp -- that information will be included in your S3 test report storage, and simple e-mail notifaction, so you can easily find the test results later.</li>
          <li>3. When a user has made enough changes, use the common <code>$ npm push origin</code> command to push to GitHub -- the GitHub Webhooks set up during this tutotial will trigger the AWS CodeBuild process, build the project, run the cypress tests, etc.</li>
        </ol>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>This template and walkthrough can help a user begin to build a complex web application and give a basic intro to end to end testing.</p>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>One note - sometimes the left-hand navigation drawer of this walkthrough disappears if you open up the console or make the view-width too narrow. That's a bug I'm working on 😅.</p>
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
