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
    el.Товар?.indexOf("Folio") == -1 &&
    el.Товар?.indexOf("Smart Tag") == -1 &&
    el.Товар?.indexOf("Vision Pro") == -1 &&
    el.Товар?.indexOf("Rog AMD") == -1 &&
    el.Товар?.indexOf("AeroActive Cooler") == -1 &&
    el.Товар?.indexOf("Beats") == -1 &&
    el.Товар?.indexOf("Blackview") == -1 &&
    el.Товар?.indexOf("DJI") == -1 &&
    el.Товар?.indexOf("Media Mod") == -1 &&
    el.Товар?.indexOf("Съемные") == -1 &&
    el.Товар?.indexOf("HERO 11 mini") == -1 &&
    el.Товар?.indexOf("HERO 12 Creator Edition") == -1 &&
    el.Товар?.indexOf("HERO 12 Special Bundle") == -1 &&
    el.Товар?.indexOf("Honor") == -1 &&
    el.Товар?.indexOf("HUAWEI") == -1 &&
    el.Товар?.indexOf("Soundgear") == -1 &&
    el.Товар?.indexOf("Go 3") == -1 &&
    el.Товар?.indexOf("Nothing") == -1 &&
    el.Товар?.indexOf("Oculus") == -1 &&
    el.Товар?.indexOf("OnePlus Pad") == -1 &&
    el.Товар?.indexOf("OnePlus Buds") == -1 &&
    el.Товар?.indexOf("Pico ") == -1 &&
    el.Товар?.indexOf("Pixel Tablet") == -1 &&
    el.Товар?.indexOf("Pixel Watch") == -1 &&
    el.Товар?.indexOf("Backbone") == -1 &&
    el.Товар?.indexOf("VR2") == -1 &&
    el.Товар?.indexOf("DualSense") == -1 &&
    el.Товар?.indexOf("Buds") == -1 &&
    el.Товар?.indexOf("Watch 4") == -1 &&
    el.Товар?.indexOf("Watch 5") == -1 &&
    el.Товар?.indexOf("Watch 6") == -1 &&
    el.Товар?.indexOf("Xperia 1 V ") == -1 &&
    el.Товар?.indexOf("Steam Desk") == -1 &&
    el.Товар?.indexOf("Steam Deck") == -1 &&
    el.Товар?.indexOf("Tecno") == -1 &&
    el.Товар?.indexOf("Nubia Flip") == -1 &&
    el.Товар?.indexOf("Nubia Neo") == -1 &&
    el.Товар?.indexOf("Wireless") == -1 &&
    el !== "Товар"
  );
};

export const baseFixHi = (el) => {
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
    el.name?.indexOf("AirPods 1 ") == -1 &&
    el.name?.indexOf("FNEH3") == -1 &&
    el.name?.indexOf("━─") == -1 &&
    el.name?.indexOf("SE2 40/") == -1 &&
    el.name?.indexOf("AirPods Pro 2 Type-C Left") == -1 &&
    el.name?.indexOf("AirPods 2 Case") == -1 &&
    el.name?.indexOf("INSTINCT") == -1 &&
    el.name?.indexOf("🎧AirPods 🎧") == -1 &&
    el.name?.indexOf("A03s") == -1 &&
    el.name?.indexOf("≪SE 2≫") == -1 &&
    el.name?.indexOf("S20 ") == -1 &&
    el.name?.indexOf("S21 ") == -1 &&
    el.name?.indexOf("S22 ") == -1 &&
    el.name?.indexOf("Tab A8") == -1 &&
    el.name?.indexOf("Tab S8") == -1 &&
    el.name?.indexOf("Tab A9") == -1
  );
};

export const baseFixMiHonor = (el) => {
  let toLowerCase = el.name?.toLowerCase();
  return (
    toLowerCase.indexOf("оптом") == -1 &&
    toLowerCase.indexOf("———") == -1 &&
    toLowerCase.indexOf("желаем") == -1 &&
    toLowerCase.indexOf("mihonor") == -1 &&
    toLowerCase.indexOf("доброе") == -1 &&
    toLowerCase.indexOf("телефоны") == -1 &&
    toLowerCase.indexOf("заказать") == -1 &&
    toLowerCase.indexOf("bekkorolev") == -1 &&
    toLowerCase.indexOf("+7-") == -1 &&
    toLowerCase.indexOf("самовывоз") == -1 &&
    toLowerCase.indexOf("тихорецкий") == -1 &&
    toLowerCase.indexOf("*") == -1 &&
    toLowerCase.indexOf("от") == -1 &&
    toLowerCase.indexOf("электросамокат") == -1
  );
};

export const baseFixVsemi = (el) => {
  let toLowerCase = el.name?.toLowerCase();
  return (
    toLowerCase.indexOf("консоли | геймпады") == -1 &&
    toLowerCase.indexOf("мятые") == -1 &&
    toLowerCase.indexOf("прайс") == -1 &&
    toLowerCase.indexOf("скидка") == -1 &&
    toLowerCase.indexOf("наушники") == -1 &&
    (toLowerCase === "steam deck"
      ? toLowerCase.indexOf("steam deck") == -1
      : toLowerCase) &&
    (toLowerCase === "gopro"
      ? toLowerCase.indexOf("gopro") == -1
      : toLowerCase) &&
    (toLowerCase === "vr" ? toLowerCase.indexOf("vr") == -1 : toLowerCase) &&
    (toLowerCase === "samsung" ? toLowerCase.indexOf("samsung") == -1 : toLowerCase) &&
    (toLowerCase === "dyson" ? toLowerCase.indexOf("dyson") == -1 : toLowerCase) &&
    (toLowerCase === "jbl" ? toLowerCase.indexOf("jbl") == -1 : toLowerCase)
  );
};

export const baseFixSuperPrice = (el) => {
  let toLowerCase = el.name?.toLowerCase();
  return (
    toLowerCase.indexOf("⭕️") == -1 &&
    toLowerCase.indexOf("📷") == -1 &&
    toLowerCase.indexOf("🍏") == -1 &&
    toLowerCase.indexOf("➖") == -1 &&
    toLowerCase.indexOf("🇪🇺 xiaomi 🇪🇺") == -1 &&
    (toLowerCase === "huawei" ? toLowerCase.indexOf("huawei") == -1 : toLowerCase) &&
    (toLowerCase === "airpods 2" ? toLowerCase.indexOf("airpods 2") == -1 : toLowerCase)
  );
};
