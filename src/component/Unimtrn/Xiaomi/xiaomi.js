export const returnXiaomi = (el) => {
  return (
    el.Модификация.indexOf("Redmi Buds") != -1 ||
    el.Модификация.indexOf("Note 12") != -1 ||
    el.Модификация.indexOf("Note 13") != -1 ||
    el.Модификация.indexOf("Note 14") != -1 ||
    el.Модификация.indexOf("Redmi") != -1 ||
    el.Модификация.indexOf("Note") != -1 ||
    el.Модификация.indexOf("Mi Watch") != -1 ||
    el.Модификация.indexOf("Mi ") != -1 ||
    el.Модификация.indexOf("Mix 4") != -1 ||
    el.Модификация.indexOf("Mix Fold") != -1 ||
    el.Модификация.indexOf("Mix Flip") != -1 ||
    el.Модификация.indexOf("MI ") != -1 ||
    el.Модификация.indexOf("Poco") != -1 ||
    el.Модификация.indexOf("POCO") != -1
  );
};
