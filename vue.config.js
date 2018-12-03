const config = {
  css: {
    loaderOptions: {
      sass: {
        data: `
              @import "@/assets/variables.scss";
            `
      }
    }
  }
};

module.exports = config;
