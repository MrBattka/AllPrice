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
    el.Товар?.indexOf("царапин") == -1 &&
    el.Товар?.indexOf("ремонт") == -1 &&
    el.Товар?.indexOf("потертости") == -1 &&
    el.Товар?.indexOf("скол") == -1 &&
    el.Товар?.indexOf("пятна") == -1 &&
    el.Товар?.indexOf("замена") == -1 &&
    el.Товар?.indexOf("пиксель") == -1 &&
    el.Товар?.indexOf("на экране") == -1 &&
    el.Товар?.indexOf("мятый") == -1 &&
    el.Товар?.indexOf("Мятый") == -1 &&
    el.Товар?.indexOf("открытый") == -1 &&
    el.Товар?.indexOf("дефект") == -1 &&
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
    el.name?.indexOf("Tab A9") == -1 &&
    el.name?.indexOf("🎵 Airpods") == -1
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
    (toLowerCase === "samsung"
      ? toLowerCase.indexOf("samsung") == -1
      : toLowerCase) &&
    (toLowerCase === "dyson"
      ? toLowerCase.indexOf("dyson") == -1
      : toLowerCase) &&
    (toLowerCase === "jbl" ? toLowerCase.indexOf("jbl") == -1 : toLowerCase) &&
    toLowerCase.indexOf("*steam deck*") == -1 &&
    toLowerCase.indexOf("*gopro*") == -1 &&
    toLowerCase.indexOf("*vr*") == -1 &&
    toLowerCase.indexOf("*samsung*") == -1 &&
    toLowerCase.indexOf("*dyson*") == -1 &&
    toLowerCase.indexOf("*jbl*") == -1
  );
};

export const baseFixSuperPrice = (el) => {
  let toLowerCase = el.name?.toLowerCase();
  return (
    toLowerCase.indexOf("⭕️") == -1 &&
    toLowerCase.indexOf("📷") == -1 &&
    toLowerCase.indexOf("🍏") == -1 &&
    toLowerCase.indexOf("➖") == -1 &&
    toLowerCase.indexOf("adapter") == -1 &&
    toLowerCase.indexOf("🇪🇺 xiaomi 🇪🇺") == -1 &&
    (toLowerCase === "huawei"
      ? toLowerCase.indexOf("huawei") == -1
      : toLowerCase) &&
    (toLowerCase === "airpods 2"
      ? toLowerCase.indexOf("airpods 2") == -1
      : toLowerCase)
  );
};

export const baseFixGarmin = (el) => {
  let toLowerCase = el.name?.toLowerCase();
  return (
    toLowerCase.indexOf("———") == -1 &&
    toLowerCase.indexOf("кабель") == -1 &&
    toLowerCase.indexOf("артикул") == -1 &&
    toLowerCase.indexOf("связи") == -1 &&
    toLowerCase.indexOf("khalidvu_opt") == -1 &&
    toLowerCase.indexOf("ссылка") == -1 &&
    toLowerCase.indexOf("t.me") == -1 &&
    toLowerCase.indexOf("горбушка") == -1 &&
    toLowerCase.indexOf("павильон") == -1 &&
    toLowerCase.indexOf("apple_garmin") == -1 &&
    toLowerCase.indexOf("карабин") == -1 &&
    toLowerCase.indexOf("наличие") == -1 &&
    toLowerCase.indexOf("apple") == -1 &&
    toLowerCase.indexOf("прайс") == -1 &&
    toLowerCase.indexOf("новинки") == -1 &&
    toLowerCase.indexOf("fenix 8") == -1
  );
};

export const baseFixS5 = (el) => {
  const toLowerCase = el.name?.toLowerCase();
  return (
    toLowerCase.indexOf("s5, ") == -1 &&
    toLowerCase.indexOf("📱iphone📱") == -1 &&
    toLowerCase.indexOf("⏰ watch ⏰") == -1 &&
    (toLowerCase.slice(-3) == "pad"
      ? toLowerCase.indexOf("ipad") == -1
      : toLowerCase) &&
    (toLowerCase.slice(-3) == "on "
      ? toLowerCase.indexOf("dyson") == -1
      : toLowerCase) &&
    (toLowerCase.slice(-3) == "omi"
      ? toLowerCase.indexOf("xiaomi") == -1
      : toLowerCase) &&
    (toLowerCase.slice(-3) == "ral"
      ? toLowerCase.indexOf("natural") == -1
      : toLowerCase) &&
    (toLowerCase.slice(-2) == "5g"
      ? toLowerCase.indexOf("5g") == -1
      : toLowerCase) &&
    (toLowerCase.slice(-7, -5) == "5g"
      ? toLowerCase.indexOf("5g") == -1
      : toLowerCase) &&
    toLowerCase.indexOf("📢📢") == -1 &&
    toLowerCase.indexOf("возврат") == -1 &&
    toLowerCase.indexOf("уценка") == -1 &&
    toLowerCase.indexOf("тонкая коробка") == -1 &&
    toLowerCase.indexOf("подходят") == -1 &&
    toLowerCase.indexOf("вопросам") == -1 &&
    toLowerCase.indexOf("s5_s5_s") == -1 &&
    toLowerCase.indexOf("от 10") == -1 &&
    toLowerCase.indexOf("➖➖") == -1 &&
    toLowerCase.indexOf("airtag") == -1 &&
    toLowerCase.indexOf("keyboard") == -1 &&
    (toLowerCase.slice(0, 3) == "whi"
      ? toLowerCase.indexOf("white") == -1
      : toLowerCase) &&
    (toLowerCase.slice(0, 3) == "bla"
      ? toLowerCase.indexOf("black") == -1
      : toLowerCase) &&
    (toLowerCase.slice(0, 3) == " - "
      ? toLowerCase.indexOf(" - ") == -1
      : toLowerCase) &&
    toLowerCase.indexOf("se 4") == -1 &&
    toLowerCase.indexOf("🔫🔫") == -1
  );
};

export const baseFixRPTrade = (el) => {
  const toLowerCase = el.name?.toLowerCase();
  return toLowerCase.indexOf("смартфоны") == -1;
};

export const baseFixRacmag = (el) => {
  const toLowerCase = el.name?.toLowerCase();
  return (
    toLowerCase.indexOf("рацмаг") == -1 &&
    toLowerCase.indexOf("добрый") == -1 &&
    toLowerCase.indexOf("отправка") == -1 &&
    toLowerCase.indexOf("самовывоз") == -1 &&
    toLowerCase.indexOf("москва") == -1 &&
    toLowerCase.indexOf("для") == -1 &&
    toLowerCase.indexOf("антон") == -1 &&
    toLowerCase.indexOf("t.me") == -1 &&
    toLowerCase.indexOf("прайс") == -1 &&
    toLowerCase.indexOf("xiaomi") == -1 &&
    toLowerCase.indexOf("realme") == -1 &&
    toLowerCase.indexOf("infinix") == -1 &&
    toLowerCase.indexOf("honor") == -1 &&
    toLowerCase.indexOf("huawei") == -1 &&
    toLowerCase.indexOf("tecno") == -1 &&
    toLowerCase.indexOf("samsung") == -1 &&
    toLowerCase.indexOf("планшеты") == -1 &&
    toLowerCase.indexOf("blackview") == -1
  );
};

export const baseFixArti = (el) => {
  const toLowerCase = el.name?.toLowerCase();
  return (
    toLowerCase.indexOf("💥iphone") == -1 &&
    toLowerCase.indexOf("arti opt") == -1 &&
    toLowerCase.indexOf("⚠️iphone") == -1 &&
    toLowerCase.indexOf("🔥macbook") == -1 &&
    toLowerCase.indexOf("🔥mac") == -1 &&
    toLowerCase.indexOf("🔥imac") == -1 &&
    toLowerCase.indexOf("🍏 ipad") == -1 &&
    toLowerCase.indexOf("✨ipad") == -1 &&
    toLowerCase.indexOf("✨watch") == -1 &&
    toLowerCase.indexOf("🍏accessories") == -1 &&
    toLowerCase.indexOf("↘️samsung") == -1 &&
    toLowerCase.indexOf("❗galaxy") == -1 &&
    toLowerCase.indexOf("🔥galaxy") == -1 &&
    toLowerCase.indexOf("планшеты") == -1 &&
    toLowerCase.indexOf("аксессуары") == -1 &&
    toLowerCase.indexOf("⚙️huawe") == -1 &&
    toLowerCase.indexOf("🤖 xiaomi") == -1 &&
    toLowerCase.indexOf("❗redmi") == -1 &&
    toLowerCase.indexOf("❗poco") == -1 &&
    toLowerCase.indexOf("❗note") == -1 &&
    toLowerCase.indexOf("❗mi") == -1 &&
    toLowerCase.indexOf("❗pad") == -1 &&
    toLowerCase.indexOf("📱blackviev") == -1 &&
    toLowerCase.indexOf("🔺pixel") == -1 &&
    toLowerCase.indexOf("💥infinix") == -1 &&
    toLowerCase.indexOf("⭐️realme") == -1 &&
    toLowerCase.indexOf("⚙️oneplus") == -1 &&
    toLowerCase.indexOf("🚨nothing") == -1 &&
    toLowerCase.indexOf("🔥sony") == -1 &&
    toLowerCase.indexOf("🔥zte") == -1 &&
    toLowerCase.indexOf("📱tecno spark") == -1 &&
    toLowerCase.indexOf("📹камеры") == -1 &&
    toLowerCase.indexOf("наушники") == -1 &&
    toLowerCase.indexOf("приставки") == -1 &&
    toLowerCase.indexOf("❗dyson") == -1 &&
    toLowerCase.indexOf("кнопочные") == -1 &&
    toLowerCase.indexOf("inoi") == -1 &&
    toLowerCase.indexOf("открыт") == -1 &&
    toLowerCase.indexOf("кейс") == -1 &&
    toLowerCase.indexOf("ухо") == -1 &&
    toLowerCase.indexOf("cmf phone") == -1
  );
};

export const baseFixElectrozon = (el) => {
  const toLowerCase = el.name?.toLowerCase();
  return (
    toLowerCase.indexOf("infinix") == -1 &&
    toLowerCase.indexOf("inoi") == -1 &&
    toLowerCase.indexOf("realme") == -1 &&
    toLowerCase.indexOf("tecno") == -1 &&
    toLowerCase.indexOf("xenium") == -1
  );
};

export const baseFixReSale = (el) => {
  const toLowerCase = el.name?.toLowerCase();
  return (
    toLowerCase.indexOf("re:sale") == -1 &&
    toLowerCase.indexOf("samsung") == -1 &&
    toLowerCase.indexOf("оформление") == -1 &&
    toLowerCase.indexOf("resale") == -1 &&
    toLowerCase.indexOf("faq") == -1 &&
    toLowerCase.indexOf("от") == -1 &&
    toLowerCase.indexOf("type-c lighting") == -1 &&
    toLowerCase.indexOf("📌") == -1 &&
    toLowerCase.indexOf("⌚️") == -1 &&
    toLowerCase.indexOf("➡️") == -1 &&
    toLowerCase.indexOf("💨") == -1 &&
    toLowerCase.indexOf("🇪🇺 - наша вилка") == -1 &&
    toLowerCase.indexOf("не наша вилка") == -1 &&
    toLowerCase.indexOf("стайлер") == -1 &&
    toLowerCase.indexOf("пылесосы") == -1 &&
    toLowerCase.indexOf("выпрямитель") == -1 &&
    toLowerCase.indexOf("фен") == -1 &&
    toLowerCase.indexOf("увлажнители") == -1 &&
    toLowerCase.indexOf("📱") == -1 &&
    toLowerCase.indexOf("🎮") == -1 &&
    toLowerCase.indexOf("💻") == -1 &&
    toLowerCase.indexOf("геймпад") == -1 &&
    toLowerCase.indexOf("jpg") == -1 &&
    toLowerCase.indexOf("oculus ") == -1 &&
    (toLowerCase === "256 - "
      ? toLowerCase.indexOf("256") == -1
      : toLowerCase) &&
    (toLowerCase === "128 - "
      ? toLowerCase.indexOf("128") == -1
      : toLowerCase) &&
    toLowerCase.indexOf("геймпад") == -1 &&
    toLowerCase.indexOf("jpg") == -1 &&
    toLowerCase.indexOf("oculus ") == -1 &&
    toLowerCase.indexOf("🔘") == -1 &&
    toLowerCase.indexOf("⚡️") == -1
  );
};

export const baseFixTagir = (el) => {
  const toLowerCase = el.name?.toLowerCase();
  return (
    toLowerCase.indexOf("00") != -1 &&
    toLowerCase.indexOf("шт") == -1 
  );
};
