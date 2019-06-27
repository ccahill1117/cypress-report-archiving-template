<template>
<div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>3.1 - At the end of the last section, you might have noticed the last section of the buildspec.yml file is the post_build section. At that point, the 'npm run ci' line is run, which starts up a server at localhost:8080 in the CodeBuild virtual environment. Once the localhost:8080 is up and running, and serves our build and runs the the cypress tests located at cypress/integration.</p>
        <img src="img/Screen Shot 2019-06-27 at 10.06.50 AM.png" class=walkthroughPix>

        
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
