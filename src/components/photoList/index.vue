<template>
  <main class="container pt-1 items_container">
    <div class="row" v-if="photos.length > 0">
      <div class="col-12 col-md-4 mt-4" v-for="(photo, index) in photos" :key="index">
        <article class="card col-12 item">
          <div class="card-body">
            <h5 class="card-title">{{ photo.title }}</h5>
          </div>
          <div class="item_image">
            <img :src="photo.imageURL" :alt="photo.title" />
          </div>
          <div class="card-body">
            <p class="card-text">{{ photo.description }}</p>
          </div>
          <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </article>
      </div>
    </div>
    <div class="mt-5" v-else>
      <h3>no hay imagenes</h3>
    </div>
  </main>
</template>
<script lang="ts" src="./code.ts"></script>
