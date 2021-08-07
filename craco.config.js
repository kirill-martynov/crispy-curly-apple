const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@Core": path.resolve(__dirname, "./src/core"),
      // "@redux": path.resolve(__dirname, "src/core/redux"),

      // "@screens": path.resolve(__dirname, "src/screens"),

      "@Home": path.resolve(__dirname, "src/screens/Home"),
      "@Courses": path.resolve(__dirname, "src/screens/Courses"),
      "@Editor": path.resolve(__dirname, "src/screens/Editor"),
      "@Profile": path.resolve(__dirname, "src/screens/Profile"),
    },
  },
};
