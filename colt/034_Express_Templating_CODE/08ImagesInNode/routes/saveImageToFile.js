const axios = require("axios");
const fs = require("fs");
const path = require("path");

const imageUrl =
  "https://source.unsplash.com/random/300x200/?wallpaper,landscape";
const parentDirectory = path.join(__dirname, "..");
const destinationFolder = path.join(parentDirectory, "images");
const imageFileName = `randomImage_${Math.floor(Math.random() * 100) + 20}.jpg`; // Change this to the desired filename

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
    });

    imageStream.on("error", (error) => {
      console.error("Error saving the image:", error);
    });
  })
  .catch(function (error) {
    console.error("Failed to fetch the image:", error);
  });
