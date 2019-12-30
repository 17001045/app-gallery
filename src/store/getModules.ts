import { getModule } from "vuex-module-decorators";
import store from "@/store";
import { PhotoModule } from "./modules/photo.module";

export const photoModule: PhotoModule = getModule(PhotoModule, store);
