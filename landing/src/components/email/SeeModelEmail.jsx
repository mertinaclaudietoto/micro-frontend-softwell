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
import Delimiter from '@editorjs/delimiter';
export default function SeeModelEmail({close,setData,data, changeValueAfterUpdate }) {
 

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
        changeValueAfterUpdate();
        close(false);
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
    console.log(editor);
    editorRef.current = editor;
   return () => {
      const destroyEditor = async () => {
        if (editorRef.current) {
          try {
            await editorRef.current.isReady;
            await editorRef.current.destroy();
            // editorRef.current = null;
          } catch (error) {
            console.error("Failed to destroy EditorJS:", error);
          }
        }
      };
      destroyEditor();
    };
  }, []);
  return (
    <div class="background_transparent_popup p-10">
        <div className="max-w-7xl mx-auto m-10 bg-white p-10 h-screen  overflow-y-auto">
            {/* filtre */}
            <div class="p-4 mb-2 border-b border-gray-200 sticky top-0 z-50 pink ">
                <div class="flex items-center justify-between">
                    <h2 class="text-xl font-semibold text-gray-800">Construire votre modèle d'e-mail
                        {/* <p className="text-xs text-gray-400">{`page ${numpage}/${Math.ceil(nbrligne / nbrSize)}`}</p> */}
                    </h2>
                    <div class="flex items-center space-x-3">
                        <div className="flex space-x-2">
                            <button className="btn-neutre-gray" onClick={()=>close(false)} title="Précédent">
                                Annuler
                            </button>
                            <button className="btn-neutre-gray" onClick={()=>save()} title="Suivant">
                                Enregistrer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
           
            <div  className="max-w-18xl border-1 border-gray-200  bg-white py-10 text-left break-words" >
                <div  id="editorjs" className="text-left pl-0"  />
            </div>
        </div>
    </div>
        
  );
}
