<template>
  <v-container data-cy="v-container">
    <v-layout
      text-xs-center
      wrap
    >
      <v-card class="outlineText">
        <img
          src="/img/cypressLogo.png"
          width="200"
        >
        <v-card-text>
          <p class="cardText">
            This project is a walkthrough and open-source template that can help you get started quickly to: 
          </p>          
          <h2>
            Launch and deploy a web application (AWS CodePipeline, S3, Route 53, CloudFront)
          </h2>
          <p></p>
          <h2>
            Write tests for your web application (Cypress.io)
          </h2>
          <p></p>
          <h2>
            Archive your e2e tests as reports (Mochawesome suite)
          </h2>
          <p></p>      
          <h2>
            Send notification that tests have been run in AWS CodeBuild environment with hyperlink to where the tests have been stored (AWS SNS)
          </h2>
          <p></p>
          <p class="cardText">
            You can follow along on the left side of screen to complete this walkthrough!
          </p>  
                  
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
  font-size: 2rem
}

</style>
