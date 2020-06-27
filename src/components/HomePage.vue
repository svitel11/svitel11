<template>
  <div id="svitel" class="bcg-black">
    <div class="content">
      <img src="../assets/images/image.jpg">
      <h1 class="name">{{name}}</h1>
      <span class="uname">@{{uname}}</span>
      <p class="address"><b>{{job}}</b> from <i>{{address}}</i></p>
      <div class="tags">
        <p>#{{tags}}</p>
      </div>
      <div class="social">
        <a v-bind:key="social.length" v-for="social in socials" target="_blank" :href="social.src">
          <img :src="require(`../assets/images/icons/${social.icon}`)" width="40" height="40" :alt="social.icon"><p>{{social.src}}</p>
        </a>
      </div>
      <div class="canvas">
        <canvas id="emailCanvas" :width="canvas_w" height="100">
          Your browser does not support the canvas element.
        </canvas>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  data() {
    return {
      canvas_w: "500px",
      idx: 0,
      name: 'Samuel Vitel',
      uname: 'svitel11',
      job: 'Web Developer',
      tags: 'php, javascript, mysql, laravel, lumen, vuejs, jquery, api, linux, aws, css3, html5, vast, adserving, adtechnologies',
      address: 'Vienna, Austria',
      socials: {
        medium: {
          icon: "medium.png",
          src: "https://medium.com/@svitel11"
        },
        github: {
          icon: "github.png",
          src: "https://github.com/svitel11"
        },
        twitter: {
          icon: "twitter.png",
          src: "https://twitter.com/svitel11"
        },
        linkedin: {
          icon: "linkedin.png",
          src: "https://www.linkedin.com/in/svitel11/"
        }
      }
    }
  },

  methods: {
    canvasWidth: function() {
      this.canvas_w = window.innerWidth > 500 ? "500px" : window.innerWidth;
    },

    tagsBeatify: function () {
      this.tags = this.tags.split(' ').join(' #');
    },

    writeEmailOnCanvas: function() {
      var canvas = document.getElementById("emailCanvas");
      var ctx = canvas.getContext("2d");
      ctx.font = "30px Arial";
      ctx.fillStyle = "#867d7b";
      ctx.textAlign = "center";
      ctx.fillText("samuel@vitel.at", canvas.width/2, canvas.height/2);
    }
  },

  created() {
    this.tagsBeatify();
  },

  mounted() {
    this.writeEmailOnCanvas();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .canvas {
    overflow: hidden;
  }

  .content>img {
    opacity: 0.6;
  }

  #svitel {
    width: 100%;
    min-height: 100vh;
    margin: 0;
    display: flex;justify-content: center;
  }

  .bcg-black {
    background: #000000;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #434343, #000000);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  .content {
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .name {
    margin-bottom: 0;
    color: #867d7b;
  }

  .uname {
    color: #6b6665;
  }

  .address {
    color: #867d7b
  }

  .tags {
    color: #74828e;
  }

  .social>a {
    display: flex;
    text-align: center;
    color: #a3a8b7;
  }

  .social>a>img {
    margin-right: 10px;
  }

  @media screen and (max-width: 500px) {
    .content {
      width: 100%;
    }

    .content>img {
      width: 100%;
    }
  }
</style>
