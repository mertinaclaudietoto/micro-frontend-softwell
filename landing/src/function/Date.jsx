export const getAge = (dateString) => {
    const today = new Date();
    const birthDate = new Date(dateString);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    // Si l'anniversaire n'est pas encore passé cette année → on retire 1
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age;
};

export const dateToLetters = (dateString) => {
    const mois = [
        "janvier", "février", "mars", "avril", "mai", "juin",
        "juillet", "août", "septembre", "octobre", "novembre", "décembre"
    ];

    const date = new Date(dateString);
    const jour = date.getDate();
    const moisNom = mois[date.getMonth()];
    const annee = date.getFullYear();

    return `${jour} ${moisNom} ${annee}`;
};
export const diffDate = (date1, date2) => {
    console.log(date1)
    console.log(date2)
    // Convertir "DD-MM-YYYY" en "YYYY-MM-DD"
    const toISO = (str) => {
        const [day, month, year] = str.split("-");
        return `${year}-${month}-${day}`;
    };
    const d1 = new Date(toISO(date1));
    const d2 = new Date(toISO(date2));
    // Assurer d1 <= d2
    const start = d1 < d2 ? d1 : d2;
    const end = d1 < d2 ? d2 : d1;
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();
    // Ajustement si le jour est négatif
    if (days < 0) {
        months--;
        const previousMonth = new Date(end.getFullYear(), end.getMonth(), 0).getDate();
        days += previousMonth;
    }
    // Ajustement si le mois est négatif
    if (months < 0) {
        years--;
        months += 12;
    }
    // Conditions :
    if (years === 0 && months === 0) {
        return `${days} jours`;
    }
    if (years === 0 && months < 12) {
        return `${months} mois`;
    }
    return `${years} an(s) et ${months} mois`;
};
