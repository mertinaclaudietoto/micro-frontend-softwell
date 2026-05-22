
const executeTemplate = (template, context) => {
    return new Function(...Object.keys(context), `return \`${template}\`;`)(...Object.values(context));
};

export const  generateEditorJsFromSessions = (sessions,nomformation)=> {
    const nomformation1 = "Java Avancé";
    const str = '<b>Horaire matin</b> : ${nomformation1}';
    const result = executeTemplate(str, { nomformation1 });
    const blocks = [];
    // Intro
    blocks.push(
        {
        type: "paragraph",
        data: { text: "Bonjour," }
        },
        {
        type: "paragraph",
            data: {
            text: "Vous êtes inscrit(e) à <b>une session de formation de  "+nomformation+" </b>.<br>Voici les détails :"
        }
        },
        {
        type: "paragraph",
        data: {}
        }
    );
  // Sessions
    sessions.forEach((session, index) => {
    const items = [];
    // Horaire matin
    if (session.heurstartmoring && session.heurendmoring) {
        items.push(`⏰ <b>Horaire matin</b> : ${session.heurstartmoring} à ${session.heurendmoring}`);
    }
    // Horaire après-midi (optionnel)
    if (session.heurstartaftern && session.heurendaftern) {
        items.push(`⏰ <b>Horaire après-midi</b> : ${session.heurstartaftern} à ${session.heurendaftern}`);
    }
    blocks.push(
        {
        type: "header",
        data: {
    
            text: `🔹 Session ${index}`,
            level: 3
        }
        },
        {
            type: "paragraph",
            data: {
                text: `📍 <b>Salle</b> : ${session.nameplace}<br>📅 <b>Date</b> : ${formatDate(session.date)}`
            },
            readOnly: true
        },
        {
        type: "list",
        data: {
            style: "unordered",
            items: items
        }
        }
        ,
        {
        type: "paragraph",
        data: {}
        }
    );
    });
  // Footer
    blocks.push(
        {
        type: "paragraph",
        data: {
            text: "Nous vous remercions de votre participation et restons à votre disposition pour toute information complémentaire."
        }
        },
        {
        type: "paragraph",
        data: {
            text: "Cordialement,<br>L’équipe de formation"
        }
        }
    );
    return {
        time: Date.now(),
        blocks,
        version: "2.28.2"
    };
}
// Helper date formatter
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}
export const getListSessionDayParticipant= (listParticipant ,idparticipant)=>{
    listParticipant.filter(value => value.idparticipant == idparticipant)
}

const replaceFromMapping = (block, mapping) => {
    if (typeof block === "string") {
      for (const key in mapping) {
          block= block.replace("${"+key+"}", mapping[key]);
      }
      return block;
    }
    else if (!block || !block.content){
        return block; 
    }
    let newBlock = { ...block }; // copie de l'objet
    let result = newBlock.content;
    for (const key in mapping) {
      const regex = new RegExp(`\\$\\{${key}\\}`, "g");
      result = result.replace(regex, mapping[key]);
    }
    newBlock.content = result;
    return newBlock;
};


export const generateEditorJsFromSessionsCustomised = (
  sessions,
  nomformation,
  customisedModel
) => {
  // Contrôle null pour éviter l'erreur "can't access property blocks"
  if (!customisedModel || !customisedModel.blocks) {
    return {
      time: Date.now(),
      version: "2.28.2",
      blocks: []
    };
  }

  //les valeurs avec les paramettrent modifier
  const blocks = [];
  // Helper pour formater la date
  // Séparer les blocs : avant boucle / boucle / après boucle
  let loopStarted = false;
  let loopEnded = false;

  const beforeLoopBlocks = [];
  const loopBlocks = [];
  const afterLoopBlocks = [];

  //section des valeur header / body avec les valeurs du tableaux / footer
  customisedModel.blocks.forEach(block => {
    const text = block.data?.text || "";
    if (text.includes("debut_Sessions")) {
      loopStarted = true;
      return;
    }
    if (text.includes("fin_Sessions")) {
      loopEnded = true;
      return;
    }
    if (!loopStarted) beforeLoopBlocks.push(block);
    else if (!loopEnded) loopBlocks.push(block);
    else afterLoopBlocks.push(block);
  });
  // Mapping GLOBAL (hors boucle)
  const globalMapping = {
    nomformation
  };
  // 🔹 1. Ajouter les blocs AVANT la boucle (avec remplacement)
  beforeLoopBlocks.forEach(block => {
    const newBlock = { ...block, data: { ...block.data } };
    if (newBlock.data.text) {
      newBlock.data.text = replaceFromMapping(
        newBlock.data.text,
        globalMapping
      );
    }

    if (newBlock.type === "list" && Array.isArray(newBlock.data.items)) {
      newBlock.data.items = newBlock.data.items.map(item =>
        replaceFromMapping(item, globalMapping)
      );
    }

    blocks.push(newBlock);
  });

  // 🔹 2. Boucle sur les sessions
  sessions.forEach((session, index) => {
    //contruction du tableaux de mapping de la partie qui contient la boucle
    const sessionMapping = {
      nomformation,
      index,
      "session.nameplace": session?.nameplace || "",
      "session.dateFormatted": session?.date
        ? formatDate(session.date)
        : "",
      "session.heurstartmoring": session?.heurstartmoring || "",
      "session.heurendmoring": session?.heurendmoring || "",
      "session.heurstartaftern": session?.heurstartaftern || "",
      "session.heurendaftern": session?.heurendaftern || ""
    };
    loopBlocks.forEach(block => {
      const newBlock = { ...block, data: { ...block.data } };
      if (newBlock.data.text) {
        newBlock.data.text = replaceFromMapping(
          newBlock.data.text,
          sessionMapping
        );
      }

      if (newBlock.type === "list" && Array.isArray(newBlock.data.items)) {
        newBlock.data.items = newBlock.data.items.map(item =>
          replaceFromMapping(item, sessionMapping)
        );
      }

      blocks.push(newBlock);
    });
  });

  // 🔹 3. Ajouter les blocs APRÈS la boucle (avec remplacement)
  afterLoopBlocks.forEach(block => {
    const newBlock = { ...block, data: { ...block.data } };

    if (newBlock.data.text) {
      newBlock.data.text = replaceFromMapping(
        newBlock.data.text,
        globalMapping
      );
    }

    if (newBlock.type === "list" && Array.isArray(newBlock.data.items)) {
      newBlock.data.items = newBlock.data.items.map(item =>
        replaceFromMapping(item, globalMapping)
      );
    }

    blocks.push(newBlock);
  });

  // Résultat final EditorJS
  return {
    time: Date.now(),
    version: customisedModel.version || "2.28.2",
    blocks
  };
};

export const generateEditorJsForModelingPostFormationEmail=(
  nomformation ,
  linkQuestionEntreprise,
  linkQuestionFormateur,
  customisedModel
)=>{
  //les valeurs avec les paramettrent modifier
  const blocks = [];
  // Mapping GLOBAL (hors boucle)
  const globalMapping = {
    nomformation,
    linkQuestionEntreprise,
    linkQuestionFormateur
  };
  customisedModel.blocks.forEach(block => {
    const newBlock = { ...block, data: { ...block.data } };
    if (newBlock.data.text) {
      newBlock.data.text = replaceFromMapping(
        newBlock.data.text,
        globalMapping
      );
    }
    if (newBlock.type === "list" && Array.isArray(newBlock.data.items)) {
      newBlock.data.items = newBlock.data.items.map(item =>
        replaceFromMapping(item, globalMapping)
      );
    }
    blocks.push(newBlock);
  });
  // Résultat final EditorJS
  return {
    time: Date.now(),
    version: customisedModel.version || "2.28.2",
    blocks
  };
}