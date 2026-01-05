import axios from "axios";
import { url_recrutement } from "../data/data";

/**
 * Vérifie si le fichier est une image valide
 */
function isValidImage(file) {
  const allowedTypes = ["image/png", "image/jpeg", "image/jpg", "image/webp"];
  return allowedTypes.includes(file.type);
}

/**
 * Compresse une image avec Canvas
 */
function compressImage(file, quality = 0.7, maxWidth = 1024) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();

    reader.onload = e => (img.src = e.target.result);
    reader.onerror = reject;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const scale = Math.min(maxWidth / img.width, 1);

      canvas.width = img.width * scale;
      canvas.height = img.height * scale;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      canvas.toBlob(
        blob => {
          if (!blob) return reject("Compression échouée");

          const compressedFile = new File(
            [blob],
            file.name,
            { type: blob.type }
          );
          resolve(compressedFile);
        },
        file.type,
        quality
      );
    };

    reader.readAsDataURL(file);
  });
}

/**
 * Upload image compressée via Axios
 */
export async function uploadCompressedImage(file) {
  if (!file) throw new Error("Aucun fichier fourni");

  // 1️⃣ Vérification du type
  if (!isValidImage(file)) {
    throw new Error("Le fichier doit être une image (png, jpg, jpeg, webp)");
  }

  // 2️⃣ Compression
  const compressedFile = await compressImage(file);

  // 3️⃣ Envoi au backend
  const formData = new FormData();
  formData.append("file", compressedFile);

  const response = await axios.post(url_recrutement+"candidate/image",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
  );

  // 4️⃣ Retourne le nom du fichier (string)
  return response.data; // ex: "photo_12345.jpg"
}
