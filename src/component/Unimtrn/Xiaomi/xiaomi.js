export const returnXiaomi = (el) => {
  return (
    el.Товар.indexOf("Redmi Buds") != -1 ||
    el.Товар.indexOf("Redmi Note") != -1 ||
    el.Товар.indexOf("Redmi") != -1 ||
    el.Товар.indexOf("Note") != -1 ||
    el.Товар.indexOf("Mi Watch") != -1 ||
    el.Товар.indexOf("Mi ") != -1 ||
    el.Товар.indexOf("MI ") != -1 ||
    el.Товар.indexOf("Poco") != -1 ||
    el.Товар.indexOf("POCO") != -1
  );
};
