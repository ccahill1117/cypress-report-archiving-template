<template>
  <div id="app">
  <v-app dark>
    <v-navigation-drawer
      clipped
      fixed
      app
      disable-resize-watcher
    >
      <v-list dense>
        <v-list-tile @click="" href="/#/">
          <v-list-tile-action>
            <v-icon>power_settings_new</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Outline</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="" href="/#/pre1">
          <v-list-tile-action>
            <v-icon>format_list_numbered_rtl</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>This template, and what to do with it</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="" href="/#/p1">
          <v-list-tile-action>
            <v-icon>control_camera</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Nameservers, Route 53</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="" href="/#/p2">
          <v-list-tile-action>
            <v-icon>local_drink</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Github, Webhooks, Pipeline</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="" href="/#/p3">
          <v-list-tile-action>
            <v-icon>speaker_phone</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Target Bucket and SNS</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="" href="/#/p4">
          <v-list-tile-action>
            <v-icon>people_outline</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Creating A Service Role</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="" href="/#/p5">
          <v-list-tile-action>
            <v-icon>people_outline</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>CloudFront, SSL, Route 53 Revisited</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>person_add</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-title>Cypress.io reporting template</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</div>
</template>

<script>
import p0 from './components/p0'
import p1 from './components/p1'
import p2 from './components/p2'
import p3 from './components/p3'
import pre1 from './components/pre1'
import p4 from './components/p4'
import p5 from './components/p5'

export default {
  name: 'App',
  components: {
    p0,
    p1,
    p2,
    p3,
    pre1,
    p4,
    p5
  },
  data () {
    return {
      //
    }
  }
}
</script>
