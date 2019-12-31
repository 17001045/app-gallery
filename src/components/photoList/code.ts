import { Component, Vue } from "vue-property-decorator";
import { IPhoto } from "@/interfaces/photo.interface";
import { photoModule } from "@/store/getModules";
import { PhotoUploadService } from "@/services/photoUpload.service";
import { AlertService, EIcon } from "@/services/sweetalert2.service";

@Component
export default class PhotoListComponent extends Vue {
  alertService: AlertService = new AlertService();
  photoUploadService: PhotoUploadService = new PhotoUploadService();
  photoM = photoModule;
  photoActive: IPhoto = {
    description: "",
    imageURL: "",
    public_id: "",
    title: "",
    _id: "",
    tags: []
  };
  activeItem: number = 0;
  infoActive: boolean = false;
  zoom: number = 0;
  styleZoom: number = 1;
  rangeZoom: boolean = false;
  get photos(): IPhoto[] {
    return this.photoM.photos;
  }

  async mounted() {
    await this.photoM.getPhotosAction();
    this.setPhotoActive();
  }

  handleInfoActive(): string {
    return this.infoActive ? "photo_item_info_active" : "";
  }

  setPhotoActive() {
    this.photoActive = this.photos[this.activeItem];
  }

  handleNext(): void {
    if (this.activeItem == this.photos.length - 1) {
      this.activeItem = 0;
      this.setPhotoActive();
    } else {
      this.activeItem = this.activeItem + 1;
      this.setPhotoActive();
    }
  }
  handleBack(): void {
    if (this.activeItem < 1) {
      this.activeItem = this.photos.length - 1;
      this.setPhotoActive();
    } else {
      this.activeItem = this.activeItem - 1;
      this.setPhotoActive();
    }
  }

  handleZoom(): string {
    if (this.zoom > 99) {
      return "scale(2)";
    }
    if (this.zoom < 11) {
      return "scale(1)";
    }
    let zoomToStr: string = String(this.zoom);
    let zoom: string = `scale(1.${zoomToStr[0]})`;

    return zoom;
  }

  async handleDelete(id: string) {
    try {
      const c = await this.alertService.confim({
        title: "Delete?",
        icon: EIcon.WARNING,
        cancelButtonText: "cancel",
        confirmButtonText: "ok"
      });
      if (c.value) {
        const deletePhoto = await this.photoUploadService.delete(id);
        if (deletePhoto) {
          await this.photoM.getPhotosAction();
        }
      }
    } catch (error) {
      await this.alertService.alert({
        icon: EIcon.ERROR,
        title: "Error...",
        text: `${error}`
      });
    }
  }
}
