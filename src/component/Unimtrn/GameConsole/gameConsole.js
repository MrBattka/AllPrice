export const returnGameConsole = (el) => {
  return (
    el.Модификация.indexOf("Nintendo") != -1 ||
    el.Модификация.indexOf("Oculus") != -1 ||
    el.Модификация.indexOf("Playstation") != -1 ||
    el.Модификация.indexOf("PlayStation") != -1 ||
    el.Модификация.indexOf("Xbox") != -1 ||
    el.Модификация.indexOf("PS5") != -1 ||
    el.Модификация.indexOf("Pico") != -1 ||
    el.Модификация.indexOf("Steam") != -1
  );
};
