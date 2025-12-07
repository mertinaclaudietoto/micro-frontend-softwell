import axios from 'axios';

export const send = async (datasend, url) => {
  try {
    console.log(url,datasend)
    const response = await axios.post(url, datasend);
    console.log("Réponse de l'API :", response.data);
    return true;      // succès
  } catch (error) {
    console.error("Erreur :", error.response ? error.response.data : error.message);
    return false;     // échec
  }
};
export const update = async (datasend, url) => {
  try {
    const response = await axios.put(url, datasend);
    console.log("Réponse de l'API :", response.data);
    return true;      // succès
  } catch (error) {
    console.error("Erreur :", error.response ? error.response.data : error.message);
    return false;     // échec
  }
};

export const deletev = async (datasend, url) => {
  try {
    const response = await axios.delete(url, {
      data: datasend,              // <-- mettre les données ici
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log("Réponse de l'API :", response.data);
    return true;      // succès
  } catch (error) {
    console.error("Erreur :", error.response ? error.response.data : error.message);
    return false;     // échec
  }
};

export const getData = async (url) =>{
    try {
        const response = await axios.get(url);
        // console.log("Réponse de l'API :", response.data);
        return response.data;
    } catch (error) {
        console.error("Erreur :", error.response ? error.response.data : error.message);
        throw error; // relance l'erreur pour que l'appelant puisse la gérer
    }
}