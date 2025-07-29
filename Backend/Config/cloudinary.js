import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

// Function to upload file to Cloudinary
const uploadOnCloudinary = async (filePath) => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  try {
    const result = await cloudinary.uploader.upload(filePath, {
      resource_type: "auto",
    });

    // Delete local file after upload
    fs.unlinkSync(filePath);
    return result.secure_url;
  } catch (error) {
    // Clean up file if upload fails
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    // Instead of returning res in a utility function (which doesn't have access to res), throw an error
    console.error("Cloudinary Upload Error:", error);
    throw new Error("Cloudinary Upload Failed");
  }
};

export default uploadOnCloudinary;