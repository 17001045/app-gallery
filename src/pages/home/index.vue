<template>
  <main class="container pt-1 items_container">
    <div class="row">
      <div class="col-12 col-md-6 mt-4" v-for="(categorie,index) in categories" :key="index">
        <article class="card col-12 item pb-3">
          <div class="card-body">
            <h5 class="card-title">{{ categorie.name }}</h5>
          </div>
          <div class="item_image">
            <img :src="categorie.img" :alt="categorie.name" />
          </div>
        </article>
      </div>
    </div>
  </main>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { ICategorie } from "@/interfaces/categories.interface";
@Component
export default class HomePage extends Vue {
  categories: ICategorie[] = [
    {
      name: "photos",
      img:
        "https://res.cloudinary.com/jvargas13/image/upload/v1577672677/casero/photos/dbhvq0co4domnotts45b.jpg"
    }
  ];
}
</script>
