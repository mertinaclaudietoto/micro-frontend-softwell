export   const  datasidebar =(role)=>{
    let items=[];
    switch (role) {
        case 1 : //manager
            items =[
                {label :"Dashboard",icone : "fas fa-th",actif:false,link:"/manager/dasboard",subItems:null},
                {label :"gestion d'acces",icone : "fa-solid fa-clipboard-check",actif:false,link:"/manager/criterien",
                    subItems:[
                        {label :"profile",actif:false,link:"/access-profile"},
                        {label :"utilisateur",actif:false,link:"/access-user"},
                    ]
                },
                {label :"critère de sélection",icone : "fa-solid fa-clipboard-check",actif:false,link:"/manager/criterien"},
                {label :"Listes demande",icone : "fa-solid fa-bullhorn",actif:false,link:"/manager/listrequeste"},
            ]
            return items;
        case 2: //rh
            items =[
                {label :"Dashboard",icone : "fas fa-th",actif:false,link:"/rh-dasboard"},
                {label :"Frequence de recrutement",icone : "fas fa-chart-line",actif:false,link:"/rh-statistique"},
                {label :"Parametrage",icone : "fas fa-chart-line",actif:false,link:"/rh-listrequeste"},
            ]
            return items;
        default :
            return items
    }
}
