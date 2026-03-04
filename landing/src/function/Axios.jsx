import axios from 'axios';

export const send = async (datasend, url) => {
  try {
    const response = await axios.post(url, datasend,{
        headers: {
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
            "Content-Type": "application/json" // optionnel mais recommandé
        }
    });
    console.log("Réponse de l'API :", response.data);
    return true;      // succès
  } catch (error) {
    console.error("Erreur :", error.response ? error.response.data : error.message);
    return false;     // échec
  }
};

export const _login = async (datasend, url) => {
  try {
    const response = await axios.post(url, datasend,{
        headers: {
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
            "Content-Type": "application/json" // optionnel mais recommandé
        }
    });
    return response;      // succès
  } catch (error) {
    console.error("Erreur :", error.response ? error.response.data : error.message);
    return false;     // échec
  }
};
export const update = async (datasend, url) => {
  try {
    const response = await axios.put(url, datasend,{
        headers: {
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
            "Content-Type": "application/json" // optionnel mais recommandé
        }
    });
    console.log("Réponse de l'API :", response.data);
    return true;      // succès
  } catch (error) {
    console.error("Erreur :", error.response ? error.response.data : error.message);
    return false;     // échec
  }
};
export const updateWithId = async (url) => {
  try {
    const response = await axios.put(url, null, {
    headers: {
        "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
        "Content-Type": "application/json"
    }
  });
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
        "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
        "Content-Type": "application/json"
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
        "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
        "Content-Type": "application/json"
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
    const response = await axios.delete(url ,null, {
    headers: {
        "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
        "Content-Type": "application/json"
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
        const response = await axios.get(url, {
        headers: {
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
            "Content-Type": "application/json"
        }
      });
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
                { responseType: "blob", headers: {
                  "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
                  "Content-Type": "application/json" // optionnel pour GET
              } }// ⚠️ très important
                
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
    const response = await axios.post(url, datasend,{
        headers: {
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
            "Content-Type": "application/json" // optionnel mais recommandé
        }
    });
    return response.data;      // succès
  } catch (error) {
    console.error("Erreur :", error.response ? error.response.data : error.message);
    return false;     // échec
  }
};