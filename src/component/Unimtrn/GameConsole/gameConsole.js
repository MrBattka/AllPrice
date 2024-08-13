export const returnGameConsole = (el) => {
  return (
    el.Товар.indexOf("Nintendo") != -1 ||
    el.Товар.indexOf("Oculus") != -1 ||
    el.Товар.indexOf("Playstation") != -1 ||
    el.Товар.indexOf("PlayStation") != -1 ||
    el.Товар.indexOf("Xbox") != -1 ||
    el.Товар.indexOf("PS5") != -1 ||
    el.Товар.indexOf("Pico") != -1 ||
    el.Товар.indexOf("Steam") != -1
  );
};
