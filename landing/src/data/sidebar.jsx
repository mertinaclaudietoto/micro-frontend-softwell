export   const  datasidebar =(role)=>{
    let items=[];
    switch (role) {
        case 1 : //manager
            items =[
                {item :"Dashboard",icone : "fas fa-th",actif:false,link:"/manager/dasboard"},
                {item :"critère de sélection",icone : "fa-solid fa-clipboard-check",actif:false,link:"/manager/criterien"},
                {item :"Listes demande",icone : "fa-solid fa-bullhorn",actif:false,link:"/manager/listrequeste"},
            ]
            return items;
        case 2: //rh
            items =[
                {item :"Dashboard",icone : "fas fa-th",actif:false,link:"/rh-dasboard"},
                {item :"Frequence de recrutement",icone : "fas fa-chart-line",actif:false,link:"/rh-statistique"},
                {item :"Parametrage",icone : "fas fa-chart-line",actif:false,link:"/rh-listrequeste"},
            ]
            return items;
        default :
            return items
    }
}
