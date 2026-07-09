const moveCnToStart = (value) => {
  if (typeof value !== "string") {
    return value;
  }

  const trimmedValue = value.trim();
  const match = trimmedValue.match(/^(.*?)(?:\s+)?(CN|🇨🇳)$/);

  if (!match) {
    return trimmedValue;
  }

  return `${match[2]} ${match[1].trim()}`.trim();
};

export const returnFixNameTrubkoved = (name) => {
  const CNToStart = moveCnToStart(name)
  const replaceGb = CNToStart.replace("Gb", "");
  const replaceGB = replaceGb.replace("GB", "");
  const replaceSpaceBlack = replaceGB.replace("Space Black", "Black");
  const replaceSpaceGray = replaceSpaceBlack.replace("Space Gray", "Gray");
  const fixLavender = replaceSpaceGray.replace("Lavander", "Lavender")
  const fixZFold6 = fixLavender.replace("Z Fold6", "Z Fold 6")
  const fixFlip6 = fixZFold6.replace("Z Flip6", "Z Flip 6")
  const fixFold7 = fixFlip6.replace("Z Fold7", "Z Fold 7")
  const fixFlip7 = fixFold7.replace("Z Flip7", "Z Flip 7")
  const fixMM3 = fixFlip7.replace("Magic Mouse (USB-C)", "Magic Mouse 3")
  const fixWiFi = fixMM3.replace("Wi‑Fi", "Wi-Fi")
  const fixM4 = fixWiFi.replace("(M4)", "M4")
  const fixM3 = fixM4.replace("(M3)", "M3")
  const fixM5 = fixM3.replace("(M5)", "M5")
  const fixSE2 = fixM5.replace("SE (2024)", "SE2")
  const fixSE3 = fixSE2.replace("SE (2025)", "SE3")
  const fixSE21 = fixSE3.replace("SE 2 (2024)", "SE2")
  const fixSE31 = fixSE21.replace("SE 3 (2025)", "SE3")
  const replaceMM = fixSE31.replace("mm", "")
  const fixYandex = replaceMM.replace("Yandex", "Яндекс")
  const fixDisc = fixYandex.replace("Disk", "Disc")
  const fix1TB = fixDisc.replace("/1024 ", "/1TB ")
  const fixZFLIP = fix1TB.replace("zflip", "z flip")
  const fixWiFiLTE = fixZFLIP.replace("Wi-Fi + LTE", "5G")
  const fixS26Plus = fixWiFiLTE.replace("s26 Plus", "S26+")
  const fixS25Plus = fixS26Plus.replace("s25 Plus", "S25+")
  const fix128 = fixS25Plus.replace("128 ГБ,", "128")
  const fix256 = fix128.replace("256 ГБ", "256")
  const fix512 = fix256.replace("512 ГБ", "512")
  const fix1TB1 = fix512.replace("1 ТБ", "1TB")
  const fix2TB = fix1TB1.replace("2 ТБ", "2TB")
  const fixse3 = fix2TB.replace("SE 3", "SE3")
  const fixS11 = fixse3.replace("Apple Watch Series 11", "S11")
  const fixCN = fixS11.replace("CN", "🇨🇳")
  
  const fixAir13 = fixCN.replace("Air 13\"", "Air 13")
  const fixAir11 = fixAir13.replace("Air 13\"", "Air 11")
  const fixTB = fixAir11.replace(" ТБ,", "TB")
  const fixGB = fixTB.replace(" ГБ,", "")
  const fixiPhoneSimeSim = fixGB.indexOf("iPhone 16") !== -1 ? fixGB.replace(" nano SIM + eSIM,", "") : fixGB
  const fixiPhoneeSim = fixiPhoneSimeSim.indexOf("iPhone 16") !== -1 ? fixiPhoneSimeSim.replace(" eSIM,", "") : fixiPhoneSimeSim
  
  const fixToken = fixiPhoneeSim.replace(",", "")
  const fixGB2 = fixToken.replace(" ГБ", "")
  const fixNanoSim = /nano\s+sim\s+\+\s+esim/i.test(fixGB2)
  ? `nano SIM + eSIM ${fixGB2
      .replace(/nano\s+sim\s+\+\s+esim/i, "")
      .replace(/,\s+/g, " ")
      .replace(/\s{2,}/g, " ")
      .trim()}`
  : fixGB2;
  const fixуSim = /esim/i.test(fixNanoSim)
  ? `eSIM ${fixNanoSim
      .replace(/esim/i, "")
      .replace(/,\s+/g, " ")
      .replace(/\s{2,}/g, " ")
      .trim()}`
  : fixNanoSim;
  
  const fixSemeSim = fixуSim.replace("eSIM nano SIM", "(Sim+eSim)")

  return fixSemeSim;
};