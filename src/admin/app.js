// @ts-ignore
import logo from "./extensions/parking-time-logo.png";

const config = {
  locales: [],
  auth: {
    logo,
  },
  head: {
    logo,
  },
  menu: {
    logo,
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
