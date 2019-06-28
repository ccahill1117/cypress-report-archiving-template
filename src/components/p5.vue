<template>
<div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>5.1 - To get our web application deployed properly, first navigate to AWS CloudFront and click on the big blue "Create Distribution" button.</p>
        <img src="img/Screen Shot 2019-06-28 at 10.34.44 AM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>5.2 - On the next screen, click the "Get Started" button in the <strong>Web devliery method.</strong></p>
        <img src="img/Screen Shot 2019-06-28 at 10.37.10 AM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>5.3 - On the next page, "Create Distribution", you can use the following settings: </p>
        <p>Origin Domain Name : this is the S3 bucket you created back in section 2.4. This is where your code resides after the CodePipeline.</p>
        <p>Origin Path : Blank</p>
        <p>Restrict Bucket Access : Yes</p>
        <p>Origin Access Identity : Create a New Identity</p>
        <p>Comment : Whatever would help you remember</p>
        <p>Grant Read Permissions on Bucket : Yes, Update Bucket Policy (this is nice, because AWS will go ahead and update your bucket permissions so CloudFront can access and devlier your built web application)</p>
        <p>Viewer Protocol Policy : Redirect HTTP to HTTPS</p>
        <p>Allowed HTTP Methods : GET, HEAD, OPTIONS (good for now)</p>
        <p>Field-level encryption Config : Blank</p>
        <img src="img/Screen Shot 2019-06-28 at 11.15.30 AM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>5.4 - Scrolling down, you should not have to make any changes to these options.</p>
        <img src="img/Screen Shot 2019-06-28 at 11.20.41 AM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>5.5 - Scrolling down further, add at least the www. and naked Alternate Domain Names (CNAMEs). i.e. if your website is mysite.com, you'll want to add <strong>www.mysite.com</strong> and <strong>mysite.com</strong>.</p>
        <p>Next, click Custom SSL Certificate (example.com), and then the "Request or Import a Certificate with ACM" button.</p>
        <img src="img/Screen Shot 2019-06-28 at 11.34.56 AM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>5.6 - Clicking the button in the screen above will bring up a new tab with the Amazon Certificate Manager (ACM) console.</p>
        <p>On this screen, add the two CNAMEs you types in previously, then click "Next"</p>
        <img src="img/Screen Shot 2019-06-28 at 11.38.29 AM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>5.7 - You can do the next step either way, but for the purposes of this walkthrough we will select "DNS validation" for our validation method.</p>
        <p>If you prefer to do e-mail validation, that is alright, but be aware that what will happen is, assuming you own the domain mysite.com, AWS ACM will send an e-mail to a few e-mail addresses like, admin@mysite.com, webmaster@mysite.com, etc... and ask you to click on a link to confirm that you control that domain.</p>
        <p>However, that step is a pain if you have not set up e-mail forwarding for addresses like admin@mysite.com</p>
        <p>Because we can manage the DNS validation simply through Route 53 (which we set up back in section 1), this tutorial will use that option!</p>
        <p>Finally, click the "Review" blue button.</p>
        <img src="img/Screen Shot 2019-06-28 at 11.40.14 AM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>5.8 - Next, go ahead and click "Confirm and request"</p>
        <img src="img/Screen Shot 2019-06-28 at 11.44.37 AM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>5.9 - Now if your CNAMEs match up the hosted zone name we created back in section 1, if you click on the little arrow next to each CNAME, you should see a blue button for each record that says "Create record in Route 53".</p>
        <p>Go ahead and click this button for each record.</p>
        <img src="img/Screen Shot 2019-06-28 at 11.47.06 AM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>5.10 - You should see the following screen next. If your records were not created, you may have to manually create CNAME records in Route 53, though that should not be the case.</p>
        <p>Next click "Continue".</p>
        <img src="img/Screen Shot 2019-06-28 at 11.51.29 AM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>5.11 - When you see the next screen, you may see that your certificate has been "Issued" right away. However, somtimes this may take longer in some cases.</p>
        <p>If your certificates have not issued within 15 minutes (just refresh the screen every few minutes or so), go back and check to make sure you have not made any typos.</p>
        <p>Once your certificate has issued, close out of this tab and return to the CloudFront "Create Distribution" screen we were last on at 5.5.</p>
        <img src="img/Screen Shot 2019-06-28 at 11.56.07 AM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>5.12 - Returning to this screen, go ahead and click in the input field underneath "Custom SSL Certificate (example.com):" and select the certificate you just created.</p>
        <p>Scrolling down further, select "Clients that Support Server Name Indication (SNI)"</p>
        <p>Do not make any changes to "Security Policy".</p>
        <img src="img/Screen Shot 2019-06-28 at 11.58.53 AM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>5.13 - Scrolling down further, do not make any changes, except for "Default Root Object" go ahead and type "index.html" into the field there.</p>
        <p>Then click "Create Distribution".</p>
        <img src="img/Screen Shot 2019-06-28 at 12.01.15 PM.png" class=walkthroughPix>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>5.14 - Nearly done ! </p>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card>
      <v-card-text class="p0card">
        <p>5.15 - Next navigate to AWS Route 53, and select the hosted zone you created back at section 1.1.</p>
        <img src="img/Screen Shot 2019-06-28 at 12.05.23 PM.png" class=walkthroughPix>
        <p></p>
        <p>Finally, what you want to do is create A-type records (A - IPv4 addresses) for the same CNAMEs you used in your CloudFront distribution (www.mysite.com and mysite.com). You can follow along with the picture above.</p>
        <p>Doing this will allow you to point web traffic directly to your CloudFront distribution domain name!</p>
        <p>In order to do this, for your first record set :</p>
        <p>A. Click "Create Record Set".</p>
        <p>B. Type in "www" in the <strong>Name:</strong> field.</p>
        <p>C. Select "A - IPv4 address" from the <strong>Type:</strong> options.</p>
        <p>D. Alias - Click "Yes"</p>
        <p>E. Alias Target : select the CloudFront distribution that matches the name in step A. However, sometimes Route 53 is slow to recognize your CloudFront distribution. If Route 53 does not provide the CloudFront domain names for you, just navigate back to your CloudFront console, and copy the domain name, <strong>as shown below in the screenshot.</strong></p>
        <p>F. Click "Create"</p>
        <p>Finally, do steps A-F one more time for your other CNAME, except for that CNAME, just leave the <strong>Name:</strong> field blank (for your 'naked' CNAME, mysite.com)</p>
        <img src="img/Screen Shot 2019-06-28 at 12.15.31 PM.png" class=walkthroughPix>
        <p></p>
        <p>One thing to note, if you copy and paste your CloudFront distribution domain name into your web browser - you should see your web application there. This is a good check to do because sometimes it can take a little time for Route 53 settings to take effect.</p>
        <p>Similarly, any changes to your CloudFront typically take at least 15 minutes or so to propagate through.</p>
      </v-card-text>
    </v-card>
  </div>
  <div>
    <v-card light>
      <v-card-text class="p0card">
        <p>In 15 minutes or so, you should be able to see this web application deployed on your domain name ;-) Feel free to go ahead and delete everything, save, run <code>$ npm run git "starting over fresh"</code> and then <code>$ git push origin</code> and you should hopefully see a nice blank slate once your CodePipeline runs.</p>
        <p>I hope this tutorial has been helpful!</p>
        <p>The next section will briefly cover CodeBuild environment variables which may be helpful in your testing -- if you need to use private passwords/information in your tests that you do not want to leave lying around in your repository!</p>
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
