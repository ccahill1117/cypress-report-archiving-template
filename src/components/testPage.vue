<template>
<div>
  <v-form>
    <v-container>
      <v-text-field data-cy=userField v-model=testPageDataUserName label="user">
      </v-text-field>
      <v-text-field data-cy=passField v-model=testPageDataPassword label="password">
      </v-text-field>
    </v-container>
  </v-form>
  <v-btn dark @click="checkFields()" data-cy="testSubmit">Submit</v-btn>

  <v-card>
      <v-card-text class="p0card">
        <p data-cy="typedUserName">{{testPageDataUserName}}</p>
      </v-card-text>
  </v-card>
    <v-card>
      <v-card-text class="p0card">
        <p data-cy="typedPassword">{{testPageDataPassword}}</p>
      </v-card-text>
  </v-card>
  <v-card>
    <v-card-title primary-title data-cy="submitResult">
      {{targetTitle}}
    </v-card-title>
  </v-card>
  
  
</div>
</template>

<script>
export default {
  name: 'p1',

  data () {
    return {
      testPageDataUserName: '',    
      testPageDataPassword: '',
      targetTitle: ''
    }
  },

  methods: {
    checkFields: function() {
      if (this.testPageDataUserName == "me@me.com" && this.testPageDataPassword == "pa55w0rd") {
        this.targetTitle = "you won"
      }
    }
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
