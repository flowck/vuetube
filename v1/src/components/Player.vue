<template>
  <div class="root">
    <div class="space"></div>
    <div class="space"></div>
    <div class="player" v-html="player"></div>
  </div>
</template>

<script>
export default {
  name: 'Player',
  data() {
    return {
      player: '',
    };
  },
  created() {
    // Config options
    const KEY = 'AIzaSyBlSc4Zavlls-c_K2cESn1jyuiUSckHgwM';
    const OPTS = `part=player&id=${this.$route.params.id}`;
    const BASE_URL = `https://www.googleapis.com/youtube/v3/videos?&${OPTS}&key=${KEY}`;

    // Get request to youtube API
    fetch(BASE_URL, { method: 'GET' })
      .then(response => response.json())
      .then((json) => {
        this.player = json.items[0].player.embedHtml;
      })
      .catch((err) => { this.err = err; });
  },
};
</script>

<style>
  .player iframe{
    width: 100%;
    height: 560px;
    background-color: #DDD;
  }

  @media screen and (max-width: 450px) {
    .player iframe {
      height: 200px;
    }
  }
</style>
