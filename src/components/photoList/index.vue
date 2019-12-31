<template>
  <main class="bg-primary photo_container">
    <button
      @click="photoM.photoCarouselAction()"
      type="button"
      class="btn btn-warning btn_photo_close"
    >&times;</button>

    <div v-if="photos.length > 0">
      <article class="photo_item">
        <div v-if="infoActive" class="container photo_item_info">
          <button class="btn btn-warning close" @click="infoActive = false" type="button">&times;</button>
          <h2>{{ photoActive.title }}</h2>
          <p>{{ photoActive.description }}</p>
          <p>
            <em>{{ photoActive.tags.join() }}</em>
          </p>
        </div>
        <img
          :style="{transform:handleZoom() }"
          :src="photoActive.imageURL"
          :alt="photoActive.title"
        />
      </article>
      <button
        @click="handleBack()"
        type="button"
        class="btn btn-warning rounded-circle btn_photo_carousel back"
      >&#9668;</button>
      <button
        @click="handleNext()"
        type="button"
        class="btn btn-warning rounded-circle btn_photo_carousel next"
      >&#9658;</button>
      <div v-if="rangeZoom" class="bg-warning py-2 px-4 zoomRange">
        <input @change="handleZoom()" v-model="zoom" min="10" type="range" class="custom-range" />
      </div>
      <div class="photo_tools">
        <button
          @click="rangeZoom = !rangeZoom"
          type="button"
          class="btn btn-warning btn_photo_info"
        >&#128269;</button>
        <button
          @click="handleDelete(photoActive._id)"
          type="button"
          class="btn btn-warning btn_photo_info"
        >&#9003;</button>
        <button
          v-if="!infoActive"
          @click="infoActive = true"
          type="button"
          class="btn btn-warning btn_photo_info"
        >&#9776;</button>
      </div>
    </div>
    <div class="mt-5" v-else>
      <h3>no hay imagenes</h3>
    </div>
  </main>
</template>
<script lang="ts" src="./code.ts"></script>
