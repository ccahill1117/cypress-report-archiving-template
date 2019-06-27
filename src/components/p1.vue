<template>
<div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>1.1 - If you have purchased a domain from a domain registrar (i.e. GoDaddy) you will want to change your nameservers. You can do this by navigating to Route 53 on AWS and creating a new hosted zone.</p>
        <p>Click on "Hosted Zones" and then "Create Hosted Zone"</p>
        <img src="img/Screen Shot 2019-06-26 at 3.25.29 PM.png" class=walkthroughPix>
        <p>Once you click "Create Hosted Zone", you'll see four values in the NS (Nameservers) section -- those you will have to pay attention to.</p>
        <img
          src="img/Screen Shot 2019-06-26 at 3.27.03 PM.png"
          width="1000">
        <p>Copy those 4 values and paste them into the domain management nameserver section of whichever domain registrar you used.</p>
        <img
          src="img/Screen Shot 2019-06-22 at 11.32.27 AM.png"
          width="1000">
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>1.2 - Changing your nameservers could take up to 48 hours in some cases.</p>
        <p>One tool you can use to check on the propagation status of your nameservers is <a href="https://dnschecker.org/#NS/">dnschecker.org</a></p>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>1.3 - Once your NS values at <a href="https://dnschecker.org/#NS/">dnschecker.org</a> match the NS values in your Route 53 console, then you know your NS info has propagated.</p>
        <img src="img/Screen Shot 2019-06-26 at 3.32.03 PM.png" class=walkthroughPix>        
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
