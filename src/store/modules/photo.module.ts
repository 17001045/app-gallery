import { PhotoUploadService } from "@/services/photoUpload.service";
import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import { IPhoto, IPhotosRes } from "@/interfaces/photo.interface";
import { AlertService, EIcon } from "@/services/sweetalert2.service";

@Module({ namespaced: true, name: "photoModule" })
export class PhotoModule extends VuexModule {
  alertService: AlertService = new AlertService();
  photoUploadService: PhotoUploadService = new PhotoUploadService();
  photos: IPhoto[] = [];
  photoCarousel: boolean = false;

  @Mutation
  private getPhotosMutation(photos: IPhotosRes) {
    this.photos = photos.data;
  }
  @Mutation
  private photoCarouselMutation(b: boolean) {
    this.photoCarousel = b;
  }

  @Action({ commit: "getPhotosMutation" })
  async getPhotosAction(): Promise<IPhotosRes | any> {
    try {
      return await this.photoUploadService.findAll();
    } catch (error) {
      return await this.alertService.alert({
        icon: EIcon.ERROR,
        title: "Error...",
        text: `${error}`
      });
    }
  }

  @Action({ commit: "photoCarouselMutation" })
  photoCarouselAction(): boolean {
    return !this.photoCarousel;
  }
}
