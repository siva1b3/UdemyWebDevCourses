const { app } = require("../app");
const axios = require("axios");

app.get("/getImage", (req, res) => {
  const imageUrl =
    "https://source.unsplash.com/random/300x200/?wallpaper,landscape";

  axios({
    method: "get",
    url: imageUrl,
    responseType: "stream", // Ensure the response is treated as a stream
  })
    .then(function (response) {
      // Set the appropriate Content-Type header for an image
      res.set("Content-Type", response.headers["content-type"]);

      // Stream the image data as the response
      response.data.pipe(res);
    })
    .catch(function (error) {
      console.error("Failed to fetch the image:", error);
      res.status(500).send("Failed to fetch the image.");
    });
});
