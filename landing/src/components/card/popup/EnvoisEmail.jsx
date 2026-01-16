import { useState,useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "@editorjs/header";
import Paragraph from "@editorjs/paragraph";
import List from "@editorjs/list";
import ImageTool from "@editorjs/image";
import Quote from "@editorjs/quote";
import CodeTool from "@editorjs/code";
import { Sidebar } from "../sidebar";
import { uploadCompressedImage } from "../../function/uplaodimage";
import { url_recrutement_image, url_sendemail } from "../../data/data";
import { send, update } from "../../function/Axios";
export default function UpdateModelEmail({close,value}) {
    console.log(value?.content);
   if (typeof value?.content === "string") {
  value.content = JSON.parse(value.content);
}

  const [data, setData] = useState(value);
  
  const editorRef = useRef(null);
  const handleUpload = async (file) => {
        try {
            const fileName = await uploadCompressedImage(file);
            console.log("Fichier envoyé :", fileName);
            return fileName;
        } catch (err) {
            console.error(err.message);
        }
  };
  const save = async()=>{
    const stringContent = JSON.stringify(data.content);
    console.log(stringContent);
    const value = await update({ ...data, content: stringContent }, url_sendemail + "modelemail");
    // console.log(value)
    if (value == true) {
        toast.success("Données insérées avec succès !");
        window.location.replace("/email");
        // close(false);
    } else {
        toast.error("Problème serveur, réessayez plus tard !");
    }
  }
  const handlerVariable = (name, value,setFunction) => {
        setFunction((previous) => ({
            ...previous,
            [name]: value,
        }));
  };

  useEffect(() => {
     const editor = new EditorJS({
        holder: "editorjs",
        placeholder: "Titre de l'email",
        data: data.content,
        tools: {
          header: Header,
          paragraph: {
            class: Paragraph,
            inlineToolbar: ['bold', 'italic', 'link'], // ici tu ajoutes bold
          },
          list: List,
          quote: Quote,
          code: CodeTool,
          image: {
            class: ImageTool,
            config: {
            uploader: {
              async uploadByFile(file) {
                // handleUpload retourne le nom du fichier ou son chemin sur le serveur
                const uploadedFileName = await handleUpload(file);
                if (!uploadedFileName) {
                  return { success: 0 }; // échec de l'upload
                }
                return {
                  success: 1,
                  file: {
                    url: url_recrutement_image + uploadedFileName, // chaîne de caractères, pas objet
                  },
                };
              },
            },
            },
          },
        },
        async onChange() {
          const savedData = await editor.save();
          handlerVariable("content", savedData,setData);
        },
      });
    editorRef.current = editor;
     console.log(editor.data);
    return () => {
      if (editorRef.current) {
        editorRef.current.isReady
          .then(() => {
            editorRef.current.destroy();
            editorRef.current = null;
          })
          .catch(() => {});
      }
    };
   
  }, []);
  return (
     <div class="flex h-screen ">
      <Sidebar/>
       <main class="flex-1 ">    
                <div class="bg-[#e5ddd5] bg-[url('/background1.jpg')] bg-repeat bg-scroll min-h-screen w-full overflow-y-auto p-6">
                    <div className=" max-w-7xl mx-auto bg-white p-10 ">
                        {/* filtre */}
                        <div class="p-4 mb-2 border-b border-gray-200 sticky top-0 z-50 pink ">
                            <div class="flex items-center justify-between">
                                <h2 class="text-xl font-semibold text-gray-800">Voici le modèle que vous avez choisi et qui sera envoyé aux candidats
                                    {/* <p className="text-xs text-gray-400">{`page ${numpage}/${Math.ceil(nbrligne / nbrSize)}`}</p> */}
                                </h2>
                                <div class="flex items-center space-x-3">
                                    <div className="flex space-x-2">
                                        <button className="btn-neutre-gray" onClick={()=>close(false)} title="Précédent">
                                          Precedent
                                        </button>
                                        <button className="btn-neutre-gray" onClick={()=>save()} title="Suivant">
                                            Envoyée
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="my-2">
                              <input 
                                  type="text" 
                                  placeholder={value.name}
                                  className="input_singup"
                                  onChange={(event) => handlerVariable("name", event.target.value,setData)}
                              />
                        </div> */}
                        <div  className="max-w-18xl border-1 border-gray-200  bg-white py-10 text-left break-words" >
                            <div  id="editorjs" className="text-left pl-0"  />
                        </div>
                    </div>
                </div>
        </main>    
    </div>
  );
}
