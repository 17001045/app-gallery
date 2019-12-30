import { Component, Vue } from "vue-property-decorator";
import { IPhoto } from "@/interfaces/photo.interface";
import { photoModule } from "@/store/getModules";

@Component
export default class PhotoListComponent extends Vue {
  get photos(): IPhoto[] {
    return photoModule.photos;
  }

  async mounted() {
    await photoModule.getPhotosAction();
  }
}
