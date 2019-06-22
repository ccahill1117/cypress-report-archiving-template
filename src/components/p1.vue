<template>
<div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>First things first, if you have not created an AWS account you are going to want to go ahead and do that -- and make sure to set up your MultiFactor Authentication (MFA)</p>
      </v-card-text>
    </v-card>
  </div>
    <div>
    <v-card>
      <v-card-text class="p0card">
        <p>Go ahead and clone this repository from : 
        </p>
        <code>$ git clone https://github.com/ccahill1117/cypress-report-archiving-template.git</code>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p> </p>
      </v-card-text>
    </v-card>
  </div>
    <div>
    <v-card>
      <v-card-text class="p0card">
        <p>Creating CodeBuild</p>

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
