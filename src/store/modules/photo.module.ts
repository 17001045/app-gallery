import { PhotoUploadService } from "@/services/photoUpload.service";
import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import { IPhoto, IPhotosRes } from "@/interfaces/photo.interface";

const photoUploadService: PhotoUploadService = new PhotoUploadService();

@Module({ namespaced: true, name: "photoModule" })
export class PhotoModule extends VuexModule {
  photos: IPhoto[] = [];

  @Mutation
  private getPhotosMutation(photos: IPhotosRes) {
    this.photos = photos.data;
  }
  @Action({ commit: "getPhotosMutation" })
  async getPhotosAction(): Promise<IPhotosRes> {
    try {
      return await photoUploadService.findAll();
    } catch (error) {
      throw new Error(error);
    }
  }
}
