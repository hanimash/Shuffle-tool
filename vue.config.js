if (process.env.NODE_ENV === "production") {
  module.exports = {
    // options...
    publicPath: "",
    outputDir: "./Production/",
    indexPath: "index.html",
  };
} else {
  module.exports = {};
}
