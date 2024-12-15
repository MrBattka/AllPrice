
const fixFlags = (str) => {
  const result = [];

  let current = str;
  for (let i = 1; i < str.length; i++) {
    current =
      current.slice(4) +
      " " +
      current[0] +
      current[1] +
      current[2] +
      current[3];
    result.push(current);
  }
  return result[0];
};

export const returnNameInArrMiOpts = (name) => {
  let sliceFlags =
    name.indexOf("₽") != -1 ? name.split("₽", 2) : name;
  let reverseStrName = name.split("").reverse().join("");
  
  let removeRUB =
    reverseStrName[0] === "-" ? reverseStrName.slice(1) : reverseStrName;
    let splitStick = removeRUB.indexOf("-") !== -1 ? /\-(.+)/.exec(removeRUB)[1] : removeRUB
  let splitPrice = /\s(.+)/.exec(splitStick)[1];
  
  
  let reverseBackStrName = splitStick.split("").reverse().join("");

  return reverseBackStrName + sliceFlags[1];
};

export const returnExtraPriceMiOpts = (name) => {
  let reverseStrName = name.split("").reverse().join("");
  let sliceFlags =
    reverseStrName.indexOf("₽") != -1 ? reverseStrName.split("₽", 2) : reverseStrName;
    let slicePrice =
    sliceFlags[1].indexOf("-") != -1 && sliceFlags[1].indexOf("Wi-Fi") ==-1 ? sliceFlags[1].split("-", 2) : sliceFlags[1];
  let reverseBackStrName = slicePrice[0].split("").reverse().join("");
  let extraPrice = Number(reverseBackStrName) + 700

  return extraPrice;
};

export const returnStockPriceMiOpts = (name) => {
  let reverseStrName = name.split("").reverse().join("");
  let sliceFlags =
    reverseStrName.indexOf("₽") != -1 ? reverseStrName.split("₽", 2) : reverseStrName;
    let slicePrice =
    sliceFlags[1].indexOf("-") != -1 && sliceFlags[1].indexOf("Wi-Fi") ==-1 ? sliceFlags[1].split("-", 2) : sliceFlags[1];
  let reverseBackStrName = slicePrice[0].split("").reverse().join("");
  let extraPrice = Number(reverseBackStrName) + 400

  return extraPrice;
};

export const fixNameMiOpts = (name) => {
  // const toLowercase = name.toLowerCase();
  const removeDoubleSpace = name.replace(/\s+/g, " ");
  const removeNewIcon = removeDoubleSpace.replace("🆕", "");


  const fixMI = removeNewIcon.replace("Xiaomi", "Mi");
  const fixRedmi = fixMI.replace("Redmi", "");
  const fixPoco = fixMI.replace("Poco", "POCO");
  const replaceGB = fixPoco.replace("GB", "");
  const fixS24FE = replaceGB.replace("S24FE", "S24 FE");
  

  return fixS24FE;
};
