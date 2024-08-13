export const returnDyson = (el) => {
  return (
    el.Товар.indexOf("Airwrap ") != -1 ||
    el.Товар.indexOf("V1") != -1 ||
    el.Товар.indexOf("Vented") != -1 ||
    el.Товар.indexOf("HD0") != -1 ||
    el.Товар.indexOf("HD1") != -1 ||
    el.Товар.indexOf("Gen5 Detect") != -1 ||
    el.Товар.indexOf("Gen 5 Detect") != -1 ||
    el.Товар.indexOf("RB0") != -1 ||
    el.Товар.indexOf("HT0") != -1 ||
    el.Товар.indexOf("HS0") != -1 ||
    el.Товар.indexOf("Designed") != -1 ||
    el.Товар.indexOf("Heapdphone") != -1 ||
    el.Товар.indexOf("PH04") != -1 ||
    el.Товар.indexOf("Wash G1 ") != -1 ||
    el.Товар.indexOf("Paddle Brush") != -1 ||
    el.Товар.indexOf("Supersonic Hair") != -1 ||
    el.Товар.indexOf("Air Purifier") != -1 ||
    el.Товар.indexOf("Vacuum Cleaner Micro") != -1
  );
};
