<template>
  <form
    @submit.prevent="handleSubmit()"
    class="container mt-5 py-4 card col-12 col-md-6"
  >
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
    <div class="d-flex justify-content-center">
      <button type="submit" class="text-capitalize btn btn-primary">
        upload
      </button>
    </div>
  </form>
</template>
<script lang="ts" src="./code.ts"></script>
