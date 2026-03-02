import axios from 'axios';

export const send = async (datasend, url) => {
  try {
    const response = await axios.post(url, datasend);
    console.log("Réponse de l'API :", response.data);
    return true;      // succès
  } catch (error) {
    console.error("Erreur :", error.response ? error.response.data : error.message);
    return false;     // échec
  }
};

export const _login = async (datasend, url) => {
  try {
    const response = await axios.post(url, datasend);
    return response;      // succès
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
export const updateWithId = async (url) => {
  try {
    const response = await axios.put(url);
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
export const deleteWithId = async ( url) => {
  try {
    const response = await axios.delete(url, {
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
export const deleteId = async ( url) => {
  try {
    const response = await axios.delete(url);
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

export const exportPdfExcel = async ( url) =>{
 try {
        const response = await axios.get(
                url,
                { responseType: "blob" } // ⚠️ très important
            );
         const url_temps = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url_temps;
            link.setAttribute(
            "download",
            `Recruitment_${new Date().toISOString().split("T")[0]}.xlsx`
            );
            document.body.appendChild(link);
            link.click();
            link.remove();
        return true;
    } catch (error) {
        console.error("Erreur :", error.response ? error.response.data : error.message);
        throw error; // relance l'erreur pour que l'appelant puisse la gérer
    }
}

export const getDataWithObjectParametre = async (datasend, url) => {
  try {
    const response = await axios.post(url, datasend);
    return response.data;      // succès
  } catch (error) {
    console.error("Erreur :", error.response ? error.response.data : error.message);
    return false;     // échec
  }
};