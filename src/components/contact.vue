<template>
  <v-container data-cy="v-container">
    <v-layout
      text-xs-center
      wrap
    >
      <v-card class="outlineText">
        <img>
        <v-card-text>
          <p class="cardText">
            Feel free to send any feed back to chris . at . christophercahill . dot . co <sub><strong>yes .co ;-) not .com</strong></sub>
          </p>   
          <v-btn href="mailto:chris@christophercahill.co">chris-mail</v-btn>
          <p class="cardText">
            Also feel free to reach out on LinkedIn or GitHub!
          </p>
          <v-btn href="https://www.linkedin.com/in/chriscahill89/">
            LinkedIn
          </v-btn>
          <v-btn href="https://github.com/ccahill1117">
            GitHub
          </v-btn>

        </v-card-text>
      </v-card>

    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'p0',
    data: () => ({
      
    })
  }
</script>

<style>

.outlineText {
  padding: 25px
}

.cardText {
  font-size: 1.5rem
}

</style>
