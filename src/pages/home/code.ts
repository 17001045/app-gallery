import { Component, Vue } from "vue-property-decorator";
import { ICategorie } from "@/interfaces/categories.interface";
import { photoModule } from "@/store/getModules";

@Component({
  components: {
    "photo-carousel": require("@/components/photoList").default
  }
})
export default class HomePage extends Vue {
  photoM = photoModule;
  get photoCarousel(): boolean {
    return this.photoM.photoCarousel;
  }
  categories: ICategorie[] = [
    {
      name: "photos",
      img:
        "https://res.cloudinary.com/jvargas13/image/upload/v1577672677/casero/photos/dbhvq0co4domnotts45b.jpg"
    }
  ];
}
