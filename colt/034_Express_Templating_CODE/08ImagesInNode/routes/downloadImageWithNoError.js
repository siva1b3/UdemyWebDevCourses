const { app } = require("../app");
const axios = require("axios");
const fs = require("fs");
const path = require("path");

// see the code downloadImageButSmallError.js
// to understand what the error is and how it was handled
// in this code example

// simply speaking only the code inside the app.get will run
// after once the server stared
// out side code will run only once while the server starting and that's all

const parentDirectory = path.join(__dirname, "..");
const destinationFolder = path.join(parentDirectory, "images");

app.get("/downloadImage", (req, res) => {
  const imageUrl =
    "https://source.unsplash.com/random/300x200/?wallpaper,landscape";

  // Make a GET request to fetch the image
  axios({
    method: "get",
    url: imageUrl,
    responseType: "stream", // Ensure the response is treated as a stream
  })
    .then(function (response) {
      const imageFileName = `randomImage_${
        Math.floor(Math.random() * 100) + 20
      }.jpg`;
      // Change this to the desired filename

      // Create the destination path for the image
      const imagePath = path.join(destinationFolder, imageFileName);

      // Pipe the image data to a file stream to save it
      const imageStream = response.data.pipe(fs.createWriteStream(imagePath));

      imageStream.on("finish", () => {
        console.log("Image downloaded and saved to:", imagePath);
        // Send a response indicating success
        res.send("Image downloaded and saved.");
      });

      imageStream.on("error", (error) => {
        console.error("Error saving the image:", error);
        // Send an error response
        res.status(500).send("Failed to save the image.");
      });
    })
    .catch(function (error) {
      console.error("Failed to fetch the image:", error);
      // Send an error response
      res.status(500).send("Failed to fetch the image.");
    });
});
