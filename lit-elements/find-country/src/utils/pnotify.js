import PNotify from "../../node_modules/pnotify/dist/es/PNotify.js";
import PNotifyStyleMaterial from "../../node_modules/pnotify/dist/es/PNotifyStyleMaterial.js";

PNotify.defaults.styling = "material";
PNotify.defaults.icons = "material";

const pWarning = message =>
  // eslint-disable-next-line implicit-arrow-linebreak
  PNotify.error({
    text: message
  });

const pNotice = message =>
  // eslint-disable-next-line implicit-arrow-linebreak
  PNotify.notice({
    text: message
  });

export { pWarning, pNotice };
