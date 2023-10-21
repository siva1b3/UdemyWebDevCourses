const { app } = require("../app");
const axios = require("axios");
const fs = require("fs");
const path = require("path");

// The error in your code was that you were consistently
// receiving the same random number for the image filename in every request.
// erveytime we reload the page we will get the same image filename
// the new image will replace the old one

// The issue of getting the same random number in every reload
// occurred because the imageFileName generation code was initially
// located outside of the request handler.
// When the server started with nodemon,
// it generated a random number at that point,
// and subsequent requests to "/downloadImage" reused the same number.

// To address this, the imageFileName generation code has been moved
// inside the request handler. This modification ensures that a
// new random number is generated for each request,
// resulting in unique filenames for each image download.

const parentDirectory = path.join(__dirname, "..");
const destinationFolder = path.join(parentDirectory, "images");
const imageFileName = `randomImage_${Math.floor(Math.random() * 100) + 20}.jpg`;
// Change this to the desired filename

// simply speaking only the code inside the app.get will run
// after once the server stared
// out side code will run only once while the server starting and that's all

app.get("/downloadImageWithError", (req, res) => {
  const imageUrl =
    "https://source.unsplash.com/random/300x200/?wallpaper,landscape";

  // Make a GET request to fetch the image
  axios({
    method: "get",
    url: imageUrl,
    responseType: "stream", // Ensure the response is treated as a stream
  })
    .then(function (response) {
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
