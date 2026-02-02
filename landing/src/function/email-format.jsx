
export const  generateEditorJsFromSessions = (sessions,nomformation)=> {
    // console.log(sessions)
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
