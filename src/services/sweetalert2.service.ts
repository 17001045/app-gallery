import Swal from "sweetalert2";

interface IAlert {
  title: string;
  text?: string;
  icon: EIcon;
}
interface IConfirm {
  title: string;
  text?: string;
  confirmButtonText: string;
  cancelButtonText: string;
  icon: EIcon;
}

export enum EIcon {
  ERROR = "error",
  SUCCESS = "success",
  WARNING = "warning",
  INFO = "info",
  QUESTION = "question"
}

export class AlertService {
  alert({ text, title, icon }: IAlert) {
    return Swal.fire(title, text, icon);
  }

  confim({ title, text, cancelButtonText, confirmButtonText, icon }: IConfirm) {
    return Swal.fire({
      title,
      text,
      icon: icon,
      showCancelButton: true,
      confirmButtonText,
      cancelButtonText
    });
  }
}
