export const returnFixNameBoltun = (name) => {
  const removeDoubleSpace = name.replace(/\s+/g, " ");
  const replaceGb = removeDoubleSpace.replace("Gb", "");
  const replaceGB = replaceGb.replace("GB", "");
  const fixDual = replaceGB.replace(" Dua ", " Dual ");
  const replaceSpaceBlack = fixDual.replace("Space Black", "Black");
  const replaceSpaceGray = replaceSpaceBlack.replace("Space Gray", "Gray");
  const replaceNanoSim = replaceSpaceGray.replace("nano SIM + eSIM ", "");
  const fixNatural = replaceNanoSim.replace("Narural", "Natural");
  const fixSony = fixNatural.replace("Sony Xperia", "Dual 🇭🇰 Sony Xperia");
  const fix17256 = fixSony.replace("17 256 eSim", "eSim 17 256");
  const fix17512 = fix17256.replace("17 512 eSim", "eSim 17 512");
  const fix172561 = fix17512.replace("17 256 Nano Sim+eSim", "Sim+eSim 17 256");
  const fix175121 = fix172561.replace(
    "17 512 Nano Sim+eSim",
    "Sim+eSim 17 512"
  );
  const fix17Pro256 = fix175121.replace("17 Pro 256 eSim", "eSim 17 Pro 256");
  const fix17Pro512 = fix17Pro256.replace("17 Pro 512 eSim", "eSim 17 Pro 512");
  const fix17Pro1tb = fix17Pro512.replace("17 Pro 1Tb eSim", "eSim 17 Pro 1Tb");
  const fix17Pro2561 = fix17Pro1tb.replace(
    "17 Pro 256 Nano Sim+eSim",
    "Sim+eSim 17 Pro 256"
  );
  const fix17Pro5121 = fix17Pro2561.replace(
    "17 Pro 512 Nano Sim+eSim",
    "Sim+eSim 17 Pro 512"
  );
  const fix17Pro1tb1 = fix17Pro5121.replace(
    "17 Pro 1Tb Nano Sim+eSim",
    "Sim+eSim 17 Pro 1Tb"
  );
  const fix17ProMax256 = fix17Pro1tb1.replace(
    "17 Pro Max 256 eSim",
    "eSim 17 Pro Max 256"
  );
  const fix17ProMax512 = fix17ProMax256.replace(
    "17 Pro Max 512 eSim",
    "eSim 17 Pro Max 512"
  );
  const fix17ProMax1tb = fix17ProMax512.replace(
    "17 Pro Max 1Tb eSim",
    "eSim 17 Pro Max 1Tb"
  );
  const fix17ProMax2tb = fix17ProMax1tb.replace(
    "17 Pro Max 2Tb eSim",
    "eSim 17 Pro Max 2Tb"
  );
  const fix17ProMax2561 = fix17ProMax2tb.replace(
    "17 Pro Max 256 Nano Sim+eSim",
    "Sim+eSim 17 Pro Max 256"
  );
  const fix17ProMax5121 = fix17ProMax2561.replace(
    "17 Pro Max 512 Nano Sim+eSim",
    "Sim+eSim 17 Pro Max 512"
  );
  const fix17ProMax1tb1 = fix17ProMax5121.replace(
    "17 Pro Max 1Tb Nano Sim+eSim",
    "Sim+eSim 17 Pro Max 1Tb"
  );
  const fix17ProMax2tb1 = fix17ProMax1tb1.replace(
    "17 Pro Max 2Tb Nano Sim+eSim",
    "Sim+eSim 17 Pro Max 2Tb"
  );

  const fixNubiaPadProWhite = fix17ProMax1tb1.replace(
    "Silver",
    "White"
  );
  const fixNubiaPadProBlack = fixNubiaPadProWhite.replace(
    "Black",
    "Gray"
  );

  return fixNubiaPadProBlack;
};
