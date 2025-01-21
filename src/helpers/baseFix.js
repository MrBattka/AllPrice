export const baseFix = (el) => {
  return el[0] !== "(" &&
  el.Модификация?.indexOf("🇺🇸") != -1 &&
    (el.Модификация?.indexOf("16 128") != -1 ||
      el.Модификация?.indexOf("16 256") != -1 ||
      el.Модификация?.indexOf("16 512") != -1 ||
      el.Модификация?.indexOf("16 pro") != -1 ||
      el.Модификация?.indexOf("16 plus") != -1 ||
      el.Модификация?.indexOf("15 128") != -1 ||
      el.Модификация?.indexOf("15 256") != -1 ||
      el.Модификация?.indexOf("15 512") != -1 ||
      el.Модификация?.indexOf("15 pro") != -1 ||
      el.Модификация?.indexOf("15 plus") != -1)
    ? el.Модификация?.indexOf("🇺🇸") == -1
    : el.Модификация &&
  el.Модификация?.indexOf("airpods") != -1 &&
    (el.Модификация?.indexOf("left") != -1 ||
      el.Модификация?.indexOf("левый") != -1 ||
      el.Модификация?.indexOf("right") != -1 ||
      el.Модификация?.indexOf("правый") != -1 ||
      el.Модификация?.indexOf("case") != -1 ||
      el.Модификация?.indexOf("кейс") != -1)
    ? el.Модификация?.indexOf("airpods") == -1
    : el.Модификация &&
      el.Модификация?.indexOf("MagEZ Case") == -1 &&
      el.Модификация?.indexOf("PITAKA") == -1 &&
      el.Модификация?.indexOf("USB-C 25W") == -1 &&
      el.Модификация?.indexOf("Кабель") == -1 &&
      el.Модификация?.indexOf("Charge Cable") == -1 &&
      el.Модификация?.indexOf("20W") == -1 &&
      el.Модификация?.indexOf("USB-С Lightning") == -1 &&
      el.Модификация?.indexOf("Муляж") == -1 &&
      el.Модификация?.indexOf("кожа") == -1 &&
      el.Модификация?.indexOf("Silicon") == -1 &&
      el.Модификация?.indexOf("Grip Case") == -1 &&
      el.Модификация?.indexOf("Sult Case") == -1 &&
      el.Модификация?.indexOf("Folio") == -1 &&
      el.Модификация?.indexOf("Smart Tag") == -1 &&
      el.Модификация?.indexOf("Vision Pro") == -1 &&
      el.Модификация?.indexOf("Rog AMD") == -1 &&
      el.Модификация?.indexOf("AeroActive Cooler") == -1 &&
      el.Модификация?.indexOf("Beats") == -1 &&
      el.Модификация?.indexOf("Blackview") == -1 &&
      el.Модификация?.indexOf("DJI") == -1 &&
      el.Модификация?.indexOf("Media Mod") == -1 &&
      el.Модификация?.indexOf("Съемные") == -1 &&
      el.Модификация?.indexOf("HERO 11 mini") == -1 &&
      el.Модификация?.indexOf("HERO 12 Creator Edition") == -1 &&
      el.Модификация?.indexOf("HERO 12 Special Bundle") == -1 &&
      el.Модификация?.indexOf("Honor") == -1 &&
      el.Модификация?.indexOf("HUAWEI") == -1 &&
      el.Модификация?.indexOf("Soundgear") == -1 &&
      el.Модификация?.indexOf("Go 3") == -1 &&
      el.Модификация?.indexOf("Nothing") == -1 &&
      el.Модификация?.indexOf("Oculus") == -1 &&
      el.Модификация?.indexOf("OnePlus Pad") == -1 &&
      el.Модификация?.indexOf("OnePlus Buds") == -1 &&
      el.Модификация?.indexOf("Pico ") == -1 &&
      el.Модификация?.indexOf("Pixel Tablet") == -1 &&
      el.Модификация?.indexOf("Pixel Watch") == -1 &&
      el.Модификация?.indexOf("Backbone") == -1 &&
      el.Модификация?.indexOf("VR2") == -1 &&
      el.Модификация?.indexOf("DualSense") == -1 &&
      el.Модификация?.indexOf("Buds") == -1 &&
      el.Модификация?.indexOf("Watch 4") == -1 &&
      el.Модификация?.indexOf("Watch 5") == -1 &&
      el.Модификация?.indexOf("Watch 6") == -1 &&
      el.Модификация?.indexOf("Xperia 1 V ") == -1 &&
      el.Модификация?.indexOf("Steam Desk") == -1 &&
      el.Модификация?.indexOf("Steam Deck") == -1 &&
      el.Модификация?.indexOf("Tecno") == -1 &&
      el.Модификация?.indexOf("Nubia Flip") == -1 &&
      el.Модификация?.indexOf("Nubia Neo") == -1 &&
      el.Модификация?.indexOf("Wireless") == -1 &&
      el.Модификация?.indexOf("царапин") == -1 &&
      el.Модификация?.indexOf("ремонт") == -1 &&
      el.Модификация?.indexOf("потертости") == -1 &&
      el.Модификация?.indexOf("скол") == -1 &&
      el.Модификация?.indexOf("пятна") == -1 &&
      el.Модификация?.indexOf("замена") == -1 &&
      el.Модификация?.indexOf("пиксель") == -1 &&
      el.Модификация?.indexOf("на экране") == -1 &&
      el.Модификация?.indexOf("мятый") == -1 &&
      el.Модификация?.indexOf("Мятый") == -1 &&
      el.Модификация?.indexOf("открытый") == -1 &&
      el.Модификация?.indexOf("дефект") == -1 &&
      el.Модификация?.indexOf("вскрыт") == -1 &&
      el.Модификация?.indexOf("реболл") == -1 &&
      el.Модификация?.indexOf("No charger") == -1 &&
      el.Модификация?.indexOf("открыт") == -1 &&
      el.Модификация?.indexOf("Мятый") == -1 &&
      el.Модификация?.indexOf("мятый") == -1 &&
      el.Модификация?.indexOf("без пломб") == -1 &&
      el.Модификация?.indexOf("прошит") == -1 &&
      el.Модификация?.indexOf("вскрыт") == -1 &&
      el.Модификация?.indexOf("угол") == -1 &&
      el.Модификация?.indexOf("прошит") == -1 &&
      el.Модификация?.indexOf("потерто") == -1 &&
      el.Модификация?.indexOf("экран") == -1 &&
      el.Модификация?.indexOf("Realme") == -1 &&
      el.Модификация?.indexOf("уцен") == -1 &&
      el.Модификация?.indexOf("обме") == -1 &&
      el.Модификация?.indexOf("короб") == -1 &&
      el.Модификация?.indexOf("ремешок") == -1 &&
    el.Модификация && el !== "Товар";
};

export const baseFixHi = (el) => {
  return el.name.indexOf("🇺🇸") != -1 &&
  (el.name.indexOf("16 128") != -1 ||
    el.name.indexOf("16 256") != -1 ||
    el.name.indexOf("16 512") != -1 ||
    el.name.indexOf("16 pro") != -1 ||
    el.name.indexOf("16 plus") != -1 ||
    el.name.indexOf("15 128") != -1 ||
    el.name.indexOf("15 256") != -1 ||
    el.name.indexOf("15 512") != -1 ||
    el.name.indexOf("15 pro") != -1 ||
    el.name.indexOf("15 plus") != -1)
  ? el.name.indexOf("🇺🇸") == -1
  : el.name && 
  el.name?.indexOf("airpods") != -1 &&
    (el.name?.indexOf("left") != -1 ||
      el.name?.indexOf("левый") != -1 ||
      el.name?.indexOf("right") != -1 ||
      el.name?.indexOf("правый") != -1 ||
      el.name?.indexOf("case") != -1 ||
      el.name?.indexOf("кейс") != -1)
    ? el.name?.indexOf("airpods") == -1
    : el.name &&
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
        el.name?.indexOf("царапин") == -1 &&
        el.name?.indexOf("ремонт") == -1 &&
        el.name?.indexOf("потертости") == -1 &&
        el.name?.indexOf("скол") == -1 &&
        el.name?.indexOf("пятна") == -1 &&
        el.name?.indexOf("замена") == -1 &&
        el.name?.indexOf("пиксель") == -1 &&
        el.name?.indexOf("на экране") == -1 &&
        el.name?.indexOf("мятый") == -1 &&
        el.name?.indexOf("Мятый") == -1 &&
        el.name?.indexOf("открытый") == -1 &&
        el.name?.indexOf("дефект") == -1 &&
        el.name?.indexOf("вскрыт") == -1 &&
        el.name?.indexOf("реболл") == -1 &&
        el.name?.indexOf("No charger") == -1 &&
        el.name?.indexOf("открыт") == -1 &&
        el.name?.indexOf("Мятый") == -1 &&
        el.name?.indexOf("мятый") == -1 &&
        el.name?.indexOf("без пломб") == -1 &&
        el.name?.indexOf("прошит") == -1 &&
        el.name?.indexOf("вскрыт") == -1 &&
        el.name?.indexOf("угол") == -1 &&
        el.name?.indexOf("прошит") == -1 &&
        el.name?.indexOf("потерто") == -1 &&
        el.name?.indexOf("экран") == -1 &&
        el.name?.indexOf("realme") == -1 &&
        el.name?.indexOf("уцен") == -1 &&
        el.name?.indexOf("обме") == -1 &&
        el.name?.indexOf("короб") == -1 &&
        el.name?.indexOf("🎵 Airpods") == -1 &&
        el.name?.indexOf("ремешок") == -1;
};

export const baseFixMiHonor = (el) => {
  let toLowerCase = el.name?.toLowerCase();
  return toLowerCase?.indexOf("🇺🇸") != -1 &&
  (toLowerCase?.indexOf("16 128") != -1 ||
    toLowerCase?.indexOf("16 256") != -1 ||
    toLowerCase?.indexOf("16 512") != -1 ||
    toLowerCase?.indexOf("16 pro") != -1 ||
    toLowerCase?.indexOf("16 plus") != -1 ||
    toLowerCase?.indexOf("15 128") != -1 ||
    toLowerCase?.indexOf("15 256") != -1 ||
    toLowerCase?.indexOf("15 512") != -1 ||
    toLowerCase?.indexOf("15 pro") != -1 ||
    toLowerCase?.indexOf("15 plus") != -1)
  ? toLowerCase?.indexOf("🇺🇸") == -1
  : toLowerCase && 
  toLowerCase.indexOf("оптом") == -1 &&
    toLowerCase.indexOf("———") == -1 &&
    toLowerCase.indexOf("желаем") == -1 &&
    toLowerCase.indexOf("mihonor") == -1 &&
    toLowerCase.indexOf("доброе") == -1 &&
    toLowerCase.indexOf("планшеты") == -1 &&
    toLowerCase.indexOf("телефоны") == -1 &&
    toLowerCase.indexOf("заказать") == -1 &&
    toLowerCase.indexOf("bekkorolev") == -1 &&
    toLowerCase.indexOf("+7-") == -1 &&
    toLowerCase.indexOf("самовывоз") == -1 &&
    toLowerCase.indexOf("тихорецкий") == -1 &&
    toLowerCase.indexOf("*") == -1 &&
    toLowerCase.indexOf("от") == -1 &&
    toLowerCase.indexOf("электросамокат") == -1 &&
    (toLowerCase === "wi-fi  "
      ? toLowerCase.indexOf("wi-fi") == -1
      : toLowerCase) &&
    toLowerCase?.indexOf("царапин") == -1 &&
    toLowerCase?.indexOf("ремонт") == -1 &&
    toLowerCase?.indexOf("потертости") == -1 &&
    toLowerCase?.indexOf("скол") == -1 &&
    toLowerCase?.indexOf("пятна") == -1 &&
    toLowerCase?.indexOf("замена") == -1 &&
    toLowerCase?.indexOf("пиксель") == -1 &&
    toLowerCase?.indexOf("на экране") == -1 &&
    toLowerCase?.indexOf("мятый") == -1 &&
    toLowerCase?.indexOf("Мятый") == -1 &&
    toLowerCase?.indexOf("открытый") == -1 &&
    toLowerCase?.indexOf("дефект") == -1 &&
    toLowerCase?.indexOf("вскрыт") == -1 &&
    toLowerCase?.indexOf("реболл") == -1 &&
    toLowerCase?.indexOf("No charger") == -1 &&
    toLowerCase?.indexOf("открыт") == -1 &&
    toLowerCase?.indexOf("Мятый") == -1 &&
    toLowerCase?.indexOf("мятый") == -1 &&
    toLowerCase?.indexOf("без пломб") == -1 &&
    toLowerCase?.indexOf("прошит") == -1 &&
    toLowerCase?.indexOf("вскрыт") == -1 &&
    toLowerCase?.indexOf("угол") == -1 &&
    toLowerCase?.indexOf("прошит") == -1 &&
    toLowerCase?.indexOf("потерто") == -1 &&
    toLowerCase?.indexOf("экран") == -1 &&
    toLowerCase?.indexOf("realme") == -1 &&
    toLowerCase?.indexOf("актив") == -1 &&
    toLowerCase.indexOf("обменка") == -1 &&
    toLowerCase?.indexOf("уцен") == -1 &&
    toLowerCase?.indexOf("обме") == -1 &&
    toLowerCase?.indexOf("короб") == -1 &&
    toLowerCase?.indexOf("пломба") == -1 &&
    toLowerCase.indexOf('""') == -1 &&
    toLowerCase.indexOf("ремешок") == -1
};

export const baseFixVsemi = (el) => {
  let toLowerCase = el.name?.toLowerCase();
  return toLowerCase?.indexOf("🇺🇸") != -1 &&
  (toLowerCase?.indexOf("16 128") != -1 ||
    toLowerCase?.indexOf("16 256") != -1 ||
    toLowerCase?.indexOf("16 512") != -1 ||
    toLowerCase?.indexOf("16 pro") != -1 ||
    toLowerCase?.indexOf("16 plus") != -1 ||
    toLowerCase?.indexOf("15 128") != -1 ||
    toLowerCase?.indexOf("15 256") != -1 ||
    toLowerCase?.indexOf("15 512") != -1 ||
    toLowerCase?.indexOf("15 pro") != -1 ||
    toLowerCase?.indexOf("15 plus") != -1)
  ? toLowerCase?.indexOf("🇺🇸") == -1
  : toLowerCase && 
  toLowerCase?.indexOf("airpods") != -1 &&
    (toLowerCase?.indexOf("left") != -1 ||
      toLowerCase?.indexOf("левый") != -1 ||
      toLowerCase?.indexOf("right") != -1 ||
      toLowerCase?.indexOf("правый") != -1 ||
      toLowerCase?.indexOf("case") != -1 ||
      toLowerCase?.indexOf("кейс") != -1)
    ? toLowerCase?.indexOf("airpods") == -1
    : toLowerCase &&
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
      (toLowerCase === "jbl"
        ? toLowerCase.indexOf("jbl") == -1
        : toLowerCase) &&
      toLowerCase.indexOf("*steam deck*") == -1 &&
      toLowerCase.indexOf("*gopro*") == -1 &&
      toLowerCase.indexOf("*vr*") == -1 &&
      toLowerCase.indexOf("*samsung*") == -1 &&
      toLowerCase.indexOf("*dyson*") == -1 &&
      toLowerCase.indexOf("*jbl*") == -1 &&
      toLowerCase?.indexOf("царапин") == -1 &&
      toLowerCase?.indexOf("ремонт") == -1 &&
      toLowerCase?.indexOf("потертости") == -1 &&
      toLowerCase?.indexOf("скол") == -1 &&
      toLowerCase?.indexOf("пятна") == -1 &&
      toLowerCase?.indexOf("замена") == -1 &&
      toLowerCase?.indexOf("пиксель") == -1 &&
      toLowerCase?.indexOf("на экране") == -1 &&
      toLowerCase?.indexOf("мятый") == -1 &&
      toLowerCase?.indexOf("Мятый") == -1 &&
      toLowerCase?.indexOf("открытый") == -1 &&
      toLowerCase?.indexOf("дефект") == -1 &&
      toLowerCase?.indexOf("вскрыт") == -1 &&
      toLowerCase?.indexOf("реболл") == -1 &&
      toLowerCase?.indexOf("No charger") == -1 &&
      toLowerCase?.indexOf("открыт") == -1 &&
      toLowerCase?.indexOf("Мятый") == -1 &&
      toLowerCase?.indexOf("мятый") == -1 &&
      toLowerCase?.indexOf("без пломб") == -1 &&
      toLowerCase?.indexOf("прошит") == -1 &&
      toLowerCase?.indexOf("вскрыт") == -1 &&
      toLowerCase?.indexOf("угол") == -1 &&
      toLowerCase?.indexOf("прошит") == -1 &&
      toLowerCase?.indexOf("потерто") == -1 &&
      toLowerCase?.indexOf("экран") == -1 &&
      toLowerCase?.indexOf("realme") == -1 &&
      toLowerCase?.indexOf("уцен") == -1 &&
      toLowerCase?.indexOf("обме") == -1 &&
      toLowerCase?.indexOf("короб") == -1 &&
      toLowerCase.indexOf("телефоны") == -1 &&
      toLowerCase.indexOf("vsemi") == -1 &&
      toLowerCase.indexOf("прош") == -1 &&
      toLowerCase.indexOf("ремешок") == -1
};

export const baseFixSuperPrice = (el) => {
  let toLowerCase = el.name?.toLowerCase();
  return toLowerCase?.indexOf("🇺🇸") != -1 &&
  (toLowerCase?.indexOf("16 128") != -1 ||
    toLowerCase?.indexOf("16 256") != -1 ||
    toLowerCase?.indexOf("16 512") != -1 ||
    toLowerCase?.indexOf("16 pro") != -1 ||
    toLowerCase?.indexOf("16 plus") != -1 ||
    toLowerCase?.indexOf("15 128") != -1 ||
    toLowerCase?.indexOf("15 256") != -1 ||
    toLowerCase?.indexOf("15 512") != -1 ||
    toLowerCase?.indexOf("15 pro") != -1 ||
    toLowerCase?.indexOf("15 plus") != -1)
  ? toLowerCase?.indexOf("🇺🇸") == -1
  : toLowerCase && 
  toLowerCase?.indexOf("airpods") != -1 &&
    (toLowerCase?.indexOf("left") != -1 ||
      toLowerCase?.indexOf("левый") != -1 ||
      toLowerCase?.indexOf("right") != -1 ||
      toLowerCase?.indexOf("правый") != -1 ||
      toLowerCase?.indexOf("case") != -1 ||
      toLowerCase?.indexOf("кейс") != -1)
    ? toLowerCase?.indexOf("airpods") == -1
    : toLowerCase &&
      toLowerCase.indexOf("⭕️") == -1 &&
      toLowerCase.indexOf("📷") == -1 &&
      toLowerCase.indexOf("🍏") == -1 &&
      toLowerCase.indexOf("➖") == -1 &&
      toLowerCase?.indexOf("царапин") == -1 &&
      toLowerCase?.indexOf("ремонт") == -1 &&
      toLowerCase?.indexOf("потертости") == -1 &&
      toLowerCase?.indexOf("скол") == -1 &&
      toLowerCase?.indexOf("пятна") == -1 &&
      toLowerCase?.indexOf("замена") == -1 &&
      toLowerCase?.indexOf("пиксель") == -1 &&
      toLowerCase?.indexOf("на экране") == -1 &&
      toLowerCase?.indexOf("мятый") == -1 &&
      toLowerCase?.indexOf("Мятый") == -1 &&
      toLowerCase?.indexOf("открытый") == -1 &&
      toLowerCase?.indexOf("дефект") == -1 &&
      toLowerCase?.indexOf("вскрыт") == -1 &&
      toLowerCase?.indexOf("реболл") == -1 &&
      toLowerCase?.indexOf("No charger") == -1 &&
      toLowerCase?.indexOf("открыт") == -1 &&
      toLowerCase?.indexOf("Мятый") == -1 &&
      toLowerCase?.indexOf("мятый") == -1 &&
      toLowerCase?.indexOf("распак") == -1 &&
      toLowerCase?.indexOf("без пломб") == -1 &&
      toLowerCase?.indexOf("прошит") == -1 &&
      toLowerCase?.indexOf("вскрыт") == -1 &&
      toLowerCase?.indexOf("угол") == -1 &&
      toLowerCase?.indexOf("прошит") == -1 &&
      toLowerCase?.indexOf("потерто") == -1 &&
      toLowerCase?.indexOf("экран") == -1 &&
      toLowerCase?.indexOf("realme") == -1 &&
      toLowerCase.indexOf("adapter") == -1 &&
      toLowerCase.indexOf("🇪🇺 xiaomi 🇪🇺") == -1 &&
      toLowerCase?.indexOf("уцен") == -1 &&
      toLowerCase?.indexOf("обме") == -1 &&
      toLowerCase?.indexOf("короб") == -1 &&
      (toLowerCase === "huawei"
        ? toLowerCase.indexOf("huawei") == -1
        : toLowerCase) &&
      (toLowerCase === "airpods 2"
        ? toLowerCase.indexOf("airpods 2") == -1
        : toLowerCase) &&
      toLowerCase.indexOf("ремешок") == -1
};

export const baseFixGarmin = (el) => {
  let toLowerCase = el.name?.toLowerCase();
  return toLowerCase?.indexOf("🇺🇸") != -1 &&
  (toLowerCase?.indexOf("16 128") != -1 ||
    toLowerCase?.indexOf("16 256") != -1 ||
    toLowerCase?.indexOf("16 512") != -1 ||
    toLowerCase?.indexOf("16 pro") != -1 ||
    toLowerCase?.indexOf("16 plus") != -1 ||
    toLowerCase?.indexOf("15 128") != -1 ||
    toLowerCase?.indexOf("15 256") != -1 ||
    toLowerCase?.indexOf("15 512") != -1 ||
    toLowerCase?.indexOf("15 pro") != -1 ||
    toLowerCase?.indexOf("15 plus") != -1)
  ? toLowerCase?.indexOf("🇺🇸") == -1
  : toLowerCase && 
  toLowerCase?.indexOf("airpods") != -1 &&
    (toLowerCase?.indexOf("left") != -1 ||
      toLowerCase?.indexOf("левый") != -1 ||
      toLowerCase?.indexOf("right") != -1 ||
      toLowerCase?.indexOf("правый") != -1 ||
      toLowerCase?.indexOf("case") != -1 ||
      toLowerCase?.indexOf("кейс") != -1)
    ? toLowerCase?.indexOf("airpods") == -1
    : toLowerCase &&
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
      toLowerCase?.indexOf("царапин") == -1 &&
      toLowerCase?.indexOf("ремонт") == -1 &&
      toLowerCase?.indexOf("потертости") == -1 &&
      toLowerCase?.indexOf("скол") == -1 &&
      toLowerCase?.indexOf("пятна") == -1 &&
      toLowerCase?.indexOf("замена") == -1 &&
      toLowerCase?.indexOf("пиксель") == -1 &&
      toLowerCase?.indexOf("на экране") == -1 &&
      toLowerCase?.indexOf("мятый") == -1 &&
      toLowerCase?.indexOf("Мятый") == -1 &&
      toLowerCase?.indexOf("открытый") == -1 &&
      toLowerCase?.indexOf("дефект") == -1 &&
      toLowerCase?.indexOf("вскрыт") == -1 &&
      toLowerCase?.indexOf("реболл") == -1 &&
      toLowerCase?.indexOf("No charger") == -1 &&
      toLowerCase?.indexOf("открыт") == -1 &&
      toLowerCase?.indexOf("Мятый") == -1 &&
      toLowerCase?.indexOf("мятый") == -1 &&
      toLowerCase?.indexOf("без пломб") == -1 &&
      toLowerCase?.indexOf("прошит") == -1 &&
      toLowerCase?.indexOf("вскрыт") == -1 &&
      toLowerCase?.indexOf("угол") == -1 &&
      toLowerCase?.indexOf("прошит") == -1 &&
      toLowerCase?.indexOf("потерто") == -1 &&
      toLowerCase?.indexOf("экран") == -1 &&
      toLowerCase?.indexOf("realme") == -1 &&
      toLowerCase?.indexOf("уцен") == -1 &&
      toLowerCase?.indexOf("обме") == -1 &&
      toLowerCase?.indexOf("короб") == -1 &&
      toLowerCase.indexOf("fenix 8") == -1 &&
      toLowerCase.indexOf("ремешок") == -1
};

export const baseFixS5 = (el) => {
  const toLowerCase = el.name?.toLowerCase();
  return toLowerCase?.indexOf("🇺🇸") != -1 &&
  (toLowerCase?.indexOf("16 128") != -1 ||
    toLowerCase?.indexOf("16 256") != -1 ||
    toLowerCase?.indexOf("16 512") != -1 ||
    toLowerCase?.indexOf("16 pro") != -1 ||
    toLowerCase?.indexOf("16 plus") != -1 ||
    toLowerCase?.indexOf("15 128") != -1 ||
    toLowerCase?.indexOf("15 256") != -1 ||
    toLowerCase?.indexOf("15 512") != -1 ||
    toLowerCase?.indexOf("15 pro") != -1 ||
    toLowerCase?.indexOf("15 plus") != -1)
  ? toLowerCase?.indexOf("🇺🇸") == -1
  : toLowerCase &&
   toLowerCase?.indexOf("airpods") != -1 &&
    (toLowerCase?.indexOf("left") != -1 ||
      toLowerCase?.indexOf("левый") != -1 ||
      toLowerCase?.indexOf("right") != -1 ||
      toLowerCase?.indexOf("правый") != -1 ||
      toLowerCase?.indexOf("case") != -1 ||
      toLowerCase?.indexOf("кейс") != -1)
    ? toLowerCase?.indexOf("airpods") == -1
    : toLowerCase &&
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
      toLowerCase?.indexOf("царапин") == -1 &&
      toLowerCase?.indexOf("ремонт") == -1 &&
      toLowerCase?.indexOf("потертости") == -1 &&
      toLowerCase?.indexOf("скол") == -1 &&
      toLowerCase?.indexOf("пятна") == -1 &&
      toLowerCase?.indexOf("замена") == -1 &&
      toLowerCase?.indexOf("пиксель") == -1 &&
      toLowerCase?.indexOf("на экране") == -1 &&
      toLowerCase?.indexOf("мятый") == -1 &&
      toLowerCase?.indexOf("Мятый") == -1 &&
      toLowerCase?.indexOf("открытый") == -1 &&
      toLowerCase?.indexOf("дефект") == -1 &&
      toLowerCase?.indexOf("вскрыт") == -1 &&
      toLowerCase?.indexOf("реболл") == -1 &&
      toLowerCase?.indexOf("No charger") == -1 &&
      toLowerCase?.indexOf("открыт") == -1 &&
      toLowerCase?.indexOf("Мятый") == -1 &&
      toLowerCase?.indexOf("мятый") == -1 &&
      toLowerCase?.indexOf("без пломб") == -1 &&
      toLowerCase?.indexOf("прошит") == -1 &&
      toLowerCase?.indexOf("вскрыт") == -1 &&
      toLowerCase?.indexOf("угол") == -1 &&
      toLowerCase?.indexOf("прошит") == -1 &&
      toLowerCase?.indexOf("потерто") == -1 &&
      toLowerCase?.indexOf("экран") == -1 &&
      toLowerCase?.indexOf("realme") == -1 &&
      toLowerCase?.indexOf("уцен") == -1 &&
      toLowerCase?.indexOf("обме") == -1 &&
      toLowerCase?.indexOf("короб") == -1 &&
      toLowerCase?.indexOf("ремешок") == -1 &&
      toLowerCase.indexOf("🔫🔫") == -1
};

export const baseFixRPTrade = (el) => {
  const toLowerCase = el.name.toLowerCase();
  return toLowerCase?.indexOf("🇺🇸") != -1 &&
  (toLowerCase?.indexOf("16 128") != -1 ||
    toLowerCase?.indexOf("16 256") != -1 ||
    toLowerCase?.indexOf("16 512") != -1 ||
    toLowerCase?.indexOf("16 pro") != -1 ||
    toLowerCase?.indexOf("16 plus") != -1 ||
    toLowerCase?.indexOf("15 128") != -1 ||
    toLowerCase?.indexOf("15 256") != -1 ||
    toLowerCase?.indexOf("15 512") != -1 ||
    toLowerCase?.indexOf("15 pro") != -1 ||
    toLowerCase?.indexOf("15 plus") != -1)
  ? toLowerCase?.indexOf("🇺🇸") == -1
  : toLowerCase && 
  toLowerCase?.indexOf("airpods") != -1 &&
    (toLowerCase?.indexOf("left") != -1 ||
      toLowerCase?.indexOf("левый") != -1 ||
      toLowerCase?.indexOf("right") != -1 ||
      toLowerCase?.indexOf("правый") != -1 ||
      toLowerCase?.indexOf("case") != -1 ||
      toLowerCase?.indexOf("кейс") != -1)
    ? toLowerCase?.indexOf("airpods") == -1
    : toLowerCase &&
      toLowerCase.indexOf("планшеты") == -1 &&
      toLowerCase?.indexOf("царапин") == -1 &&
      toLowerCase?.indexOf("ремонт") == -1 &&
      toLowerCase?.indexOf("потертости") == -1 &&
      toLowerCase?.indexOf("скол") == -1 &&
      toLowerCase?.indexOf("пятна") == -1 &&
      toLowerCase?.indexOf("замена") == -1 &&
      toLowerCase?.indexOf("пиксель") == -1 &&
      toLowerCase?.indexOf("на экране") == -1 &&
      toLowerCase?.indexOf("мятый") == -1 &&
      toLowerCase?.indexOf("Мятый") == -1 &&
      toLowerCase?.indexOf("открытый") == -1 &&
      toLowerCase?.indexOf("дефект") == -1 &&
      toLowerCase?.indexOf("вскрыт") == -1 &&
      toLowerCase?.indexOf("реболл") == -1 &&
      toLowerCase?.indexOf("No charger") == -1 &&
      toLowerCase?.indexOf("открыт") == -1 &&
      toLowerCase?.indexOf("Мятый") == -1 &&
      toLowerCase?.indexOf("мятый") == -1 &&
      toLowerCase?.indexOf("без пломб") == -1 &&
      toLowerCase?.indexOf("прошит") == -1 &&
      toLowerCase?.indexOf("вскрыт") == -1 &&
      toLowerCase?.indexOf("угол") == -1 &&
      toLowerCase?.indexOf("прошит") == -1 &&
      toLowerCase?.indexOf("потерто") == -1 &&
      toLowerCase?.indexOf("экран") == -1 &&
      toLowerCase?.indexOf("realme") == -1 &&
      toLowerCase?.indexOf("уцен") == -1 &&
      toLowerCase?.indexOf("обме") == -1 &&
      toLowerCase?.indexOf("короб") == -1 &&
      toLowerCase.indexOf("смартфоны") == -1 &&
      toLowerCase.indexOf("ремешок") == -1
};

export const baseFixRacmag = (el) => {
  const toLowerCase = el.name?.toLowerCase();
  return toLowerCase?.indexOf("🇺🇸") != -1 &&
  (toLowerCase?.indexOf("16 128") != -1 ||
    toLowerCase?.indexOf("16 256") != -1 ||
    toLowerCase?.indexOf("16 512") != -1 ||
    toLowerCase?.indexOf("16 pro") != -1 ||
    toLowerCase?.indexOf("16 plus") != -1 ||
    toLowerCase?.indexOf("15 128") != -1 ||
    toLowerCase?.indexOf("15 256") != -1 ||
    toLowerCase?.indexOf("15 512") != -1 ||
    toLowerCase?.indexOf("15 pro") != -1 ||
    toLowerCase?.indexOf("15 plus") != -1)
  ? toLowerCase?.indexOf("🇺🇸") == -1
  : toLowerCase && 
  toLowerCase?.indexOf("airpods") != -1 &&
    (toLowerCase?.indexOf("left") != -1 ||
      toLowerCase?.indexOf("левый") != -1 ||
      toLowerCase?.indexOf("right") != -1 ||
      toLowerCase?.indexOf("правый") != -1 ||
      toLowerCase?.indexOf("case") != -1 ||
      toLowerCase?.indexOf("кейс") != -1)
    ? toLowerCase?.indexOf("airpods") == -1
    : toLowerCase &&
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
        toLowerCase?.indexOf("царапин") == -1 &&
        toLowerCase?.indexOf("ремонт") == -1 &&
        toLowerCase?.indexOf("потертости") == -1 &&
        toLowerCase?.indexOf("скол") == -1 &&
        toLowerCase?.indexOf("пятна") == -1 &&
        toLowerCase?.indexOf("замена") == -1 &&
        toLowerCase?.indexOf("пиксель") == -1 &&
        toLowerCase?.indexOf("на экране") == -1 &&
        toLowerCase?.indexOf("мятый") == -1 &&
        toLowerCase?.indexOf("Мятый") == -1 &&
        toLowerCase?.indexOf("открытый") == -1 &&
        toLowerCase?.indexOf("дефект") == -1 &&
        toLowerCase?.indexOf("вскрыт") == -1 &&
        toLowerCase?.indexOf("реболл") == -1 &&
        toLowerCase?.indexOf("No charger") == -1 &&
        toLowerCase?.indexOf("открыт") == -1 &&
        toLowerCase?.indexOf("Мятый") == -1 &&
        toLowerCase?.indexOf("мятый") == -1 &&
        toLowerCase?.indexOf("без пломб") == -1 &&
        toLowerCase?.indexOf("прошит") == -1 &&
        toLowerCase?.indexOf("вскрыт") == -1 &&
        toLowerCase?.indexOf("угол") == -1 &&
        toLowerCase?.indexOf("прошит") == -1 &&
        toLowerCase?.indexOf("потерто") == -1 &&
        toLowerCase?.indexOf("экран") == -1 &&
        toLowerCase?.indexOf("realme") == -1 &&
        toLowerCase?.indexOf("уцен") == -1 &&
        toLowerCase?.indexOf("обме") == -1 &&
        toLowerCase?.indexOf("короб") == -1 &&
        toLowerCase.indexOf("blackview") == -1 &&
        toLowerCase.indexOf("ремешок") == -1;
};

export const baseFixArti = (el) => {
  const toLowerCase = el.name?.toLowerCase();
  return toLowerCase?.indexOf("🇺🇸") != -1 &&
  (toLowerCase?.indexOf("16 128") != -1 ||
    toLowerCase?.indexOf("16 256") != -1 ||
    toLowerCase?.indexOf("16 512") != -1 ||
    toLowerCase?.indexOf("16 pro") != -1 ||
    toLowerCase?.indexOf("16 plus") != -1 ||
    toLowerCase?.indexOf("15 128") != -1 ||
    toLowerCase?.indexOf("15 256") != -1 ||
    toLowerCase?.indexOf("15 512") != -1 ||
    toLowerCase?.indexOf("15 pro") != -1 ||
    toLowerCase?.indexOf("15 plus") != -1)
  ? toLowerCase?.indexOf("🇺🇸") == -1
  : toLowerCase && 
  toLowerCase?.indexOf("airpods") != -1 &&
    (toLowerCase?.indexOf("left") != -1 ||
      toLowerCase?.indexOf("левый") != -1 ||
      toLowerCase?.indexOf("right") != -1 ||
      toLowerCase?.indexOf("правый") != -1 ||
      toLowerCase?.indexOf("case") != -1 ||
      toLowerCase?.indexOf("кейс") != -1)
    ? toLowerCase?.indexOf("airpods") == -1
    : toLowerCase &&
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
      toLowerCase?.indexOf("царапин") == -1 &&
      toLowerCase?.indexOf("ремонт") == -1 &&
      toLowerCase?.indexOf("потертости") == -1 &&
      toLowerCase?.indexOf("скол") == -1 &&
      toLowerCase?.indexOf("пятна") == -1 &&
      toLowerCase?.indexOf("замена") == -1 &&
      toLowerCase?.indexOf("пиксель") == -1 &&
      toLowerCase?.indexOf("на экране") == -1 &&
      toLowerCase?.indexOf("мятый") == -1 &&
      toLowerCase?.indexOf("Мятый") == -1 &&
      toLowerCase?.indexOf("открытый") == -1 &&
      toLowerCase?.indexOf("дефект") == -1 &&
      toLowerCase?.indexOf("вскрыт") == -1 &&
      toLowerCase?.indexOf("реболл") == -1 &&
      toLowerCase?.indexOf("No charger") == -1 &&
      toLowerCase?.indexOf("открыт") == -1 &&
      toLowerCase?.indexOf("Мятый") == -1 &&
      toLowerCase?.indexOf("мятый") == -1 &&
      toLowerCase?.indexOf("без пломб") == -1 &&
      toLowerCase?.indexOf("прошит") == -1 &&
      toLowerCase?.indexOf("вскрыт") == -1 &&
      toLowerCase?.indexOf("угол") == -1 &&
      toLowerCase?.indexOf("прошит") == -1 &&
      toLowerCase?.indexOf("потерто") == -1 &&
      toLowerCase?.indexOf("экран") == -1 &&
      toLowerCase?.indexOf("realme") == -1 &&
      toLowerCase?.indexOf("уцен") == -1 &&
      toLowerCase?.indexOf("обме") == -1 &&
      toLowerCase?.indexOf("короб") == -1 &&
      toLowerCase.indexOf("cmf phone") == -1 &&
      toLowerCase.indexOf("ремешок") == -1
};

export const baseFixElectrozon = (el) => {
  const toLowerCase = el.name?.toLowerCase();
  return toLowerCase?.indexOf("🇺🇸") != -1 &&
  (toLowerCase?.indexOf("16 128") != -1 ||
    toLowerCase?.indexOf("16 256") != -1 ||
    toLowerCase?.indexOf("16 512") != -1 ||
    toLowerCase?.indexOf("16 pro") != -1 ||
    toLowerCase?.indexOf("16 plus") != -1 ||
    toLowerCase?.indexOf("15 128") != -1 ||
    toLowerCase?.indexOf("15 256") != -1 ||
    toLowerCase?.indexOf("15 512") != -1 ||
    toLowerCase?.indexOf("15 pro") != -1 ||
    toLowerCase?.indexOf("15 plus") != -1)
  ? toLowerCase?.indexOf("🇺🇸") == -1
  : toLowerCase && 
  toLowerCase?.indexOf("airpods") != -1 &&
    (toLowerCase?.indexOf("left") != -1 ||
      toLowerCase?.indexOf("левый") != -1 ||
      toLowerCase?.indexOf("right") != -1 ||
      toLowerCase?.indexOf("правый") != -1 ||
      toLowerCase?.indexOf("case") != -1 ||
      toLowerCase?.indexOf("кейс") != -1)
    ? toLowerCase?.indexOf("airpods") == -1
    : toLowerCase &&
        toLowerCase.indexOf("infinix") == -1 &&
        toLowerCase.indexOf("inoi") == -1 &&
        toLowerCase.indexOf("realme") == -1 &&
        toLowerCase.indexOf("tecno") == -1 &&
        toLowerCase?.indexOf("царапин") == -1 &&
        toLowerCase?.indexOf("ремонт") == -1 &&
        toLowerCase?.indexOf("потертости") == -1 &&
        toLowerCase?.indexOf("скол") == -1 &&
        toLowerCase?.indexOf("пятна") == -1 &&
        toLowerCase?.indexOf("замена") == -1 &&
        toLowerCase?.indexOf("пиксель") == -1 &&
        toLowerCase?.indexOf("на экране") == -1 &&
        toLowerCase?.indexOf("мятый") == -1 &&
        toLowerCase?.indexOf("Мятый") == -1 &&
        toLowerCase?.indexOf("открытый") == -1 &&
        toLowerCase?.indexOf("дефект") == -1 &&
        toLowerCase?.indexOf("вскрыт") == -1 &&
        toLowerCase?.indexOf("реболл") == -1 &&
        toLowerCase?.indexOf("No charger") == -1 &&
        toLowerCase?.indexOf("открыт") == -1 &&
        toLowerCase?.indexOf("Мятый") == -1 &&
        toLowerCase?.indexOf("мятый") == -1 &&
        toLowerCase?.indexOf("без пломб") == -1 &&
        toLowerCase?.indexOf("прошит") == -1 &&
        toLowerCase?.indexOf("вскрыт") == -1 &&
        toLowerCase?.indexOf("угол") == -1 &&
        toLowerCase?.indexOf("прошит") == -1 &&
        toLowerCase?.indexOf("потерто") == -1 &&
        toLowerCase?.indexOf("экран") == -1 &&
        toLowerCase?.indexOf("realme") == -1 &&
        toLowerCase?.indexOf("уцен") == -1 &&
        toLowerCase?.indexOf("обме") == -1 &&
        toLowerCase?.indexOf("короб") == -1 &&
        toLowerCase.indexOf("xenium") == -1 &&
        toLowerCase.indexOf("ремешок") == -1;
};

export const baseFixReSale = (el) => {
  const toLowerCase = el.name?.toLowerCase();
  return toLowerCase?.indexOf("🇺🇸") != -1 &&
  (toLowerCase?.indexOf("16 128") != -1 ||
    toLowerCase?.indexOf("16 256") != -1 ||
    toLowerCase?.indexOf("16 512") != -1 ||
    toLowerCase?.indexOf("16 pro") != -1 ||
    toLowerCase?.indexOf("16 plus") != -1 ||
    toLowerCase?.indexOf("15 128") != -1 ||
    toLowerCase?.indexOf("15 256") != -1 ||
    toLowerCase?.indexOf("15 512") != -1 ||
    toLowerCase?.indexOf("15 pro") != -1 ||
    toLowerCase?.indexOf("15 plus") != -1)
  ? toLowerCase?.indexOf("🇺🇸") == -1
  : toLowerCase && 
  toLowerCase?.indexOf("airpods") != -1 &&
    (toLowerCase?.indexOf("left") != -1 ||
      toLowerCase?.indexOf("левый") != -1 ||
      toLowerCase?.indexOf("right") != -1 ||
      toLowerCase?.indexOf("правый") != -1 ||
      toLowerCase?.indexOf("case") != -1 ||
      toLowerCase?.indexOf("кейс") != -1)
    ? toLowerCase?.indexOf("airpods") == -1
    : toLowerCase &&
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
      toLowerCase?.indexOf("царапин") == -1 &&
      toLowerCase?.indexOf("ремонт") == -1 &&
      toLowerCase?.indexOf("потертости") == -1 &&
      toLowerCase?.indexOf("скол") == -1 &&
      toLowerCase?.indexOf("пятна") == -1 &&
      toLowerCase?.indexOf("замена") == -1 &&
      toLowerCase?.indexOf("пиксель") == -1 &&
      toLowerCase?.indexOf("на экране") == -1 &&
      toLowerCase?.indexOf("мятый") == -1 &&
      toLowerCase?.indexOf("Мятый") == -1 &&
      toLowerCase?.indexOf("открытый") == -1 &&
      toLowerCase?.indexOf("дефект") == -1 &&
      toLowerCase?.indexOf("вскрыт") == -1 &&
      toLowerCase?.indexOf("реболл") == -1 &&
      toLowerCase?.indexOf("No charger") == -1 &&
      toLowerCase?.indexOf("открыт") == -1 &&
      toLowerCase?.indexOf("Мятый") == -1 &&
      toLowerCase?.indexOf("мятый") == -1 &&
      toLowerCase?.indexOf("без пломб") == -1 &&
      toLowerCase?.indexOf("прошит") == -1 &&
      toLowerCase?.indexOf("вскрыт") == -1 &&
      toLowerCase?.indexOf("угол") == -1 &&
      toLowerCase?.indexOf("прошит") == -1 &&
      toLowerCase?.indexOf("потерто") == -1 &&
      toLowerCase?.indexOf("экран") == -1 &&
      toLowerCase?.indexOf("realme") == -1 &&
      toLowerCase?.indexOf("уцен") == -1 &&
      toLowerCase?.indexOf("обме") == -1 &&
      toLowerCase?.indexOf("короб") == -1 &&
      toLowerCase.indexOf("⚡️") == -1 &&
      toLowerCase.indexOf("ремешок") == -1
};

export const baseFixTagir = (el) => {
  const toLowerCase = el.name?.toLowerCase();
  return toLowerCase?.indexOf("🇺🇸") != -1 &&
  (toLowerCase?.indexOf("16 128") != -1 ||
    toLowerCase?.indexOf("16 256") != -1 ||
    toLowerCase?.indexOf("16 512") != -1 ||
    toLowerCase?.indexOf("16 pro") != -1 ||
    toLowerCase?.indexOf("16 plus") != -1 ||
    toLowerCase?.indexOf("15 128") != -1 ||
    toLowerCase?.indexOf("15 256") != -1 ||
    toLowerCase?.indexOf("15 512") != -1 ||
    toLowerCase?.indexOf("15 pro") != -1 ||
    toLowerCase?.indexOf("15 plus") != -1)
  ? toLowerCase?.indexOf("🇺🇸") == -1
  : toLowerCase && 
  toLowerCase?.indexOf("airpods") != -1 &&
    (toLowerCase?.indexOf("left") != -1 ||
      toLowerCase?.indexOf("левый") != -1 ||
      toLowerCase?.indexOf("right") != -1 ||
      toLowerCase?.indexOf("правый") != -1 ||
      toLowerCase?.indexOf("case") != -1 ||
      toLowerCase?.indexOf("кейс") != -1)
    ? toLowerCase?.indexOf("airpods") == -1
    : toLowerCase &&
      toLowerCase.indexOf("00") != -1 &&
      toLowerCase?.indexOf("царапин") == -1 &&
      toLowerCase?.indexOf("ремонт") == -1 &&
      toLowerCase?.indexOf("потертости") == -1 &&
      toLowerCase?.indexOf("скол") == -1 &&
      toLowerCase?.indexOf("пятна") == -1 &&
      toLowerCase?.indexOf("замена") == -1 &&
      toLowerCase?.indexOf("пиксель") == -1 &&
      toLowerCase?.indexOf("на экране") == -1 &&
      toLowerCase?.indexOf("мятый") == -1 &&
      toLowerCase?.indexOf("Мятый") == -1 &&
      toLowerCase?.indexOf("открытый") == -1 &&
      toLowerCase?.indexOf("дефект") == -1 &&
      toLowerCase?.indexOf("вскрыт") == -1 &&
      toLowerCase?.indexOf("реболл") == -1 &&
      toLowerCase?.indexOf("No charger") == -1 &&
      toLowerCase?.indexOf("открыт") == -1 &&
      toLowerCase?.indexOf("Мятый") == -1 &&
      toLowerCase?.indexOf("мятый") == -1 &&
      toLowerCase?.indexOf("без пломб") == -1 &&
      toLowerCase?.indexOf("прошит") == -1 &&
      toLowerCase?.indexOf("вскрыт") == -1 &&
      toLowerCase?.indexOf("угол") == -1 &&
      toLowerCase?.indexOf("прошит") == -1 &&
      toLowerCase?.indexOf("потерто") == -1 &&
      toLowerCase?.indexOf("экран") == -1 &&
      toLowerCase?.indexOf("realme") == -1 &&
      toLowerCase?.indexOf("уцен") == -1 &&
      toLowerCase?.indexOf("обме") == -1 &&
      toLowerCase?.indexOf("короб") == -1 &&
      toLowerCase.indexOf("шт") == -1 &&
      toLowerCase.indexOf("ремешок") == -1
};

export const baseFixNarod = (el) => {
  const toLowerCase = el.name?.toLowerCase();
  return toLowerCase?.indexOf("🇺🇸") != -1 &&
  (toLowerCase?.indexOf("16 128") != -1 ||
    toLowerCase?.indexOf("16 256") != -1 ||
    toLowerCase?.indexOf("16 512") != -1 ||
    toLowerCase?.indexOf("16 pro") != -1 ||
    toLowerCase?.indexOf("16 plus") != -1 ||
    toLowerCase?.indexOf("15 128") != -1 ||
    toLowerCase?.indexOf("15 256") != -1 ||
    toLowerCase?.indexOf("15 512") != -1 ||
    toLowerCase?.indexOf("15 pro") != -1 ||
    toLowerCase?.indexOf("15 plus") != -1)
  ? toLowerCase?.indexOf("🇺🇸") == -1
  : toLowerCase && 
  toLowerCase?.indexOf("left") != -1 ||
    toLowerCase?.indexOf("левый") != -1 ||
    toLowerCase?.indexOf("right") != -1 ||
    toLowerCase?.indexOf("правый") != -1 ||
    toLowerCase?.indexOf("case") != -1 ||
    toLowerCase?.indexOf("кейс") != -1
    ? toLowerCase?.indexOf("airpods") == -1
    : toLowerCase &&
      toLowerCase.indexOf("00") != -1 &&
      toLowerCase?.indexOf("царапин") == -1 &&
      toLowerCase?.indexOf("ремонт") == -1 &&
      toLowerCase?.indexOf("потертости") == -1 &&
      toLowerCase?.indexOf("скол") == -1 &&
      toLowerCase?.indexOf("пятна") == -1 &&
      toLowerCase?.indexOf("замена") == -1 &&
      toLowerCase?.indexOf("пиксель") == -1 &&
      toLowerCase?.indexOf("на экране") == -1 &&
      toLowerCase?.indexOf("мятый") == -1 &&
      toLowerCase?.indexOf("Мятый") == -1 &&
      toLowerCase?.indexOf("открытый") == -1 &&
      toLowerCase?.indexOf("дефект") == -1 &&
      toLowerCase?.indexOf("вскрыт") == -1 &&
      toLowerCase?.indexOf("реболл") == -1 &&
      toLowerCase?.indexOf("No charger") == -1 &&
      toLowerCase?.indexOf("открыт") == -1 &&
      toLowerCase?.indexOf("Мятый") == -1 &&
      toLowerCase?.indexOf("мятый") == -1 &&
      toLowerCase?.indexOf("без пломб") == -1 &&
      toLowerCase?.indexOf("прошит") == -1 &&
      toLowerCase?.indexOf("вскрыт") == -1 &&
      toLowerCase?.indexOf("угол") == -1 &&
      toLowerCase?.indexOf("прошит") == -1 &&
      toLowerCase?.indexOf("потерто") == -1 &&
      toLowerCase?.indexOf("экран") == -1 &&
      toLowerCase?.indexOf("realme") == -1 &&
      toLowerCase?.indexOf("уцен") == -1 &&
      toLowerCase?.indexOf("обме") == -1 &&
      toLowerCase?.indexOf("короб") == -1 &&
      toLowerCase.indexOf("шт") == -1 &&
      toLowerCase.indexOf("ремешок") == -1
};

export const baseFixF51 = (el) => {
  const toLowerCase = el.name?.toLowerCase();
  return toLowerCase?.indexOf("🇺🇸") != -1 &&
  (toLowerCase?.indexOf("16 128") != -1 ||
    toLowerCase?.indexOf("16 256") != -1 ||
    toLowerCase?.indexOf("16 512") != -1 ||
    toLowerCase?.indexOf("16 pro") != -1 ||
    toLowerCase?.indexOf("16 plus") != -1 ||
    toLowerCase?.indexOf("15 128") != -1 ||
    toLowerCase?.indexOf("15 256") != -1 ||
    toLowerCase?.indexOf("15 512") != -1 ||
    toLowerCase?.indexOf("15 pro") != -1 ||
    toLowerCase?.indexOf("15 plus") != -1)
  ? toLowerCase?.indexOf("🇺🇸") == -1
  : toLowerCase && 
  toLowerCase?.indexOf("left") != -1 ||
    toLowerCase?.indexOf("левый") != -1 ||
    toLowerCase?.indexOf("right") != -1 ||
    toLowerCase?.indexOf("правый") != -1 ||
    toLowerCase?.indexOf("case") != -1 ||
    toLowerCase?.indexOf("кейс") != -1
    ? toLowerCase?.indexOf("airpods") == -1
    : toLowerCase &&
      toLowerCase?.indexOf("царапин") == -1 &&
      toLowerCase?.indexOf("ремонт") == -1 &&
      toLowerCase?.indexOf("потертости") == -1 &&
      toLowerCase?.indexOf("скол") == -1 &&
      toLowerCase?.indexOf("пятна") == -1 &&
      toLowerCase?.indexOf("замена") == -1 &&
      toLowerCase?.indexOf("пиксель") == -1 &&
      toLowerCase?.indexOf("на экране") == -1 &&
      toLowerCase?.indexOf("мятый") == -1 &&
      toLowerCase?.indexOf("Мятый") == -1 &&
      toLowerCase?.indexOf("открытый") == -1 &&
      toLowerCase?.indexOf("дефект") == -1 &&
      toLowerCase?.indexOf("вскрыт") == -1 &&
      toLowerCase?.indexOf("реболл") == -1 &&
      toLowerCase?.indexOf("No charger") == -1 &&
      toLowerCase?.indexOf("открыт") == -1 &&
      toLowerCase?.indexOf("Мятый") == -1 &&
      toLowerCase?.indexOf("мятый") == -1 &&
      toLowerCase?.indexOf("без пломб") == -1 &&
      toLowerCase?.indexOf("прошит") == -1 &&
      toLowerCase?.indexOf("вскрыт") == -1 &&
      toLowerCase?.indexOf("угол") == -1 &&
      toLowerCase?.indexOf("прошит") == -1 &&
      toLowerCase?.indexOf("потерто") == -1 &&
      toLowerCase?.indexOf("экран") == -1 &&
      toLowerCase?.indexOf("realme") == -1 &&
      toLowerCase?.indexOf("уцен") == -1 &&
      toLowerCase?.indexOf("обме") == -1 &&
      toLowerCase?.indexOf("короб") == -1 &&
      toLowerCase.indexOf("шт") == -1 &&
      toLowerCase.indexOf("ремешок") == -1
};

export const baseFixOther = (el) => {
  const toLowerCase = el.name?.toLowerCase();
  return toLowerCase?.indexOf("🇺🇸") != -1 &&
  (toLowerCase?.indexOf("16 128") != -1 ||
    toLowerCase?.indexOf("16 256") != -1 ||
    toLowerCase?.indexOf("16 512") != -1 ||
    toLowerCase?.indexOf("16 pro") != -1 ||
    toLowerCase?.indexOf("16 plus") != -1 ||
    toLowerCase?.indexOf("15 128") != -1 ||
    toLowerCase?.indexOf("15 256") != -1 ||
    toLowerCase?.indexOf("15 512") != -1 ||
    toLowerCase?.indexOf("15 pro") != -1 ||
    toLowerCase?.indexOf("15 plus") != -1)
  ? toLowerCase?.indexOf("🇺🇸") == -1
  : toLowerCase && 
  toLowerCase.indexOf("left") == -1 &&
    toLowerCase.indexOf("левый") == -1 &&
    toLowerCase.indexOf("right") == -1 &&
    toLowerCase.indexOf("правый") == -1 &&
    toLowerCase.indexOf("case") == -1 &&
    toLowerCase.indexOf("кейс") == -1 &&
    toLowerCase.indexOf('"a"') == -1 &&
    toLowerCase.indexOf('"b"') == -1 &&
    toLowerCase.indexOf('"c"') == -1 &&
    toLowerCase.indexOf('"a+"') == -1 &&
    toLowerCase.indexOf('"b+"') == -1 &&
    toLowerCase.indexOf('"c+"') == -1 &&
    toLowerCase.indexOf('"a-"') == -1 &&
    toLowerCase.indexOf('"b-"') == -1 &&
    toLowerCase.indexOf('"c-"') == -1 &&
    toLowerCase.indexOf("царапин") == -1 &&
    toLowerCase.indexOf("ремонт") == -1 &&
    toLowerCase.indexOf("потертости") == -1 &&
    toLowerCase.indexOf("скол") == -1 &&
    toLowerCase.indexOf("пятна") == -1 &&
    toLowerCase.indexOf("замена") == -1 &&
    toLowerCase.indexOf("пиксель") == -1 &&
    toLowerCase.indexOf("на экране") == -1 &&
    toLowerCase.indexOf("мятый") == -1 &&
    toLowerCase.indexOf("Мятый") == -1 &&
    toLowerCase.indexOf("открытый") == -1 &&
    toLowerCase.indexOf("дефект") == -1 &&
    toLowerCase.indexOf("вскрыт") == -1 &&
    toLowerCase.indexOf("реболл") == -1 &&
    toLowerCase.indexOf("No charger") == -1 &&
    toLowerCase.indexOf("открыт") == -1 &&
    toLowerCase.indexOf("Мятый") == -1 &&
    toLowerCase.indexOf("мятый") == -1 &&
    toLowerCase.indexOf("без пломб") == -1 &&
    toLowerCase.indexOf("прошит") == -1 &&
    toLowerCase.indexOf("вскрыт") == -1 &&
    toLowerCase.indexOf("угол") == -1 &&
    toLowerCase.indexOf("прошит") == -1 &&
    toLowerCase.indexOf("потерто") == -1 &&
    toLowerCase.indexOf("экран") == -1 &&
    toLowerCase.indexOf("realme") == -1 &&
    toLowerCase.indexOf("актив") == -1 &&
    toLowerCase.indexOf("обменка") == -1 &&
    toLowerCase.indexOf("уцен") == -1 &&
    toLowerCase.indexOf("обме") == -1 &&
    toLowerCase.indexOf("короб") == -1 &&
    toLowerCase.indexOf("пломба") == -1 &&
    toLowerCase.indexOf("новые") == -1 &&
    toLowerCase.indexOf("запак") == -1 &&
    toLowerCase.indexOf("фото") == -1 &&
    toLowerCase.indexOf('""') == -1 &&
    toLowerCase.indexOf("airpods pro 2 type - c box") == -1 &&
    toLowerCase.indexOf("airpods pro 2 type - c r") == -1 &&
    toLowerCase.indexOf("airpods pro 2 type - c l") == -1 &&
    toLowerCase.indexOf("airpods pro   r") == -1 &&
    toLowerCase.indexOf("airpods pro l") == -1 &&
    toLowerCase.indexOf("airpods 3 box") == -1 &&
    toLowerCase.indexOf("airpods 3 r") == -1 &&
    toLowerCase.indexOf("airpods 3  r") == -1 &&
    (toLowerCase.indexOf("airpods 3 l") != -1 && toLowerCase.indexOf("li") == -1
      ? toLowerCase.indexOf("airpods 3 l") == -1
      : toLowerCase) &&
    (toLowerCase.indexOf("airpods 3  l") != -1 &&
    toLowerCase.indexOf("li") == -1
      ? toLowerCase.indexOf("airpods 3  l") == -1
      : toLowerCase) &&
    toLowerCase.indexOf("airpods 2 l") == -1 &&
    toLowerCase.indexOf("airpods 2 box") == -1 &&
    toLowerCase.indexOf("airpods 2 r") == -1 &&
    toLowerCase.indexOf("airpods pro usb - c box") == -1 &&
    toLowerCase.indexOf("airpods pro usb - c l") == -1 &&
    toLowerCase.indexOf("airpods pro usb - c r") == -1 &&
    toLowerCase.indexOf("deppo") == -1 &&
    toLowerCase.indexOf("ремешок") == -1
};

export const baseFixBase = (el) => {
  const toLowerCase = el.name?.toLowerCase();
  return toLowerCase?.indexOf("🇺🇸") != -1 &&
  (toLowerCase?.indexOf("16 128") != -1 ||
    toLowerCase?.indexOf("16 256") != -1 ||
    toLowerCase?.indexOf("16 512") != -1 ||
    toLowerCase?.indexOf("16 pro") != -1 ||
    toLowerCase?.indexOf("16 plus") != -1 ||
    toLowerCase?.indexOf("15 128") != -1 ||
    toLowerCase?.indexOf("15 256") != -1 ||
    toLowerCase?.indexOf("15 512") != -1 ||
    toLowerCase?.indexOf("15 pro") != -1 ||
    toLowerCase?.indexOf("15 plus") != -1)
  ? toLowerCase?.indexOf("🇺🇸") == -1
  : toLowerCase && 
  toLowerCase?.indexOf("left") != -1 ||
    toLowerCase?.indexOf("левый") != -1 ||
    toLowerCase?.indexOf("right") != -1 ||
    toLowerCase?.indexOf("правый") != -1 ||
    toLowerCase?.indexOf("case") != -1 ||
    toLowerCase?.indexOf("кейс") != -1
    ? toLowerCase?.indexOf("airpods") == -1
    : toLowerCase &&
      toLowerCase.indexOf('"a"') == -1 &&
      toLowerCase.indexOf('"b"') == -1 &&
      toLowerCase.indexOf('"c"') == -1 &&
      toLowerCase.indexOf('"a+"') == -1 &&
      toLowerCase.indexOf('"b+"') == -1 &&
      toLowerCase.indexOf('"c+"') == -1 &&
      toLowerCase.indexOf('"a-"') == -1 &&
      toLowerCase.indexOf('"b-"') == -1 &&
      toLowerCase.indexOf('"c-"') == -1 &&
      toLowerCase?.indexOf("царапин") == -1 &&
      toLowerCase?.indexOf("ремонт") == -1 &&
      toLowerCase?.indexOf("потертости") == -1 &&
      toLowerCase?.indexOf("скол") == -1 &&
      toLowerCase?.indexOf("пятна") == -1 &&
      toLowerCase?.indexOf("замена") == -1 &&
      toLowerCase?.indexOf("пиксель") == -1 &&
      toLowerCase?.indexOf("на экране") == -1 &&
      toLowerCase?.indexOf("мятый") == -1 &&
      toLowerCase?.indexOf("Мятый") == -1 &&
      toLowerCase?.indexOf("открытый") == -1 &&
      toLowerCase?.indexOf("дефект") == -1 &&
      toLowerCase?.indexOf("вскрыт") == -1 &&
      toLowerCase?.indexOf("реболл") == -1 &&
      toLowerCase?.indexOf("No charger") == -1 &&
      toLowerCase?.indexOf("открыт") == -1 &&
      toLowerCase?.indexOf("Мятый") == -1 &&
      toLowerCase?.indexOf("мятый") == -1 &&
      toLowerCase?.indexOf("без пломб") == -1 &&
      toLowerCase?.indexOf("прошит") == -1 &&
      toLowerCase?.indexOf("вскрыт") == -1 &&
      toLowerCase?.indexOf("угол") == -1 &&
      toLowerCase?.indexOf("прошит") == -1 &&
      toLowerCase?.indexOf("потерто") == -1 &&
      toLowerCase?.indexOf("экран") == -1 &&
      toLowerCase?.indexOf("realme") == -1 &&
      toLowerCase?.indexOf("актив") == -1 &&
      toLowerCase.indexOf("обменка") == -1 &&
      toLowerCase?.indexOf("уцен") == -1 &&
      toLowerCase?.indexOf("обме") == -1 &&
      toLowerCase?.indexOf("короб") == -1 &&
      toLowerCase?.indexOf("пломба") == -1 &&
      toLowerCase.indexOf('""') == -1 &&
      toLowerCase.indexOf("ремешок") == -1
};

export const baseFixDiscount = (el) => {
  let toLowerCase = el.name?.toLowerCase();
  return toLowerCase?.indexOf("🇺🇸") != -1 &&
  (toLowerCase?.indexOf("16 128") != -1 ||
    toLowerCase?.indexOf("16 256") != -1 ||
    toLowerCase?.indexOf("16 512") != -1 ||
    toLowerCase?.indexOf("16 pro") != -1 ||
    toLowerCase?.indexOf("16 plus") != -1 ||
    toLowerCase?.indexOf("15 128") != -1 ||
    toLowerCase?.indexOf("15 256") != -1 ||
    toLowerCase?.indexOf("15 512") != -1 ||
    toLowerCase?.indexOf("15 pro") != -1 ||
    toLowerCase?.indexOf("15 plus") != -1)
  ? toLowerCase?.indexOf("🇺🇸") == -1
  : toLowerCase && 
  toLowerCase?.indexOf("airpods") != -1 &&
    (toLowerCase?.indexOf("left") != -1 ||
      toLowerCase?.indexOf("левый") != -1 ||
      toLowerCase?.indexOf("right") != -1 ||
      toLowerCase?.indexOf("правый") != -1 ||
      toLowerCase?.indexOf("case") != -1 ||
      toLowerCase?.indexOf("кейс") != -1)
    ? toLowerCase?.indexOf("airpods") == -1
    : toLowerCase &&
      toLowerCase?.indexOf("царапин") == -1 &&
      toLowerCase?.indexOf("ремонт") == -1 &&
      toLowerCase?.indexOf("потертости") == -1 &&
      toLowerCase?.indexOf("скол") == -1 &&
      toLowerCase?.indexOf("пятна") == -1 &&
      toLowerCase?.indexOf("замена") == -1 &&
      toLowerCase?.indexOf("пиксель") == -1 &&
      toLowerCase?.indexOf("на экране") == -1 &&
      toLowerCase?.indexOf("мятый") == -1 &&
      toLowerCase?.indexOf("Мятый") == -1 &&
      toLowerCase?.indexOf("открытый") == -1 &&
      toLowerCase?.indexOf("дефект") == -1 &&
      toLowerCase?.indexOf("вскрыт") == -1 &&
      toLowerCase?.indexOf("реболл") == -1 &&
      toLowerCase?.indexOf("No charger") == -1 &&
      toLowerCase?.indexOf("открыт") == -1 &&
      toLowerCase?.indexOf("Мятый") == -1 &&
      toLowerCase?.indexOf("мятый") == -1 &&
      toLowerCase?.indexOf("без пломб") == -1 &&
      toLowerCase?.indexOf("прошит") == -1 &&
      toLowerCase?.indexOf("вскрыт") == -1 &&
      toLowerCase?.indexOf("угол") == -1 &&
      toLowerCase?.indexOf("прошит") == -1 &&
      toLowerCase?.indexOf("потерто") == -1 &&
      toLowerCase?.indexOf("экран") == -1 &&
      toLowerCase?.indexOf("realme") == -1 &&
      toLowerCase?.indexOf("discount") == -1 &&
      toLowerCase?.indexOf("поступление") == -1 &&
      toLowerCase?.indexOf("e sim") == -1 &&
      toLowerCase?.indexOf("2 sim") == -1 &&
      toLowerCase?.indexOf("staraya") == -1 &&
      toLowerCase?.indexOf("новы") == -1 &&
      toLowerCase?.indexOf("в наличии") == -1 &&
      toLowerCase?.indexOf("🆕") == -1 &&
      toLowerCase?.indexOf("отдельн") == -1 &&
      toLowerCase?.indexOf("актив") == -1 &&
      toLowerCase?.indexOf(" box") == -1 &&
      toLowerCase?.indexOf("deppo") == -1 &&
      toLowerCase?.indexOf("ухо") == -1 &&
      toLowerCase?.indexOf("пульт") == -1 &&
      toLowerCase?.indexOf("уцен") == -1 &&
      toLowerCase?.indexOf("обме") == -1 &&
      toLowerCase?.indexOf("короб") == -1 &&
      toLowerCase?.indexOf("лампа") == -1 &&
      toLowerCase?.indexOf("кнопка") == -1 &&
      toLowerCase?.indexOf("датчик") == -1 &&
      toLowerCase?.indexOf("движ") == -1 &&
      toLowerCase?.indexOf("сумк") == -1 &&
      toLowerCase?.indexOf("панель") == -1 &&
      toLowerCase?.indexOf("расческа") == -1 &&
      toLowerCase?.indexOf("для") == -1 &&
      toLowerCase?.indexOf("насад") == -1 &&
      toLowerCase?.indexOf("xbox джойстик") == -1 &&
      toLowerCase?.indexOf("earpods") == -1 &&
      toLowerCase?.indexOf("s6 4") == -1 &&
      toLowerCase?.indexOf("vr") == -1 &&
      toLowerCase?.indexOf("se2 6") == -1 &&
      toLowerCase.indexOf("ремешок") == -1
};

export const baseFixMiOpts = (el) => {
  let toLowerCase = el.name?.toLowerCase();
  return toLowerCase?.indexOf("🇺🇸") != -1 &&
  (toLowerCase?.indexOf("16 128") != -1 ||
    toLowerCase?.indexOf("16 256") != -1 ||
    toLowerCase?.indexOf("16 512") != -1 ||
    toLowerCase?.indexOf("16 pro") != -1 ||
    toLowerCase?.indexOf("16 plus") != -1 ||
    toLowerCase?.indexOf("15 128") != -1 ||
    toLowerCase?.indexOf("15 256") != -1 ||
    toLowerCase?.indexOf("15 512") != -1 ||
    toLowerCase?.indexOf("15 pro") != -1 ||
    toLowerCase?.indexOf("15 plus") != -1)
  ? toLowerCase?.indexOf("🇺🇸") == -1
  : toLowerCase && 
  toLowerCase.indexOf("оптом") == -1 &&
    toLowerCase.indexOf("miopt") == -1 &&
    toLowerCase.indexOf("метро") == -1 &&
    toLowerCase.indexOf("тяк") == -1 &&
    toLowerCase.indexOf("мелочей") == -1 &&
    toLowerCase.indexOf("магазин") == -1 &&
    toLowerCase.indexOf("прайс") == -1 &&
    toLowerCase.indexOf("пишите") == -1 &&
    toLowerCase.indexOf("📞") == -1 &&
    toLowerCase.indexOf("rustam") == -1 &&
    toLowerCase.indexOf("📱") == -1 &&
    toLowerCase.indexOf("🔌") == -1 &&
    toLowerCase.indexOf("🇷🇺🇷🇺") == -1 &&
    toLowerCase.indexOf("armor") == -1 &&
    toLowerCase.indexOf("📲") == -1 &&
    toLowerCase.indexOf("канал") == -1 &&
    toLowerCase.indexOf("t.me") == -1 &&
    toLowerCase.indexOf("samsung") == -1 &&
    toLowerCase.indexOf("note🇷🇺") == -1 &&
    toLowerCase.indexOf("poco🇷🇺") == -1 &&
    toLowerCase.indexOf("mi 🇷🇺") == -1 &&
    toLowerCase.indexOf("от") == -1 &&
    toLowerCase.indexOf("pad🇷🇺") == -1 &&
    toLowerCase.indexOf("iphone🇪🇺") == -1 &&
    (toLowerCase === "honor🇷🇺"
      ? toLowerCase.indexOf("honor🇷🇺") == -1
      : toLowerCase) &&
    (toLowerCase === "itel🇷🇺"
      ? toLowerCase.indexOf("itel🇷🇺") == -1
      : toLowerCase) &&
    (toLowerCase === "realme🇷🇺"
      ? toLowerCase.indexOf("realme🇷🇺") == -1
      : toLowerCase) &&
    (toLowerCase === "tecno🇷🇺"
      ? toLowerCase.indexOf("tecno🇷🇺") == -1
      : toLowerCase) &&
    toLowerCase?.indexOf("царапин") == -1 &&
    toLowerCase?.indexOf("ремонт") == -1 &&
    toLowerCase?.indexOf("потертости") == -1 &&
    toLowerCase?.indexOf("скол") == -1 &&
    toLowerCase?.indexOf("пятна") == -1 &&
    toLowerCase?.indexOf("замена") == -1 &&
    toLowerCase?.indexOf("пиксель") == -1 &&
    toLowerCase?.indexOf("на экране") == -1 &&
    toLowerCase?.indexOf("мятый") == -1 &&
    toLowerCase?.indexOf("Мятый") == -1 &&
    toLowerCase?.indexOf("открытый") == -1 &&
    toLowerCase?.indexOf("дефект") == -1 &&
    toLowerCase?.indexOf("вскрыт") == -1 &&
    toLowerCase?.indexOf("реболл") == -1 &&
    toLowerCase?.indexOf("No charger") == -1 &&
    toLowerCase?.indexOf("открыт") == -1 &&
    toLowerCase?.indexOf("Мятый") == -1 &&
    toLowerCase?.indexOf("мятый") == -1 &&
    toLowerCase?.indexOf("без пломб") == -1 &&
    toLowerCase?.indexOf("прошит") == -1 &&
    toLowerCase?.indexOf("вскрыт") == -1 &&
    toLowerCase?.indexOf("угол") == -1 &&
    toLowerCase?.indexOf("прошит") == -1 &&
    toLowerCase?.indexOf("потерто") == -1 &&
    toLowerCase?.indexOf("экран") == -1 &&
    toLowerCase?.indexOf("realme") == -1 &&
    toLowerCase?.indexOf("актив") == -1 &&
    toLowerCase.indexOf("обменка") == -1 &&
    toLowerCase?.indexOf("уцен") == -1 &&
    toLowerCase?.indexOf("обме") == -1 &&
    toLowerCase?.indexOf("короб") == -1 &&
    toLowerCase?.indexOf("пломба") == -1 &&
    toLowerCase.indexOf('""') == -1 &&
    toLowerCase.indexOf("ремешок") == -1 
};

export const baseFixLowPrice = (el) => {
  let toLowerCase = el.name?.toLowerCase();
  return toLowerCase?.indexOf("🇺🇸") != -1 &&
  (toLowerCase?.indexOf("16 128") != -1 ||
    toLowerCase?.indexOf("16 256") != -1 ||
    toLowerCase?.indexOf("16 512") != -1 ||
    toLowerCase?.indexOf("16 pro") != -1 ||
    toLowerCase?.indexOf("16 plus") != -1 ||
    toLowerCase?.indexOf("15 128") != -1 ||
    toLowerCase?.indexOf("15 256") != -1 ||
    toLowerCase?.indexOf("15 512") != -1 ||
    toLowerCase?.indexOf("15 pro") != -1 ||
    toLowerCase?.indexOf("15 plus") != -1)
  ? toLowerCase?.indexOf("🇺🇸") == -1
  : toLowerCase &&
  toLowerCase.indexOf("24.05.2023") == -1 &&
    toLowerCase.indexOf("🔥") == -1 &&
    toLowerCase.indexOf("фен") == -1 &&
    toLowerCase.indexOf("выпрямитель") == -1 &&
    toLowerCase.indexOf("пылесос") == -1 &&
    toLowerCase.indexOf("аксессуары") == -1 &&
    toLowerCase.indexOf("насадка") == -1 &&
    toLowerCase.indexOf("watch 2") == -1 &&
    toLowerCase.indexOf("ctoned") == -1 &&
    toLowerCase.indexOf("accessories") == -1 &&
    toLowerCase.indexOf("📱") == -1 &&
    toLowerCase.indexOf("🔌") == -1 &&
    toLowerCase.indexOf("🇷🇺🇷🇺") == -1 &&
    toLowerCase.indexOf("armor") == -1 &&
    toLowerCase.indexOf("29.05.2023") == -1 &&
    toLowerCase.indexOf("✁") == -1 &&
    toLowerCase.indexOf("iphone") == -1 &&
    toLowerCase.indexOf("samsung") == -1 &&
    toLowerCase.indexOf("гарантия") == -1 &&
    toLowerCase.indexOf("poco🇷🇺") == -1 &&
    toLowerCase.indexOf("mi 🇷🇺") == -1 &&
    toLowerCase.indexOf("от") == -1 &&
    toLowerCase.indexOf("pad🇷🇺") == -1 &&
    toLowerCase.indexOf("iphone🇪🇺") == -1 &&
    (toLowerCase === "honor🇷🇺"
      ? toLowerCase.indexOf("honor🇷🇺") == -1
      : toLowerCase) &&
    (toLowerCase === "itel🇷🇺"
      ? toLowerCase.indexOf("itel🇷🇺") == -1
      : toLowerCase) &&
    (toLowerCase === "realme🇷🇺"
      ? toLowerCase.indexOf("realme🇷🇺") == -1
      : toLowerCase) &&
    (toLowerCase === "tecno🇷🇺"
      ? toLowerCase.indexOf("tecno🇷🇺") == -1
      : toLowerCase) &&
    toLowerCase?.indexOf("царапин") == -1 &&
    toLowerCase?.indexOf("ремонт") == -1 &&
    toLowerCase?.indexOf("потертости") == -1 &&
    toLowerCase?.indexOf("скол") == -1 &&
    toLowerCase?.indexOf("пятна") == -1 &&
    toLowerCase?.indexOf("замена") == -1 &&
    toLowerCase?.indexOf("пиксель") == -1 &&
    toLowerCase?.indexOf("на экране") == -1 &&
    toLowerCase?.indexOf("мятый") == -1 &&
    toLowerCase?.indexOf("Мятый") == -1 &&
    toLowerCase?.indexOf("открытый") == -1 &&
    toLowerCase?.indexOf("дефект") == -1 &&
    toLowerCase?.indexOf("вскрыт") == -1 &&
    toLowerCase?.indexOf("реболл") == -1 &&
    toLowerCase?.indexOf("No charger") == -1 &&
    toLowerCase?.indexOf("открыт") == -1 &&
    toLowerCase?.indexOf("Мятый") == -1 &&
    toLowerCase?.indexOf("мятый") == -1 &&
    toLowerCase?.indexOf("без пломб") == -1 &&
    toLowerCase?.indexOf("прошит") == -1 &&
    toLowerCase?.indexOf("вскрыт") == -1 &&
    toLowerCase?.indexOf("угол") == -1 &&
    toLowerCase?.indexOf("прошит") == -1 &&
    toLowerCase?.indexOf("потерто") == -1 &&
    toLowerCase?.indexOf("экран") == -1 &&
    toLowerCase?.indexOf("realme") == -1 &&
    toLowerCase?.indexOf("актив") == -1 &&
    toLowerCase.indexOf("обменка") == -1 &&
    toLowerCase?.indexOf("уцен") == -1 &&
    toLowerCase?.indexOf("обме") == -1 &&
    toLowerCase?.indexOf("короб") == -1 &&
    toLowerCase?.indexOf("пломба") == -1 &&
    toLowerCase.indexOf('""') == -1 &&
    toLowerCase.indexOf("ремешок") == -1
};

export const baseFixL27 = (el) => {
  let toLowerCase = el.name?.toLowerCase();
  return toLowerCase?.indexOf("🇺🇸") != -1 &&
  (toLowerCase?.indexOf("16 128") != -1 ||
    toLowerCase?.indexOf("16 256") != -1 ||
    toLowerCase?.indexOf("16 512") != -1 ||
    toLowerCase?.indexOf("16 pro") != -1 ||
    toLowerCase?.indexOf("16 plus") != -1 ||
    toLowerCase?.indexOf("15 128") != -1 ||
    toLowerCase?.indexOf("15 256") != -1 ||
    toLowerCase?.indexOf("15 512") != -1 ||
    toLowerCase?.indexOf("15 pro") != -1 ||
    toLowerCase?.indexOf("15 plus") != -1)
  ? toLowerCase?.indexOf("🇺🇸") == -1
  : toLowerCase &&
  toLowerCase.indexOf("николай") == -1 &&
    toLowerCase.indexOf("заказ") == -1 &&
    toLowerCase.indexOf("@") == -1 &&
    toLowerCase.indexOf("л27") == -1 &&
    toLowerCase.indexOf("по") == -1 &&
    toLowerCase.indexOf("рублей") == -1 &&
    toLowerCase.indexOf("картой") == -1 &&
    toLowerCase.indexOf("гарантия") == -1 &&
    toLowerCase.indexOf("сертификат") == -1 &&
    toLowerCase.indexOf("обслуживание") == -1 &&
    toLowerCase.indexOf("macbook") == -1 &&
    toLowerCase.indexOf("apple") == -1 &&
    toLowerCase.indexOf("🇷🇺🇷🇺") == -1 &&
    toLowerCase.indexOf("armor") == -1 &&
    toLowerCase.indexOf("29.05.2023") == -1 &&
    toLowerCase.indexOf("✁") == -1 &&
    toLowerCase.indexOf("iphone") == -1 &&
    toLowerCase.indexOf("samsung") == -1 &&
    toLowerCase.indexOf("гарантия") == -1 &&
    toLowerCase.indexOf("poco🇷🇺") == -1 &&
    toLowerCase.indexOf("mi 🇷🇺") == -1 &&
    toLowerCase.indexOf("от") == -1 &&
    toLowerCase.indexOf("pad🇷🇺") == -1 &&
    toLowerCase.indexOf("iphone🇪🇺") == -1 &&
    (toLowerCase === "honor🇷🇺"
      ? toLowerCase.indexOf("honor🇷🇺") == -1
      : toLowerCase) &&
    (toLowerCase === "itel🇷🇺"
      ? toLowerCase.indexOf("itel🇷🇺") == -1
      : toLowerCase) &&
    (toLowerCase === "realme🇷🇺"
      ? toLowerCase.indexOf("realme🇷🇺") == -1
      : toLowerCase) &&
    (toLowerCase === "tecno🇷🇺"
      ? toLowerCase.indexOf("tecno🇷🇺") == -1
      : toLowerCase) &&
    toLowerCase?.indexOf("царапин") == -1 &&
    toLowerCase?.indexOf("ремонт") == -1 &&
    toLowerCase?.indexOf("потертости") == -1 &&
    toLowerCase?.indexOf("скол") == -1 &&
    toLowerCase?.indexOf("пятна") == -1 &&
    toLowerCase?.indexOf("замена") == -1 &&
    toLowerCase?.indexOf("пиксель") == -1 &&
    toLowerCase?.indexOf("на экране") == -1 &&
    toLowerCase?.indexOf("мятый") == -1 &&
    toLowerCase?.indexOf("Мятый") == -1 &&
    toLowerCase?.indexOf("открытый") == -1 &&
    toLowerCase?.indexOf("дефект") == -1 &&
    toLowerCase?.indexOf("вскрыт") == -1 &&
    toLowerCase?.indexOf("реболл") == -1 &&
    toLowerCase?.indexOf("No charger") == -1 &&
    toLowerCase?.indexOf("открыт") == -1 &&
    toLowerCase?.indexOf("Мятый") == -1 &&
    toLowerCase?.indexOf("мятый") == -1 &&
    toLowerCase?.indexOf("без пломб") == -1 &&
    toLowerCase?.indexOf("прошит") == -1 &&
    toLowerCase?.indexOf("вскрыт") == -1 &&
    toLowerCase?.indexOf("угол") == -1 &&
    toLowerCase?.indexOf("прошит") == -1 &&
    toLowerCase?.indexOf("потерто") == -1 &&
    toLowerCase?.indexOf("экран") == -1 &&
    toLowerCase?.indexOf("актив") == -1 &&
    toLowerCase?.indexOf("realme") == -1 &&
    toLowerCase.indexOf("обменка") == -1 &&
    toLowerCase?.indexOf("уцен") == -1 &&
    toLowerCase?.indexOf("обме") == -1 &&
    toLowerCase?.indexOf("короб") == -1 &&
    toLowerCase?.indexOf("пломба") == -1 &&
    toLowerCase.indexOf(" r ") == -1 &&
    toLowerCase.indexOf("airpods 2  l") == -1 &&
    toLowerCase.indexOf("airpods 2  r") == -1 &&
    toLowerCase.indexOf("airpods 3   r") == -1 &&
    toLowerCase.indexOf("airpods 3   l") == -1 &&
    toLowerCase.indexOf("airpods 4   r") == -1 &&
    toLowerCase.indexOf("airpods 4  l") == -1 &&
    toLowerCase.indexOf("airpods 4  box") == -1 &&
    toLowerCase.indexOf("airpods 3  box") == -1 &&
    toLowerCase.indexOf("airpods pro  l") == -1 &&
    toLowerCase.indexOf("airpods pro  r") == -1 &&
    toLowerCase.indexOf("airpods pro 2 usb-c  l") == -1 &&
    toLowerCase.indexOf("airpods pro 2 usb-c box") == -1 &&
    toLowerCase.indexOf("airpods pro 2 type-c  l") == -1 &&
    toLowerCase.indexOf("airpods pro 2 type-c   r") == -1 &&
    toLowerCase.indexOf("airpods pro  l") == -1 &&
    toLowerCase.indexOf("airpods pro 2 usb-c  l") == -1 &&
    toLowerCase.indexOf("ремешок") == -1
};

export const baseFixSunrise = (el) => {
  let toLowerCase = el.name?.toLowerCase();
  return toLowerCase?.indexOf("🇺🇸") != -1 &&
    (toLowerCase?.indexOf("16 128") != -1 ||
      toLowerCase?.indexOf("16 256") != -1 ||
      toLowerCase?.indexOf("16 512") != -1 ||
      toLowerCase?.indexOf("16 pro") != -1 ||
      toLowerCase?.indexOf("16 plus") != -1 ||
      toLowerCase?.indexOf("15 128") != -1 ||
      toLowerCase?.indexOf("15 256") != -1 ||
      toLowerCase?.indexOf("15 512") != -1 ||
      toLowerCase?.indexOf("15 pro") != -1 ||
      toLowerCase?.indexOf("15 plus") != -1)
    ? toLowerCase?.indexOf("🇺🇸") == -1
    : toLowerCase &&
        toLowerCase.indexOf("восход") == -1 &&
        toLowerCase.indexOf("💨") == -1 &&
        toLowerCase.indexOf("вилка") == -1 &&
        toLowerCase.indexOf("💬") == -1 &&
        toLowerCase.indexOf("🔗") == -1 &&
        toLowerCase.indexOf("⌚️") == -1 &&
        toLowerCase.indexOf("совместимость") == -1 &&
        toLowerCase.indexOf("шт") == -1 &&
        toLowerCase?.indexOf("царапин") == -1 &&
        toLowerCase?.indexOf("ремонт") == -1 &&
        toLowerCase?.indexOf("потертости") == -1 &&
        toLowerCase?.indexOf("скол") == -1 &&
        toLowerCase?.indexOf("пятна") == -1 &&
        toLowerCase?.indexOf("замена") == -1 &&
        toLowerCase?.indexOf("пиксель") == -1 &&
        toLowerCase?.indexOf("на экране") == -1 &&
        toLowerCase?.indexOf("мятый") == -1 &&
        toLowerCase?.indexOf("Мятый") == -1 &&
        toLowerCase?.indexOf("открытый") == -1 &&
        toLowerCase?.indexOf("дефект") == -1 &&
        toLowerCase?.indexOf("вскрыт") == -1 &&
        toLowerCase?.indexOf("реболл") == -1 &&
        toLowerCase?.indexOf("No charger") == -1 &&
        toLowerCase?.indexOf("открыт") == -1 &&
        toLowerCase?.indexOf("Мятый") == -1 &&
        toLowerCase?.indexOf("мятый") == -1 &&
        toLowerCase?.indexOf("без пломб") == -1 &&
        toLowerCase?.indexOf("прошит") == -1 &&
        toLowerCase?.indexOf("вскрыт") == -1 &&
        toLowerCase?.indexOf("угол") == -1 &&
        toLowerCase?.indexOf("прошит") == -1 &&
        toLowerCase?.indexOf("потерто") == -1 &&
        toLowerCase?.indexOf("экран") == -1 &&
        toLowerCase?.indexOf("актив") == -1 &&
        toLowerCase?.indexOf("realme") == -1 &&
        toLowerCase.indexOf("обменка") == -1 &&
        toLowerCase?.indexOf("уцен") == -1 &&
        toLowerCase?.indexOf("обме") == -1 &&
        toLowerCase?.indexOf("короб") == -1 &&
        toLowerCase?.indexOf("пломба") == -1 &&
        toLowerCase.indexOf(" r ") == -1 &&
        toLowerCase.indexOf("airpods 2  l") == -1 &&
        toLowerCase.indexOf("airpods 2  r") == -1 &&
        toLowerCase.indexOf("airpods 3   r") == -1 &&
        toLowerCase.indexOf("airpods 3   l") == -1 &&
        toLowerCase.indexOf("airpods 4   r") == -1 &&
        toLowerCase.indexOf("airpods 4   l") == -1 &&
        toLowerCase.indexOf("airpods 4  box") == -1 &&
        toLowerCase.indexOf("airpods 3  box") == -1 &&
        toLowerCase.indexOf("airpods pro l") == -1 &&
        toLowerCase.indexOf("airpods pro r") == -1 &&
        toLowerCase.indexOf("airpods pro 2 type-c  l") == -1 &&
        toLowerCase.indexOf("airpods pro 2 type-c   r") == -1 &&
        toLowerCase.indexOf("ремешок") == -1;
};

export const baseFixInfinity = (el) => {
  let toLowerCase = el.name?.toLowerCase();
  return toLowerCase?.indexOf("🇺🇸") != -1 &&
    (toLowerCase?.indexOf("16 128") != -1 ||
      toLowerCase?.indexOf("16 256") != -1 ||
      toLowerCase?.indexOf("16 512") != -1 ||
      toLowerCase?.indexOf("16 pro") != -1 ||
      toLowerCase?.indexOf("16 plus") != -1 ||
      toLowerCase?.indexOf("15 128") != -1 ||
      toLowerCase?.indexOf("15 256") != -1 ||
      toLowerCase?.indexOf("15 512") != -1 ||
      toLowerCase?.indexOf("15 pro") != -1 ||
      toLowerCase?.indexOf("15 plus") != -1)
    ? toLowerCase?.indexOf("🇺🇸") == -1
    : toLowerCase &&
        toLowerCase.indexOf("infinity") == -1 &&
        toLowerCase.indexOf("блок") == -1 &&
        toLowerCase.indexOf("вилка") == -1 &&
        toLowerCase.indexOf("apple watch") == -1 &&
        toLowerCase.indexOf("ultra 2 (2024)") == -1 &&
        toLowerCase?.indexOf("царапин") == -1 &&
        toLowerCase?.indexOf("ремонт") == -1 &&
        toLowerCase?.indexOf("потертости") == -1 &&
        toLowerCase?.indexOf("скол") == -1 &&
        toLowerCase?.indexOf("пятна") == -1 &&
        toLowerCase?.indexOf("замена") == -1 &&
        toLowerCase?.indexOf("пиксель") == -1 &&
        toLowerCase?.indexOf("на экране") == -1 &&
        toLowerCase?.indexOf("мятый") == -1 &&
        toLowerCase?.indexOf("Мятый") == -1 &&
        toLowerCase?.indexOf("открытый") == -1 &&
        toLowerCase?.indexOf("дефект") == -1 &&
        toLowerCase?.indexOf("вскрыт") == -1 &&
        toLowerCase?.indexOf("реболл") == -1 &&
        toLowerCase?.indexOf("No charger") == -1 &&
        toLowerCase?.indexOf("открыт") == -1 &&
        toLowerCase?.indexOf("Мятый") == -1 &&
        toLowerCase?.indexOf("мятый") == -1 &&
        toLowerCase?.indexOf("без пломб") == -1 &&
        toLowerCase?.indexOf("прошит") == -1 &&
        toLowerCase?.indexOf("вскрыт") == -1 &&
        toLowerCase?.indexOf("угол") == -1 &&
        toLowerCase?.indexOf("прошит") == -1 &&
        toLowerCase?.indexOf("потерто") == -1 &&
        toLowerCase?.indexOf("экран") == -1 &&
        toLowerCase?.indexOf("актив") == -1 &&
        toLowerCase?.indexOf("realme") == -1 &&
        toLowerCase.indexOf("обменка") == -1 &&
        toLowerCase?.indexOf("уцен") == -1 &&
        toLowerCase?.indexOf("обме") == -1 &&
        toLowerCase?.indexOf("короб") == -1 &&
        toLowerCase?.indexOf("пломба") == -1 &&
        toLowerCase.indexOf(" r ") == -1 &&
        toLowerCase.indexOf("airpods 2  l") == -1 &&
        toLowerCase.indexOf("airpods 2  r") == -1 &&
        toLowerCase.indexOf("airpods 3   r") == -1 &&
        toLowerCase.indexOf("airpods 3   l") == -1 &&
        toLowerCase.indexOf("airpods 4   r") == -1 &&
        toLowerCase.indexOf("airpods 4   l") == -1 &&
        toLowerCase.indexOf("airpods 4  box") == -1 &&
        toLowerCase.indexOf("airpods 3  box") == -1 &&
        toLowerCase.indexOf("airpods pro l") == -1 &&
        toLowerCase.indexOf("airpods pro r") == -1 &&
        toLowerCase.indexOf("airpods pro 2 type-c  l") == -1 &&
        toLowerCase.indexOf("airpods pro 2 type-c   r") == -1 &&
        toLowerCase.indexOf("ремешок") == -1;
};
