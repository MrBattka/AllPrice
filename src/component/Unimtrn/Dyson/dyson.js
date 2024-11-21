export const returnDyson = (el) => {
  return (
    el.Модификация.indexOf("Airwrap ") != -1 ||
    el.Модификация.indexOf("V1") != -1 ||
    el.Модификация.indexOf("Vented") != -1 ||
    el.Модификация.indexOf("HD0") != -1 ||
    el.Модификация.indexOf("HD1") != -1 ||
    el.Модификация.indexOf("Gen5 Detect") != -1 ||
    el.Модификация.indexOf("Gen 5 Detect") != -1 ||
    el.Модификация.indexOf("RB0") != -1 ||
    el.Модификация.indexOf("HT0") != -1 ||
    el.Модификация.indexOf("HS0") != -1 ||
    el.Модификация.indexOf("Designed") != -1 ||
    el.Модификация.indexOf("Heapdphone") != -1 ||
    el.Модификация.indexOf("PH04") != -1 ||
    el.Модификация.indexOf("Wash G1 ") != -1 ||
    el.Модификация.indexOf("Paddle Brush") != -1 ||
    el.Модификация.indexOf("Supersonic Hair") != -1 ||
    el.Модификация.indexOf("Air Purifier") != -1 ||
    el.Модификация.indexOf("Vacuum Cleaner Micro") != -1
  );
};
