<template>
  <div class="root">
    <div class="spot">
      <div class="wrap">
        <h1>
          <router-link to="/" title="vuetube">
            vuetube ▶
          </router-link>
        </h1>
        <div class="space single"></div>
        <p>Video resources that will help you to improve your Vue skills</p>
        <div class="space"></div>
        <div class="space"></div>
        <p class="note">
          By <a target="_blank" href="http://firmino.engineer">Firmino Changani</a>
          &nbsp;-&nbsp;
          Want to improve?
          <a target="_blank" href="https://github.com/flowck/vuetube">
            Fork here
          </a>
        </p>
        <div class="space"></div>
        <iframe src="https://ghbtns.com/github-btn.html?user=flowck&repo=vuetube&type=star&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe>
      </div>
    </div>
    <div class="wrap root view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {};
  },
  mounted() {
    // Wait for 500ms after mount the component
    setTimeout(() => {
      // Add the class slidedown in the header
      document.querySelector(".spot")
        .classList.add('slidedown');
    }, 500);
  },
};
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }

  html, body, .root{
    overflow: auto;
    min-height: 100%;
  }

  body{
    background-color: #EEE;
    font-family: 'Roboto', 'sans-serif';
  }

  h1, h2, h3, h4, h5, h6, b, strong{
    font-weight: 500;
  }

  a{
    transition: color .3s;
  }

  .wrap{
    width: 70%;
    margin: 0 auto;
  }

  .spot{
    top: 0;
    left: 0;
    width: 100%;
    height: 300px;
    display: flex;
    position: absolute;
    text-align: center;
    align-items: center;
    background-color: #333;
    transition: transform .3s;
    transform: translateY(-300px);
  }

  .spot{
    color: #FFF;
  }

  .spot h1 a{
    font-size: 50px;
  }

  .spot a{
    color: #5bc498;
    text-decoration: none;
  }

  .spot a:hover{
    color: #FFF;
  }

  .slidedown{
    transform: translateY(0);
  }

  .space{
    width: 100%;
    height: 20px;
  }

  .space.single{
    height: 10px;
  }

  .view{
    margin-top: 300px;
  }

  .spot iframe{
    width: 90px;
  }
</style>

