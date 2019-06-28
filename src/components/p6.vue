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
