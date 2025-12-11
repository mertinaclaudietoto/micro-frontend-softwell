export const numberToIcons = (num) => {
  return num
    .toString()
    .split("")
    .map((digit, index) => (
      <i key={index} className={`fa-solid fa-${digit}`}></i>
    ));
};

export const getColorByValue = (value) => {
  if (value < 30) return "stroke-red-700 opacity-90";
  if (value < 60) return "stroke-yellow-700 opacity-90";
  if (value <= 100) return "stroke-green-700 opacity-90";
  return "stroke-gray-700 opacity-90";
};
export const handlerVariable = (name, value,setFunction) => {
        setFunction((previous) => ({
            ...previous,
            [name]: value,
        }));
    };
export const formatMoney =(amount)=> {
  if (amount == null) return '';
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
export const formatDate = (textDate) => {
  if (!textDate) return null;

  const date = new Date(textDate);
  if (isNaN(date.getTime())) return null; // vérifie que c'est une date valide

  // Formater en YYYY-MM-DD
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // mois de 0 à 11
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};



