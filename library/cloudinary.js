const cloudinary = require("cloudinary").v2;

// The three environment variables are required to be set in the .env.local file and should be a string
cloudinary.config({
  cloud_name: String(process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME),
  api_key: String(process.env.CLOUDINARY_API_KEY),
  api_secret: String(process.env.CLOUDINARY_API_SECRET),
});

module.exports = cloudinary;
