<template>
  <main class="container pt-1 items_container">
    <div class="row">
      <div class="col-12 col-md-6 mt-4" v-for="(categorie,index) in categories" :key="index">
        <article class="card col-12 item pb-3" @click="photoM.photoCarouselAction()">
          <div class="card-body">
            <h5 class="card-title">{{ categorie.name }}</h5>
          </div>
          <div class="item_image">
            <img :src="categorie.img" :alt="categorie.name" />
          </div>
        </article>
      </div>
    </div>
    <div v-if="photoCarousel">
      <photo-carousel />
    </div>
  </main>
</template>
<script lang="ts" src="./code.ts">
</script>
