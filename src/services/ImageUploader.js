import axios from "axios";
class ImageUploader {
  uploadImage(image) {
    const path = "https://api.cloudinary.com/v1_1/rohit872cloud/image/upload";
    return axios.post(path, image);
  }
}
export default new ImageUploader();
