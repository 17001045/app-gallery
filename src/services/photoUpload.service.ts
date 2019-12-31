import axios from "axios";
import envURL from "../config/http.url";
import { IPhotoRes, IPhotosRes } from "@/interfaces/photo.interface";

export class PhotoUploadService {
  async upload(photo: FormData): Promise<IPhotoRes> {
    return await axios.post(envURL + "/upload", photo);
  }
  async findAll(): Promise<IPhotosRes> {
    return await axios.get(envURL + "/photos");
  }
  async delete(id: string): Promise<IPhotosRes> {
    return await axios.get(envURL + "/delete/" + id);
  }
}
