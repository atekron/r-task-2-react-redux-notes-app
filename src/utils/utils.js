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
