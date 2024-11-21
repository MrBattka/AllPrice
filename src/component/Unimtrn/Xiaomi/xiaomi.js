export const returnXiaomi = (el) => {
  return (
    el.Модификация.indexOf("Redmi Buds") != -1 ||
    el.Модификация.indexOf("Redmi Note") != -1 ||
    el.Модификация.indexOf("Redmi") != -1 ||
    el.Модификация.indexOf("Note") != -1 ||
    el.Модификация.indexOf("Mi Watch") != -1 ||
    el.Модификация.indexOf("Mi ") != -1 ||
    el.Модификация.indexOf("MI ") != -1 ||
    el.Модификация.indexOf("Poco") != -1 ||
    el.Модификация.indexOf("POCO") != -1
  );
};
