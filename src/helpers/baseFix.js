import { returnExtraPrice } from "../component/Hi/helpers/helpers";

export const baseFix = (el) => {
  return (
    el[0] !== "(" &&
    el.Товар?.indexOf("MagEZ Case") == -1 &&
    el.Товар?.indexOf("PITAKA") == -1 &&
    el.Товар?.indexOf("USB-C 25W") == -1 &&
    el.Товар?.indexOf("Кабель") == -1 &&
    el.Товар?.indexOf("Charge Cable") == -1 &&
    el.Товар?.indexOf("20W") == -1 &&
    el.Товар?.indexOf("USB-С Lightning") == -1 &&
    el.Товар?.indexOf("Муляж") == -1 &&
    el.Товар?.indexOf("кожа") == -1 &&
    el.Товар?.indexOf("Silicon") == -1 &&
    el.Товар?.indexOf("Grip Case") == -1 &&
    el.Товар?.indexOf("Sult Case") == -1 &&
    el !== "Товар"
  );
};

export const baseFixHi = (el) => {
  return (
    el[0] !== "(" &&
    el.Hi?.indexOf("MagEZ Case") == -1 &&
    el.Hi?.indexOf("PITAKA") == -1 &&
    el.Hi?.indexOf("USB-C 25W") == -1 &&
    el.Hi?.indexOf("Кабель") == -1 &&
    el.Hi?.indexOf("Charge Cable") == -1 &&
    el.Hi?.indexOf("20W") == -1 &&
    el.Hi?.indexOf("USB-С Lightning") == -1 &&
    el.Hi?.indexOf("Муляж") == -1 &&
    el.Hi?.indexOf("кожа") == -1 &&
    el.Hi?.indexOf("Silicon") == -1 &&
    el.Hi?.indexOf("Grip Case") == -1 &&
    el.Hi?.indexOf("Sult Case") == -1 &&
    el.Hi?.indexOf("питания MacBook") == -1 &&
    el.Hi?.indexOf("\u2757") == -1 &&
    el.Hi?.indexOf("💻 Mac 💻") == -1 &&
    el.Hi?.indexOf("≪  MacBook Air 13  ≫") == -1 &&
    el.Hi?.indexOf("≪  MacBook Pro 13  ≫") == -1 &&
    el.Hi?.indexOf("≪  MacBook Air 15  ≫") == -1 &&
    el.Hi?.indexOf("📂 iPad  MINI 6 📂") == -1 &&
    el.Hi?.indexOf("🎧AirPods 🎧") == -1 &&
    el.Hi?.indexOf("≪SE 2≫") == -1 &&
    el !== "Товар"
  );
};

export const baseFixHiTest = (el) => {
  return (
    el[0] !== "(" &&
    el.name?.indexOf("MagEZ Case") == -1 &&
    el.name?.indexOf("PITAKA") == -1 &&
    el.name?.indexOf("USB-C 25W") == -1 &&
    el.name?.indexOf("Кабель") == -1 &&
    el.name?.indexOf("Charge Cable") == -1 &&
    el.name?.indexOf("20W") == -1 &&
    el.name?.indexOf("USB-С Lightning") == -1 &&
    el.name?.indexOf("Муляж") == -1 &&
    el.name?.indexOf("кожа") == -1 &&
    el.name?.indexOf("Silicon") == -1 &&
    el.name?.indexOf("Grip Case") == -1 &&
    el.name?.indexOf("Sult Case") == -1 &&
    el.name?.indexOf("питания MacBook") == -1 &&
    el.name?.indexOf("\u2757") == -1 &&
    el.name?.indexOf("💻 Mac 💻") == -1 &&
    el.name?.indexOf("≪  MacBook Air 13  ≫") == -1 &&
    el.name?.indexOf("≪  MacBook Pro 13  ≫") == -1 &&
    el.name?.indexOf("≪  MacBook Air 15  ≫") == -1 &&
    el.name?.indexOf("📂") == -1 &&
    el.name?.indexOf("🔥🔥  14 Pro Max  🔥") == -1 &&
    el.name?.indexOf("🔥🔥  14 Pro  🔥") == -1 &&
    el.name?.indexOf("━─") == -1 &&
    el.name?.indexOf("SE2 40/") == -1 &&
    el.name?.indexOf("AirPods Pro 2 Type-C Left") == -1 &&
    el.name?.indexOf("AirPods 2 Case") == -1 &&
    el.name?.indexOf("🎧AirPods 🎧") == -1 &&
    el.name?.indexOf("≪SE 2≫") == -1
  );
};