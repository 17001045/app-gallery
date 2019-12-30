<template>
  <layout-app>
    <div class="container pb-5">
      <router-view />
    </div>
  </layout-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    "layout-app": require("./layout/index.vue").default
  }
})
export default class App extends Vue {}
</script>
