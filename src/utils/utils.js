export const currentDate = () => {
  const creationDate = new Date();
  const dd = creationDate.getDate();
  const mm = creationDate.getMonth() + 1;
  const yyyy = creationDate.getFullYear();
  return dd + "/" + mm + "/" + yyyy;
};

export const generateID = () => {
  return "ID-" + Math.random().toString(16).substr(2, 10);
};

export const findDates = (text) => {
  const re = /[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}/g;
  const datesInText = text.match(re);
  return datesInText ? datesInText.join(", ") : "";
};
