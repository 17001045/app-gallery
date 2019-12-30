import { Component, Vue } from "vue-property-decorator";
import { PhotoUploadService } from "@/services/photoUpload.service";
import { IPhotoForm } from "@/interfaces/photo.interface";

const _photoUploadService: PhotoUploadService = new PhotoUploadService();
@Component
export default class PhotoUploadComponent extends Vue {
  formValues: IPhotoForm = {
    description: "",
    image: null,
    title: ""
  };

  mounted() {}
  handleFileInput(e: Event): void {
    const { files } = <HTMLInputElement>e.target;
    this.formValues.image = files![0];
  }
  async handleSubmit() {
    const formData: FormData = new FormData();

    formData.append("title", this.formValues["title"]);
    formData.append("description", this.formValues["description"]);
    formData.append("image", this.formValues["image"]!);

    try {
      const upload = await _photoUploadService.upload(formData);
      this.$router.push("/");
    } catch (error) {
      throw new Error(error);
    }
  }
}
