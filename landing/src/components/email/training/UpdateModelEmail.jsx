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

import { uploadCompressedImage } from "../../../function/uplaodimage";
import {  url_recrutement, url_sendemail } from "../../../data/data";
import { send, update } from "../../../function/Axios";
import Delimiter from '@editorjs/delimiter';
import { data } from "react-router-dom";
export default function UpdateModelEmail({close,value }) {
    const editorRef = useRef(null);
    const [data,setData]=useState(value);
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
        const value = await update({ ...data, content: JSON.stringify(data.content) }, url_sendemail + "model_with_parameteres");
          if (value == true) {
              toast.success("Données modifiées avec succès !");
              window.location.replace("/training-modelemail");
              // close(false);
          } else {
              toast.error("Problème serveur, réessayez plus tard !");
        }
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
        data: data.content
          ? JSON.parse(data.content)
          : {
              time: Date.now(),
              blocks: [],
              version: "2.28.2"
        },
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
                    url: url_recrutement + uploadedFileName, // chaîne de caractères, pas objet
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
    
    <div class="background_transparent_popup p-10 ">
        <div className="max-w-10xl mx-auto m-10 bg-white p-10 h-screen  overflow-y-auto">
            {/* filtre */}
            <div class="p-4 mb-2 bg-white border-b border-gray-200 sticky top-0 z-50 pink ">
                <div class="flex items-center justify-between gap-2">
                    <h2 class="text-xl font-semibold text-gray-800">Construire votre model de {data.name}
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
                
                <div className="py-2" dangerouslySetInnerHTML={{ __html: data.parameter_hint }} />

            </div>
           
            <div  className="max-w-18xl border-1 border-gray-200  bg-white py-10 text-left break-words" >
                <div  id="editorjs" className="text-left pl-0"  />
            </div>
        </div>
    </div>
        
  );
}
