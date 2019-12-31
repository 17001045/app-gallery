import { Component, Vue } from "vue-property-decorator";
import { PhotoUploadService } from "@/services/photoUpload.service";
import { IPhotoForm } from "@/interfaces/photo.interface";
import { AlertService, EIcon } from "@/services/sweetalert2.service";

const _photoUploadService: PhotoUploadService = new PhotoUploadService();
@Component
export default class PhotoUploadComponent extends Vue {
  alertService: AlertService = new AlertService();
  formValues: IPhotoForm = {
    description: "",
    image: null,
    title: "",
    tags: []
  };
  tag: string = "";
  mounted() {}
  handleFileInput(e: Event): void {
    const { files } = <HTMLInputElement>e.target;
    this.formValues.image = files![0];
  }

  handleTags(): void {
    if (this.tag.length > 1 && !this.formValues.tags.includes(this.tag)) {
      this.formValues.tags.push(this.tag);
      this.tag = "";
    }
  }

  deleteTag(tag: string): void {
    this.formValues.tags = this.formValues.tags.filter(t => t !== tag);
  }

  async handleSubmit() {
    const formData: FormData = new FormData();

    formData.append("title", this.formValues.title);
    formData.append("description", this.formValues.description);
    formData.append("image", this.formValues.image!);

    this.formValues.tags.forEach(t => {
      formData.append("tags", t);
    });

    try {
      const upload = await _photoUploadService.upload(formData);
      this.$router.push("/");
    } catch (error) {
      await this.alertService.alert({
        icon: EIcon.ERROR,
        title: "Error...",
        text: `${error}`
      });
    }
  }
}
