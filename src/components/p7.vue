<template>
<div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>7.1 -</p>
        <img src="" class=walkthroughPix>
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
