<template>
  <form @submit.prevent="handleSubmit()" class="container mt-5 py-4 card col-12 col-md-6">
    <div class="form-group mb-4">
      <label for="title" class="text-capitalize">title</label>
      <input
        type="text"
        name="title"
        class="form-control text-capitalize"
        id="title"
        placeholder="title"
        required
        v-model="formValues.title"
      />
    </div>
    <div class="form-group mb-4">
      <label for="description" class="text-capitalize">Description</label>
      <textarea
        v-model="formValues.description"
        class="form-control"
        placeholder="Description"
        id="description"
        rows="3"
      ></textarea>
    </div>
    <div class="form-group mb-4">
      <label for="photoUpload" class="text-capitalize">photo Upload</label>
      <input
        type="file"
        class="form-control"
        id="photoUpload"
        name="image"
        accept="image/png, image/jpeg"
        multiple="false"
        @change="handleFileInput($event)"
      />
    </div>
    <div class="card-body">
      <h5>Tags:</h5>
      <div class="row">
        <div class="form-inline my-2 my-lg-0 col-12 col-sm-6">
          <input v-model="tag" class="form-control mr-sm-2 col-12" type="text" placeholder="tag" />
          <button
            @click="handleTags()"
            class="btn btn-warning my-2 d-block btn-sm col-12"
            type="button"
          >add</button>
        </div>
        <div class="col-12 col-sm-6">
          <div v-if="formValues.tags.length > 0">
            <button
              @click="deleteTag(tag)"
              v-for="(tag,index) in formValues.tags"
              :key="index"
              class="btn btn-warning btn-sm"
              type="button"
            >{{tag}}</button>
          </div>
          <p v-else class="font-weight-bold text-capitalize">no hay tags agregados</p>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <button type="submit" class="btn btn-primary">upload</button>
    </div>
  </form>
</template>
<script lang="ts" src="./code.ts"></script>
