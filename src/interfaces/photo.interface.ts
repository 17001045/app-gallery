export interface IPhoto {
  _id?: string;
  title: string;
  description: string;
  imageURL: string;
  public_id: string;
  tags: string[];
}

export interface IPhotoForm {
  title: string;
  description: string;
  image: File | null;
  tags: string[];
}

export interface IPhotoRes {
  data: IPhoto;
}

export interface IPhotosRes {
  data: IPhoto[];
}
