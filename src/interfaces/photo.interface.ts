export interface IPhoto {
  _id?: string;
  title: string;
  description: string;
  imageURL: string;
  public_id: string;
}

export interface IPhotoForm {
  title: string;
  description: string;
  image: File | null;
}

export interface IPhotoRes {
  data: IPhoto;
}

export interface IPhotosRes {
  data: IPhoto[];
}
