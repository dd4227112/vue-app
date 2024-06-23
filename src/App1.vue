<template>
  <!-- text interpolation -->
  <div>Hello David {{ lastName }} from {{ location }}</div>

  <!-- using v-text directive -->
  <p>Your Channels</p>
  <div id="channel" v-text="channel"></div>

  <!-- using v-html directive , Shoud be used carefully has may lead to x-site attack especially for api-->
  <p>Your Current Channel</p>
  <div v-html="currentChannel"></div>
  <div v-html="youtTubeLInkv"></div>

  <!-- biding attribute  using v-bind directive -->
  <p>New Channels With Binded IDs, Class </p>
  <div v-bind:id="channelCss" v-bind:class="classCss" v-text="channel"></div>
  <button v-bind:disabled="isDisabled">Button</button>
  <p class="underline">Undelined Text</p>
  <h2 v-bind:class="isPromoted && 'promoted'">Promoted Movie</h2>
  <h4 v-bind:class="isSold ? 'sold-out' : 'in-stock'">Movie status</h4> <!-- conditionally add class to an element-->

  <!--Array  class binding-->
  <h2 v-bind:class="[classCss, 'promoted', isSold ? 'sold-out' : 'in-stock']">Multiple/array class Binding</h2>
  <!--Obect class binding-->
  <h2 v-bind:class="{
    promoted: isDisabled,
    classCss: true
  }">Object class binding</h2>

  <!--Binding Styles (Object syntax and Array Syntax)-->
  <h3>Binding Styles (Object Syntax)</h3>
  <h3 v-bind:style="{
    color: 'red',
    'font-family': 'italic',
    'font-size': fontSize,
    'padding-top': paddingTop + 'px',
    paddingBottom: '15px'
  }">Binding Styles (Object syntax) #opt1</h3>

  <h3 v-bind:style="cssStyleObject">Binding Styles (Object syntax) #opt2</h3>

  <h3>Binding Styles (Array Syntax)</h3>
  <h3 v-bind:style="[cssStyleObject, borderStyleObject]">Binding Styles (Array syntax) #opt2</h3>

  <h3>V-bind Directive ShortHand</h3>
  <h3 :style="[cssStyleObject, borderStyleObject]" :class="classCss"> Use only : for v-bind</h3>
</template>



<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      lastName: "Daniel",
      location: "Mbezi Dar Es Salaam",
      channel: "Youtube, Instangram",
      currentChannel: "<u><b>WhatsApp</b></u>",
      youtTubeLInk: `<a href="https.youtube.com" onclick = "alert('YouTube Chanel')">Click</a>`,
      channelCss: "cssProperties",
      classCss: "classCss",
      isDisabled: true,
      isPromoted: true,
      isSold: false,
      fontSize: "55px",
      paddingTop: 20,
      cssStyleObject: {
        color: 'red',
        'font-family': 'italic',
        'font-size': 1.8 + 'em',
        paddingTop: '2 px',
        paddingBottom: '15px'
      },
      borderStyleObject: {
        border: '#69288f',
        backgroundColor: 'aquamarine'
      }

    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#channel {
  font-weight: bold;
}

#cssProperties {
  font-weight: bold;
  color: blueviolet;
}

.classCss {
  text-transform: uppercase;
}

.underline {
  text-decoration: underline;
  font-size: 20px;
}

.promoted {
  text-decoration: underline;
  color: #69288f;
}

.className {
  color: red;
  background-color: #69288f;
}

.sold-out {
  color: red;
}

.in-stock {
  color: green;
}
</style>
