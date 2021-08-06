const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@icons": path.resolve(__dirname, "src/assets/icons"),
    },
  },
};
